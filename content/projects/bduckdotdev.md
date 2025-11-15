---
title: My Personal Site
date: November 15th, 2025
description: Website featuring a markdown blog built with Go, Templ, and HTMX
image: /public/img/portfolio/bduckdotdev.png
---

## Summary

My personal website, focused on being fast, simple, and server-driven by using Go, Templ, and HTMX, without sacrificing modern interactivity.

## Features

- Projects page with the stuff I've built, my thought process, and how I approached the development process.
- Blogs page with everything from tutorials to hot takes.
- Dockerfile for easy containerized building and deployment.
- Partial updates, snappy page transitions.

## Motivation

I built my website this way because I realized that it didn't require a level of interactivity that made me want to introduce an entire enormous frontend framework.

## Architecture Overview

- Go + Chi - backend and routing
- Templ - HTML templating
- HTMX - Enables modern interactivity
- Goldmark - Markdown to HTML rendering for posts

### Technologies Used

(templ should be hear too but it's not in devicons)

<div class="text-7xl lg:text-8xl grid grid-cols-3 mx-auto place-items-center w-full">
<i class="devicon-go-original-wordmark"></i>
<i class="devicon-tailwindcss-plain-wordmark "></i>
<i class="devicon-htmx-plain-wordmark"></i>
</div>

## Key Design Decisions

### Why Golang

Go is a really pleasant language to write. Due to its opinionated nature, there is a lot of time that might normally be spent thinking about how you might want to implement something that instead is put into building. Additionally, it's an actual statically typed general-purpose language (not a type system bolted on top of JavaScript), which means it sidesteps many of the hard-to-trace errors I've dealt with writing TypeScript apps.

### Why Templ

Templ feels like writing Go-flavored HTML. Componentization is natural, the syntax is clean, and the integration with Go makes the entire development experience feel coherent instead of hacked together.

### Why HTMX

HTMX enabled a degree of polish that otherwise would not have been possible with pure HTML and CSS. Via functionality like `hx-boost`, it allows you to build client-side reactivity without introducing any actual JavaScript.

## Challenges

An unfortunate side-effect of stepping out of the massive frontend ecosystems is that you actually have to think about how you want to build your application. I experienced problems that were in hindsight trivial, but genuinely tripped me up for a moment. For example, I spent a solid 30 minutes just trying to get tailwind to compile, only to realize that I was compiling tailwind after running `templ generate`, which meant the templates being generated didn't feature any of the new CSS. This isn't the sort of problem that should be a thing, but is somewhat enabled by an overreliance on frameworks that build everything for you.

## Key Takeaways

### You don't always need JS

JS is great. It really is. It's not even slow anymore. The problem however is that JS itself can feel cumbersome when it's the thing dictating much of your client. Tools like HTMX and Templ show that you don't have to rely on bloated frontend frameworks and massive client-side runtimes to achieve modern reactivity.

### I have no idea why I made the original version of this site in Next.js

Not because Next.js is bad, it's great, but because it was complete overkill for what the intended functionality of this site is, and the current version causes me to feel an unprecedented degree of control over the site itself, while feeling clean, fast, and **fun**.
