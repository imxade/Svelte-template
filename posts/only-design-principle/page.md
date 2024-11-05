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

One of the most popular principles that encapsulates similar idea is the **Unix Philosophy**: *"Do One Thing and Do It Well."* 

## Independence

- **Black Box Concept**: Each component should function as a black box for other components, meaning that only the input and output matter.
- **Easy Swapping**: Components can be easily swapped by managing their inputs and outputs.
- **Single Responsibility**: Each component at every level should have a single responsibility.

## Composition

- **Abstraction**: This connects independent modules, allowing lower-level components to interact without direct dependencies.
  
Composition is essential for connecting these independent modules at the same level, facilitating better organization and functionality.

## Can This Fit Common Design Principles?

### DRY (Don't Repeat Yourself)

- The DRY principle advocates for writing code once when the intended behavior is the same. This reduces redundancy and makes global changes easier.
- Composability enhances this by combining lower-level components efficiently.

### KISS (Keep It Simple, Stupid)

- KISS emphasizes simplicity in design. Avoid nesting too much logic within a single abstraction to prevent complexity.
- Independence ensures that components remain simple and focused on their single responsibility while composability helps abstract away unnecessary complexity.

### SOLID Principles

![SOLID Principles](https://dotnettrickscloud.blob.core.windows.net/article/design%20patterns/3720240906160331.webp)

- **S**: Independence guarantees that each component has a single responsibility, simplifying management and updates.
- **O**: Composition enables extending functionality through new components without modifying existing ones.
- **L**: The Liskov Substitution Principle is supported by independence, allowing components to be replaced seamlessly.
- **I**: While composition contributes to this principle, its necessity is debatable.
- **D**: Dependency Inversion encourages reliance on abstractions rather than concrete implementations.

## Architecture

### Modular Monolith

A monolith barely has any constraints, allowing the application of both Independence and Composition principles, enabling a modular system where components are swappable at each level.

![Modular Monolith](https://img.freepik.com/free-vector/cloud-data-storage-internet-traffic-routing-server-room-laptop-data-flow-data-uploading-remot_39422-630.jpg)

### Microservices

Similar to a modular monolith, but with interactions occurring through APIs rather than direct function calls. This setup enhances service independence, allowing teams to work and deploy without dependency on others. The hype around it may stem from fancier advertisements presenting a complex approach to achieve simpler goals.

But in my view, unless it’s a local-first product, database management systems (DBMS) should ideally be hosted independently with APIs, even for monoliths.

## Organizational Design

These are the guidelines for organizing the codebase. Let's explore **Clean Architecture.**

![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Notice how different layers are represented in various colors; as you move from the outer levels toward the center, the degree of composition decreases while independence increases. Other designs like Hexagonal and Onion architecture build upon these concepts but may not align entirely with independence or composition.

## Conclusion

In the end, effective software architecture comes down to balancing independence and composition. By designing composed components that remain independent of each other at every level, we create a system that is both resilient and flexible. Whether it’s a monolithic application or microservices, this modular approach allows for easier updates, swaps, and scaling over time.
