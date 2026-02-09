'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { Section } from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';

// Blog post content (in a real app, this would come from MDX files)
const blogPostsContent: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string;
  tags: string[];
}> = {
  'building-scalable-angular-enterprise-applications': {
    title: 'Building Scalable Angular Enterprise Applications',
    excerpt: 'Lessons learned from architecting Angular applications that serve millions of users.',
    date: 'February 5, 2026',
    readTime: '8 min read',
    category: 'Frontend Architecture',
    author: 'Viveka Kannan',
    tags: ['Angular', 'Architecture', 'Enterprise', 'NgRx', 'Performance'],
    content: `
## Introduction

After spending several years building Angular applications at enterprise scale, particularly during my time at SiriusXM, I've gathered insights that I wish I had when I started. This post covers the architectural patterns and practices that have proven most valuable for building applications that serve millions of users.

## The Foundation: Module Architecture

One of the first decisions that impacts long-term scalability is how you structure your modules. Early in my career, I made the mistake of creating a monolithic Angular application with everything in the AppModule. The result? Slow build times, difficult testing, and a codebase that became increasingly hard to navigate.

### Feature Modules

The key insight is to organize your application into feature modules that encapsulate related functionality:

\`\`\`typescript
// feature/user-management/user-management.module.ts
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
\`\`\`

Each feature module should be self-contained, with its own routing, components, and services. This approach enabled us to achieve **lazy loading**, which reduced our initial bundle size by 60%.

## State Management with NgRx

For applications with complex state requirements, NgRx has been invaluable. However, it's important to use it judiciously—not every piece of state belongs in the store.

### When to Use NgRx

- **Global state** that's accessed by multiple, unrelated components
- **Server-synced data** that needs to be cached and shared
- **Complex state transitions** that benefit from being explicit and traceable

### When NOT to Use NgRx

- **Local form state** that lives and dies with a component
- **Simple parent-child data flow** that can use @Input/@Output
- **Ephemeral UI state** like loading spinners or modal visibility

Here's a pattern I've found effective for organizing NgRx code:

\`\`\`typescript
// Store structure
store/
├── app.state.ts
├── user/
│   ├── user.actions.ts
│   ├── user.effects.ts
│   ├── user.reducer.ts
│   ├── user.selectors.ts
│   └── user.facade.ts
└── subscription/
    ├── subscription.actions.ts
    └── ...
\`\`\`

The **facade pattern** is particularly useful—it provides a clean API for components to interact with the store without knowing the underlying implementation details.

## Performance Optimization Strategies

At SiriusXM, we dealt with dashboards displaying thousands of items. Here are the strategies that made the biggest impact:

### 1. OnPush Change Detection

By default, Angular checks every component on every change detection cycle. Using OnPush tells Angular to only check a component when its inputs change or an observable emits:

\`\`\`typescript
@Component({
  selector: 'app-user-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`...\`
})
export class UserCardComponent {
  @Input() user: User;
}
\`\`\`

This simple change reduced unnecessary change detection cycles by approximately 70% in our main dashboard.

### 2. Virtual Scrolling

For long lists, virtual scrolling is essential. The CDK virtual scroll module renders only the visible items:

\`\`\`typescript
<cdk-virtual-scroll-viewport itemSize="50" class="viewport">
  <div *cdkVirtualFor="let item of items" class="item">
    {{ item.name }}
  </div>
</cdk-virtual-scroll-viewport>
\`\`\`

### 3. TrackBy Functions

When using *ngFor, always provide a trackBy function to help Angular identify which items have changed:

\`\`\`typescript
trackByUserId(index: number, user: User): string {
  return user.id;
}
\`\`\`

## Reusable Component Library

One of the initiatives I'm most proud of was creating a shared component library that **reduced development time by 25%** and **cut code duplication by 40%**. Here's the approach:

### 1. Identify Common Patterns

We audited our codebase and found dozens of slightly different button implementations, card layouts, and form controls. The first step was cataloging these patterns.

### 2. Design with Flexibility

Each shared component needs to be flexible enough for various use cases but opinionated enough to ensure consistency:

\`\`\`typescript
@Component({
  selector: 'app-button',
  template: \`
    <button
      [class]="buttonClass"
      [disabled]="disabled || loading"
      [type]="type">
      <app-spinner *ngIf="loading" [size]="'small'"></app-spinner>
      <ng-content *ngIf="!loading"></ng-content>
    </button>
  \`
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
}
\`\`\`

### 3. Document Everything

We used Storybook to document our component library, making it easy for the team to discover and use existing components.

## Testing Strategy

A robust testing strategy is crucial for enterprise applications. Here's what worked for us:

- **Unit tests** for services and pure functions (80%+ coverage)
- **Integration tests** for NgRx effects and reducers
- **Component tests** using Angular Testing Library
- **E2E tests** for critical user journeys (using Cypress)

The key is finding the right balance—over-testing leads to maintenance burden, while under-testing leads to bugs in production.

## Conclusion

Building scalable Angular applications requires thoughtful architecture decisions upfront. The patterns I've shared—feature modules, strategic NgRx usage, performance optimization, and reusable components—have proven effective in real-world enterprise environments.

Remember: the goal isn't to use every pattern available, but to choose the right tools for your specific context. Start simple, measure performance, and optimize where needed.

---

*Have questions or want to discuss Angular architecture? Feel free to reach out on [LinkedIn](https://linkedin.com/in/vivekakannan).*
    `,
  },
  'microservices-spring-boot-practical-guide': {
    title: 'Microservices with Spring Boot: A Practical Guide',
    excerpt: 'A comprehensive walkthrough of designing and implementing microservices using Spring Boot.',
    date: 'January 28, 2026',
    readTime: '12 min read',
    category: 'System Design',
    author: 'Viveka Kannan',
    tags: ['Spring Boot', 'Microservices', 'Java', 'Kafka', 'Architecture'],
    content: `
## Introduction

Microservices architecture has become the de facto standard for building large-scale applications. During my time at SiriusXM, I led the design and implementation of microservices that handle millions of requests daily. This guide shares the practical lessons I've learned.

## When to Use Microservices

Before diving into implementation, it's crucial to understand when microservices make sense. They're not a silver bullet—in fact, they add significant complexity. Consider microservices when:

- **Team size warrants it**: Multiple teams need to work independently
- **Different scaling needs**: Parts of your system have vastly different load patterns
- **Technology diversity**: Different services benefit from different tech stacks
- **Organizational alignment**: You want services to align with business domains

## Service Design Principles

### Domain-Driven Design

Each microservice should represent a bounded context. At SiriusXM, we organized services around business capabilities:

- **Account Service**: User profiles, authentication, preferences
- **Subscription Service**: Plans, billing, entitlements
- **Content Service**: Media catalog, metadata, recommendations
- **Streaming Service**: Audio delivery, quality adaptation

### API Design

Each service exposes a well-defined API. We followed these principles:

\`\`\`java
@RestController
@RequestMapping("/api/v1/subscriptions")
public class SubscriptionController {
    
    @GetMapping("/{userId}")
    public ResponseEntity<SubscriptionDto> getSubscription(
            @PathVariable String userId) {
        return subscriptionService.findByUserId(userId)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<SubscriptionDto> createSubscription(
            @Valid @RequestBody CreateSubscriptionRequest request) {
        SubscriptionDto created = subscriptionService.create(request);
        return ResponseEntity
            .created(URI.create("/api/v1/subscriptions/" + created.getId()))
            .body(created);
    }
}
\`\`\`

Key principles:
- **Versioned APIs** for backward compatibility
- **Consistent naming conventions**
- **Proper HTTP status codes**
- **Request validation** using Bean Validation

## Event-Driven Communication with Kafka

One of the most impactful architectural decisions was implementing event-driven communication. Instead of synchronous REST calls between services, we used Apache Kafka for asynchronous messaging.

### Benefits We Observed

1. **Decoupled services**: Services don't need to know about each other
2. **Improved resilience**: If a consumer is down, events are retained
3. **Scalability**: Consumers can scale independently
4. **Audit trail**: Events provide a natural audit log

### Implementation Pattern

\`\`\`java
@Service
public class SubscriptionEventPublisher {
    
    private final KafkaTemplate<String, SubscriptionEvent> kafkaTemplate;
    
    public void publishSubscriptionCreated(Subscription subscription) {
        SubscriptionEvent event = SubscriptionEvent.builder()
            .type(EventType.SUBSCRIPTION_CREATED)
            .subscriptionId(subscription.getId())
            .userId(subscription.getUserId())
            .planId(subscription.getPlanId())
            .timestamp(Instant.now())
            .build();
            
        kafkaTemplate.send("subscription-events", 
            subscription.getUserId(), event);
    }
}

@Service
public class NotificationEventConsumer {
    
    @KafkaListener(topics = "subscription-events")
    public void handleSubscriptionEvent(SubscriptionEvent event) {
        switch (event.getType()) {
            case SUBSCRIPTION_CREATED:
                notificationService.sendWelcomeEmail(event.getUserId());
                break;
            case SUBSCRIPTION_CANCELLED:
                notificationService.sendCancellationEmail(event.getUserId());
                break;
        }
    }
}
\`\`\`

## Containerization and Deployment

We containerized all services with Docker and deployed to Kubernetes. Here's a typical Dockerfile:

\`\`\`dockerfile
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

### Kubernetes Considerations

- **Resource limits**: Always set memory and CPU limits
- **Health checks**: Implement readiness and liveness probes
- **Horizontal Pod Autoscaling**: Scale based on metrics
- **Config management**: Use ConfigMaps and Secrets

## Database Per Service

Each microservice owns its data. This was initially uncomfortable coming from a monolithic mindset, but it's essential for true independence:

\`\`\`yaml
# Subscription Service
spring:
  datasource:
    url: jdbc:postgresql://subscription-db:5432/subscriptions
    
# Account Service  
spring:
  datasource:
    url: jdbc:postgresql://account-db:5432/accounts
\`\`\`

The tradeoff is that cross-service queries become more complex. We solved this through:
- Event sourcing for data propagation
- API composition in the gateway
- CQRS patterns for read-heavy operations

## Monitoring and Observability

With distributed systems, observability is critical. We implemented:

### Distributed Tracing

\`\`\`java
@Bean
public RestTemplate restTemplate(RestTemplateBuilder builder) {
    return builder
        .setConnectTimeout(Duration.ofSeconds(5))
        .setReadTimeout(Duration.ofSeconds(5))
        .build();
}
\`\`\`

Using Spring Cloud Sleuth, every request gets a trace ID that propagates across services, making debugging much easier.

### Centralized Logging

All services log in JSON format to a central ELK stack:

\`\`\`java
logger.info("Subscription created", 
    kv("userId", userId),
    kv("planId", planId),
    kv("amount", amount));
\`\`\`

### Metrics with CloudWatch

We pushed custom metrics to AWS CloudWatch for monitoring and alerting:

\`\`\`java
@Timed(value = "subscription.creation", 
       description = "Time to create subscription")
public Subscription createSubscription(CreateSubscriptionRequest request) {
    // implementation
}
\`\`\`

## Lessons Learned

1. **Start with a modular monolith**: Don't jump to microservices immediately. Build a well-structured monolith and extract services as needed.

2. **Invest in developer experience**: Local development with many services is hard. We used Docker Compose and mock services to make it manageable.

3. **Embrace eventual consistency**: Not everything needs to be immediately consistent. Design for eventual consistency where possible.

4. **Automate everything**: CI/CD, testing, deployment—manual processes don't scale.

5. **Plan for failure**: Services will fail. Design for resilience with circuit breakers, retries, and graceful degradation.

## Conclusion

Microservices done right can provide significant benefits in terms of scalability, team autonomy, and deployment flexibility. But they also introduce complexity. The key is to adopt patterns incrementally and always keep the business goals in mind.

---

*Want to discuss microservices architecture? Connect with me on [LinkedIn](https://linkedin.com/in/vivekakannan).*
    `,
  },
  'performance-optimization-api-response-times': {
    title: 'Performance Optimization: From 2s to 200ms',
    excerpt: 'How I improved API response times by 90% through strategic optimization.',
    date: 'January 15, 2026',
    readTime: '10 min read',
    category: 'Performance',
    author: 'Viveka Kannan',
    tags: ['Performance', 'SQL', 'Optimization', 'Caching', 'Java'],
    content: `
## The Problem

When I joined the team at SiriusXM, one of our critical APIs—the subscription dashboard endpoint—was responding in **2+ seconds** on average. For an endpoint called on nearly every user interaction, this was unacceptable. Users were complaining, and the product team was frustrated.

My goal: get this down to under 300ms. We achieved **200ms**—a 90% improvement. Here's how.

## Step 1: Measure Everything

Before optimizing, you need to understand where time is being spent. I used a combination of:

- **Application Performance Monitoring (APM)**: AWS X-Ray for distributed tracing
- **Database query analysis**: SQL Server's execution plans
- **Profiling**: Flame graphs for CPU analysis

The initial breakdown:
- Database queries: **1.4 seconds** (70%)
- External API calls: **400ms** (20%)
- Application logic: **200ms** (10%)

Clearly, the database was the primary bottleneck.

## Step 2: Query Optimization

### The N+1 Problem

The first issue was a classic N+1 query problem. For each subscription, we were making separate queries for:
- User details
- Plan information
- Payment history
- Feature entitlements

**Before:**
\`\`\`java
public List<SubscriptionDto> getSubscriptions(String userId) {
    List<Subscription> subscriptions = subscriptionRepo.findByUserId(userId);
    
    return subscriptions.stream()
        .map(s -> {
            User user = userRepo.findById(s.getUserId()); // N+1!
            Plan plan = planRepo.findById(s.getPlanId()); // N+1!
            List<Payment> payments = paymentRepo.findBySubscriptionId(s.getId()); // N+1!
            return mapToDto(s, user, plan, payments);
        })
        .collect(toList());
}
\`\`\`

**After:**
\`\`\`java
public List<SubscriptionDto> getSubscriptions(String userId) {
    return subscriptionRepo.findSubscriptionsWithDetails(userId);
}

// Repository
@Query("""
    SELECT new com.example.dto.SubscriptionDto(
        s.id, s.status, u.name, u.email, p.name, p.price
    )
    FROM Subscription s
    JOIN s.user u
    JOIN s.plan p
    WHERE s.userId = :userId
    """)
List<SubscriptionDto> findSubscriptionsWithDetails(@Param("userId") String userId);
\`\`\`

**Impact: Reduced database queries from 50+ to 2, saving ~800ms.**

### Index Analysis

Next, I analyzed the query execution plans and found missing indexes:

\`\`\`sql
-- Before: Full table scan
SELECT * FROM payments WHERE subscription_id = ? AND status = 'COMPLETED';

-- Added index
CREATE INDEX idx_payments_subscription_status 
ON payments(subscription_id, status) 
INCLUDE (amount, created_at);
\`\`\`

**Impact: Query time reduced from 400ms to 15ms.**

### Pagination

We were loading all historical data when users only needed the recent items:

\`\`\`java
// Before: Load everything
List<Payment> payments = paymentRepo.findBySubscriptionId(subId);

// After: Paginate
Page<Payment> payments = paymentRepo.findBySubscriptionId(
    subId, 
    PageRequest.of(0, 10, Sort.by("createdAt").descending())
);
\`\`\`

**Impact: Further 200ms reduction in average response time.**

## Step 3: Caching Strategy

Not all data changes frequently. We implemented a multi-layer caching strategy:

### Application-Level Cache

\`\`\`java
@Cacheable(value = "plans", key = "#planId")
public Plan getPlan(String planId) {
    return planRepository.findById(planId)
        .orElseThrow(() -> new NotFoundException("Plan not found"));
}

@CacheEvict(value = "plans", key = "#plan.id")
public Plan updatePlan(Plan plan) {
    return planRepository.save(plan);
}
\`\`\`

### Redis for Distributed Cache

For data shared across instances:

\`\`\`java
@Configuration
public class CacheConfig {
    
    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory factory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(15))
            .serializeValuesWith(
                SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer())
            );
            
        return RedisCacheManager.builder(factory)
            .cacheDefaults(config)
            .build();
    }
}
\`\`\`

**Impact: Cache hit rate of 85%, reducing average DB load by 60%.**

## Step 4: Async Operations

Some operations didn't need to block the response:

\`\`\`java
@Async
public CompletableFuture<Void> logAccessEvent(AccessEvent event) {
    // Fire and forget - doesn't affect response time
    analyticsService.trackAccess(event);
    return CompletableFuture.completedFuture(null);
}

public SubscriptionDto getSubscription(String userId) {
    SubscriptionDto subscription = subscriptionService.findByUserId(userId);
    
    // Log asynchronously
    logAccessEvent(new AccessEvent(userId, "SUBSCRIPTION_VIEW"));
    
    return subscription;
}
\`\`\`

**Impact: Removed 50ms of blocking operations from the critical path.**

## Step 5: Connection Pool Tuning

Our connection pool was misconfigured:

\`\`\`yaml
# Before
spring:
  datasource:
    hikari:
      maximum-pool-size: 10  # Too small!
      connection-timeout: 30000  # Too long!

# After  
spring:
  datasource:
    hikari:
      maximum-pool-size: 30
      minimum-idle: 10
      connection-timeout: 5000
      idle-timeout: 300000
\`\`\`

**Impact: Eliminated connection wait times, averaging 20ms improvement.**

## Results Summary

| Optimization | Time Saved |
|-------------|------------|
| N+1 query elimination | 800ms |
| Index optimization | 385ms |
| Pagination | 200ms |
| Caching | 400ms |
| Async operations | 50ms |
| Connection pool tuning | 20ms |
| **Total** | **~1855ms** |

Final average response time: **~200ms** (from 2050ms)

## Monitoring the Gains

We set up dashboards to ensure our gains persisted:

\`\`\`java
@Timed(value = "api.subscription.get", 
       percentiles = {0.5, 0.95, 0.99})
public SubscriptionDto getSubscription(String userId) {
    // implementation
}
\`\`\`

Key metrics we tracked:
- P50, P95, P99 response times
- Database query duration
- Cache hit rates
- Error rates

## Lessons Learned

1. **Measure first**: Never optimize without data. Intuition is often wrong.

2. **Low-hanging fruit first**: N+1 queries and missing indexes are common and easy to fix.

3. **Cache strategically**: Not everything should be cached. Consider data freshness requirements.

4. **Test at scale**: Performance issues often only appear at production-level load.

5. **Monitor continuously**: Performance can regress. Set up alerts for degradation.

## Conclusion

Performance optimization is both an art and a science. The key is systematic measurement, targeted improvements, and continuous monitoring. A 90% improvement might seem dramatic, but it came from many small, incremental changes—each informed by data.

---

*Have performance challenges you're working through? I'd love to hear about them. Reach out on [LinkedIn](https://linkedin.com/in/vivekakannan).*
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsContent[slug];

  if (!post) {
    return (
      <Section>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-white mb-4">
            Post not found
          </h1>
          <p className="text-dark-600 dark:text-dark-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button href="/blog" variant="primary">
            Back to Blog
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <ReadingProgress />
      
      <article className="pt-10">
        <Section>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent-500/10 text-accent-400 mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm text-dark-500 dark:text-dark-400">
              <span>{post.author}</span>
              <span>•</span>
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose-custom">
              {/* Simple markdown-like rendering */}
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-bold mt-12 mb-4 text-white">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-white">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('```')) {
                  return null; // Skip code fence markers for simplicity
                }
                if (line.startsWith('| ')) {
                  return <p key={i} className="font-mono text-sm text-dark-600 dark:text-dark-400">{line}</p>;
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="text-dark-600 dark:text-dark-400 ml-4">{line.replace('- ', '')}</li>;
                }
                if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                  return <li key={i} className="text-dark-600 dark:text-dark-400 ml-4 list-decimal">{line.replace(/^\d\. /, '')}</li>;
                }
                if (line.trim() === '') {
                  return <br key={i} />;
                }
                if (line.startsWith('---')) {
                  return <hr key={i} className="my-8 border-dark-800" />;
                }
                // Handle bold and inline code
                let processed = line
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-accent-500/10 text-accent-400 rounded text-sm">$1</code>');
                
                return <p key={i} className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: processed }} />;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-dark-800">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-dark-800 text-dark-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author box */}
            <div className="mt-12 p-6 rounded-2xl bg-dark-900 border border-dark-800">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  VK
                </div>
                <div>
                  <h3 className="font-bold text-white">Viveka Kannan</h3>
                  <p className="text-sm text-accent-500 mb-2">Full Stack Developer</p>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    7+ years building enterprise applications with Java, Spring Boot, Angular, and React.
                    Passionate about clean architecture and mentoring engineers.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <Button href="/blog" variant="ghost">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Posts
              </Button>
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </Section>
      </article>
    </>
  );
}
