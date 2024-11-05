---
title: A design principle to rule them all.
description: Exploring and breaking design principles into more fundamental parts.
date: '2024-10-30'
tags:
  - Tech
  - Development
  - Software
  - Design
image: https://plus.unsplash.com/premium_vector-1711987681684-5f80c7411b0e
draft: false
---

<script>
  import Mermaid from '$lib/components/markdown/mermaid.svelte';
</script>

Design principles play a crucial role in guiding the flow of components within software products, ultimately making them easier to maintain over the long term. This process can be visualized as reducing a complex, multidimensional **graph** into a simpler 2D representation, ideally forming a **tree** structure without cycles. Many new design principles often complicate concepts that have been around since the 1970s, that is **Independence** and **Composition**, which are foundational to **modular design**. These allow for easy swapping of components, much like breaking a branch from a tree along with its child branches, making room for a new branch to grow.

## Independence

**Independence** is a key principle that emphasizes treating each component in a software system as a separate entity. Here are the main points:

- **Black Box Concept**: Each component should function as a "black box," where only the input and output matter. This allows developers to focus on interactions without needing to understand internal details.

- **Easy Swapping**: Components can be easily replaced without modifying the entire system, provided they adhere to the same input/output contracts. For instance, switching from one database to another can be done with minimal changes.

- **Single Responsibility**: Each component should have one primary function, making it easier to maintain and reducing the likelihood of bugs. For example, a logging module should only handle logging tasks.


## Composition

**Composition** focuses on how independent components work together to create a cohesive system. Here are the key aspects:

- **Abstraction**: Composition uses abstractions to define how independent modules interact, allowing them to function together smoothly. For example, user management and content creation modules can communicate through defined interfaces.

- **Enhanced Organization**: Composition creates a structured codebase where modules are logically connected, simplifying navigation and understanding. This hides the complexities of lower-level implementations.

- **Flexible Design**: It allows for new functionalities to be added without altering existing components. For instance, introducing a new notification module can be done without changing other parts of the system.

## Can They Fit Common Design Principles?

### DRY (Don't Repeat Yourself)

- The DRY principle advocates for writing code once when the intended behavior is the same. This reduces redundancy and makes global changes easier.
- Composability enhances this by combining lower-level components efficiently.

### KISS (Keep It Simple, Stupid)

- KISS emphasizes simplicity in design. Avoid nesting too much logic within a single abstraction to prevent complexity.
- Independence ensures that components remain simple and focused on their single responsibility while composability helps abstract away unnecessary complexity.

### SOLID Principles

![SOLID Principles](https://dotnettrickscloud.blob.core.windows.net/article/design%20patterns/3720240906160331.webp)

### SOLID Principles

The **SOLID** principles are a set of design guidelines that promote better software design and architecture. They focus on creating systems that are easy to maintain and extend. Here’s how independence and composition relate to each of the SOLID principles:

- **S**: **Single Responsibility Principle (SRP)**  
  Each component should have one reason to change. Independence ensures that each module handles a specific task, making it easier to update without affecting other components. For example, a logging module should only be responsible for logging.

- **O**: **Open/Closed Principle (OCP)**  
  Components should be open for extension but closed for modification. Composition allows you to add new functionalities by creating new modules instead of altering existing ones. For instance, adding a new payment method can be achieved by composing a new payment module.

- **L**: **Liskov Substitution Principle (LSP)**  
  Subtypes must be substitutable for their base types without altering the correctness of the program. While very specific to **objects** and unrelated to independence and composition, this can still be achieved via functions where parameter defines the associated properties. So, instead of object we can substitute parameters. 

- **I**: **Interface Segregation Principle (ISP)**  
  Clients should not be forced to depend on interfaces they do not use. This principle encourages creating smaller, more focused interfaces. Composibility achieves the same goal naturally, by combining independent parts.

- **D**: **Dependency Inversion Principle (DIP)**  
  High-level modules should depend on abstractions, not on low-level modules. Composition serves as a bridge where high-level modules are built from compositions, which further depends on lower-level components.

## Deployment Architecture

### Modular Monolith

A monolith barely has any constraints, allowing the application of both Independence and Composition principles, enabling a modular system where components are swappable at each level.

![Modular Monolith](https://img.freepik.com/free-vector/cloud-data-storage-internet-traffic-routing-server-room-laptop-data-flow-data-uploading-remot_39422-630.jpg)

### Microservices

Similar to a modular monolith, but with interactions occurring through APIs rather than direct function calls. This setup enhances service independence, allowing teams to work and deploy without dependency on others. The hype around it may stem from fancier advertisements presenting a complex approach to achieve simpler goals.

But in my view, unless it’s a local-first product, database management systems (DBMS) should ideally be hosted independently with APIs, even for monoliths.

## Organizational Design

These are the guidelines for organizing the codebase. Let's explore **Clean Architecture.**

![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Notice how different layers are represented in various colors, as you move from the outer levels toward the center, the degree of composition decreases while independence increases. Also, components that belongs to same layers are independent of each other. Other designs like Hexagonal and Onion architecture are also related to these concepts.

## Conclusion

In the end, effective software architecture comes down to balancing independence and composition. By designing composed components that remain independent of each other at every level, we create a system that is both resilient and flexible. Whether it’s a monolithic application or microservices, this modular approach allows for easier updates, swaps, and scaling over time.
