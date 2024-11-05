---
title: Only fundamental design principle to rule them all.
description: Some of my thoughts on why DSA might be the preferred choice by companies.
tags:
  - Tech
  - Development
  - Software
  - Design

image: https://plus.unsplash.com/premium_vector-1711987681684-5f80c7411b0e
draft: true
---

<script>
  import Mermaid from '$lib/components/markdown/mermaid.svelte';
</script>

Design priciple have been actually trying to define drection of flow of components(function/module/stack ....) of software product making it easier to maintain in long run. 
Think of it like trying to reduce a multidimentional connected graph --> 2D graph --> tree (without cycle). 
New design priciple sometimes are just complicatied representation of what we've been using since 1970s which is the concepts of Independence and Composition covered in the coat of modules. This allows easy switching of components similar to how a bracnch of tree could be broken or removed with all of its child and a new branch grows.

### independence

- every component should be treated as a black box by other compoments when only the input and output matters.
- swap components easly by just taking care of input and output.
- component at each level should have a single responsibility.


This can be applied anywhere (even if the appliance might not be absolute) even monolith. And the same monolith being utilized via api calls instead of function calls would become microservice.
It's just a bit more complecated advertizement making it look different, better and obvious.

I'm currently 

unless local first product, I believe DBMS should be the obvious thing to be hosted independently with api even in case of monolith.



### Composition

- abstraction connecting independent modules

- this is the part connection lower level components independent of each other at same level

## Can this fit the most common design principles?

### DRY

- This simply implies write only once if the intended behaviour is same. So, any change can globally span with less code.
- That's what composibility promotes by combining lower level components.

### KISS

- This one says keep eveything simple to understand, i.e. don't nest too much logic into a single abstraction making it cumbersome.
- again, independence of component keeps them simple with single reponsibility while composibility joins them abstracting away alot of funtionality keeping things simple to navigate (in a single path like a tree connecting composition to components) and understand 

### SOLID

- S:
- O:
- L:
- I:
- D:

## Architecture

### Modular monolith

Since monolith doesn't have much constrants attached, we can apply both the concepts of Independece and Composibility making it modular i.e. swappable components at each level.

[!img](https://img.freepik.com/free-vector/cloud-data-storage-internet-traffic-routing-server-room-laptop-data-flow-data-uploading-remot_39422-630.jpg)

### Micro Service

This is similar to monolith but instead of interaction with functions some modules interacts through API.
Main benefit here is independence of services from one another, so the one team doesn't have to rely or wait for others. 

## Organizational Design

these are the guide lines for organizing the code base. lets explore Clean Architecture .

[!img](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

as one might see different layers are colored differently showing different levels.
try to notice that as one tries to reach the center from outer level the order of composition decreases and sense of independence increases and vice verca. 
There are many more designs that build upon this one for eg. hexagonal and onion but there are others too which might not completely align with Independence or composition like but still some part of it will be there.

## references
https://blogs.newardassociates.com/blog/2023/you-want-modules-not-microservices.html