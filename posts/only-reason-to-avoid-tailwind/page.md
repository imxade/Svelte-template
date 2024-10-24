---
title: Big O: Only Reasons to Avoid TailWind
description: Some of the rare valid reasons to avoid tailwind css
date: '2024-09-29'
tags:
  - CSS
  - Web
  - Tailwind
  - UI
image: https://images.unsplash.com/photo-1639322537231-2f206e06af84
draft: true
---

<script>
  import Mermaid from '$lib/components/markdown/mermaid.svelte';
</script>

Tailwind allows you to create a consistent design system by using predefined utility classes 1. This ensures that all elements with the same class have the same styles, preventing "magic numbers" and inconsistencies that can occur with inline styles.

avoiding tailwind css is obvious if multiple selectors doesn't have same property but that's very very unlikely in real world scenarios.

so incase one needs complete control without redundancy, they'll likely need to separate out common properties into separate selectors and as use case/scenario/demands/project changes the no. of properties will keep reducing until it reaches a single property. So, we ultimately ended up with our own Tailwind kind of implementation.

if tailwind didn't existed one might have ultimately created something similar, assuming they continuously working with css day and night in production.


some might argue on separation of concern/noisy ness/unmanagable code, but tailwind doesn't really hurt that it's same as adding multiuple classes

Also, some would say it lacks lastest css features but those features will likely be unsupported by mostly browsers

## finally, reasons to avoid tailwind

- no direct DOM access so no dynamic styling because of being static generator, unlike pure css (the most valid reason)
- avoid dependency
- inline css feels better than abstract classes from tailwind
- redundancy in selector properties is acceptable