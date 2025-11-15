---
title: Friendless
date: July 23rd, 2024
description: Full-stack AI chat companion app built with Next.js, tRPC, PostgreSQL, Prisma, and Bun.
image: /public/img/portfolio/friendless.jpg
---

## Summary

Friendless is a slightly silly, slightly dystopian full-stack AI companion app designed to replace human communication, or at least parody the idea.

Built with Next.js, tRPC, PostgreSQL, Prisma, and Bun.

**Demo it [here](https://friendless.bduck.dev/)**

## Features

- Create AI "friends" with unique personalities, backgrounds, and interests.
- Send your AI friends messages and receive streamed responses from them.
- Clean iMessage inspired chat UI for a disturbingly human experience.
- Authentication via NextAuth.js (Demo to use Discord and GitHub)

## Motivation

The main motivation behind this project was to get hands-on experience with a TypeScript monorepo using tRPC and to explore how tightly coupled front–back communication changes development workflow. As far as the subject matter of the app (AI "friends"), it's a simple parody of dystopian AI startups that are outsourcing enjoyable parts of the human experience.

## Architecture Overview

- Next.js for routing and SSR
- tRPC for end-to-end typed APIs
- PostgreSQL + Prisma for the data layer
- Bun for dev/build speed
- Streaming chat responses via OpenAI API

### Technologies Used

<div class="text-7xl lg:text-8xl grid grid-cols-3 mx-auto place-items-center w-full">
<i class="devicon-nextjs-original-wordmark "></i>
<i class="devicon-prisma-original-wordmark "></i>
<i class="devicon-trpc-plain-wordmark "></i>
<i class="devicon-tailwindcss-plain-wordmark "></i>
<i class="devicon-postgresql-plain-wordmark "></i>
<i class="devicon-typescript-plain "></i>
</div>

## Key Design Decisions

### Why tRPC?

tRPC enables end-to-end type safety by enforcing consistent types between your database and your application using Zod. It required a bit of initial boilerplate, but the result was far fewer difficult-to-trace errors than I have had in previous Next.js projects that relied on different API paradigms.

### Why Next.js

My reasoning for NextJS was largely that I wanted access to the vast amount of UI libraries and components built for React. I actually think that Next.js was the least crucial part of this experience. It could have just as easily been replaced with SvelteKit and had similar functionality.

## Challenges

- Handling streamed responses cleanly in the UI without breaking React state.
- Structuring the tRPC routers in a way that didn’t feel messy as the app grew.
- Adapting my mental model of a backend to fit the tRPC paradigm.

## Key Takeaways

### tRPC is really great

Using tRPC as a backend in a TS monorepo feels really, really good. It makes it very intuitive to understand the flow of the data in your application. Instead of feeling like you're building a separate frontend and an API in the same repo, it creates a unified experience where you're defining a router to do the exact thing you're calling in your frontend and calling it like any other function.

### React is overkill for most applications

This project illustrated clearly to me that in the vast majority of non-enterprise (and even many enterprise) cases, React is complete overkill. I don't necessarily regret it, but the app could have just as easily been built in a lighter-weight framework like SvelteKit, while still getting the same benefits for tRPC. React is a double-edged sword where you get access to the ecosystem at the cost of having to write React.
