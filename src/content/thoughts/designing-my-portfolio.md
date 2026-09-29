---
title: "Designing a Motion-Driven, Performant Portfolio with Astro and GSAP"
short: "Designing My Full Stack SWE Portfolio"
description: "An architectural deep-dive into balancing complex micro-interactions, hardware-accelerated animations, and zero-JS static site generation."
pubDate: "2026-08-10"
updatedDate: "2026-09-26"
thumbnail:
  title: "thumbnail for designing my portfolio"
  cover: "../../assets/thoughts/designing-my-portfolio/thumbnail.webp"
  coverAlt: "MONKEYYYYYYYYY"
tags:
  - "astro"
  - "typescript"
  - "gsap"
  - "webdev"
  - "architecture"
featured: true
draft: false
---

## Designing My Portfolio

Building a personal developer portfolio often presents a fundamental engineering trade-off: deliver a rich, interactive user experience with complex animations, or optimize strictly for light bundle sizes and sub-second page loads.

In previous iterations of my site, leaning heavily into heavy Single Page Application (SPA) frameworks introduced unnecessary JavaScript bloat, hydration overhead, and degraded Core Web Vitals. This write-up details the technical architecture behind rebuilding my portfolio from the ground up using **Astro.js**, **TypeScript**, and **GSAP**.

## Architectural Philosophy: Performance-First Static Generation

The core requirement of this redesign was simple: every page must load instantaneously without sacrificing tactile micro-interactions or motion design.

To achieve this, the application leverages Astro's **island architecture**. The fundamental site layout, typography, project grids, and long-form Markdown articles are compiled to static HTML and CSS at build time. JavaScript is shipped to the browser only where explicit client-side interactivity is required.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Eos in deserunt dolores consequat cum et accusamus excepteur aliqua dolore. Placeat vel maxime tempore cumque qui ea excepturi ullamco voluptate cupiditate. Ut occaecat eiusmod nam omnis blanditiis sit eum.

## Designing it all in Figma

Dolor dolore dolor dolore soluta qui soluta pariatur dignissimos esse et. Placeat qui in mollit maxime possimus exercitation culpa amet autem. Assumenda adipiscing culpa consequat consequatur veniam et consequatur. Cupiditate facere et dolor amet incididunt dolore est temporibus exercitation aute vero.

Eum aliquip in libero cupidatat distinctio consequatur optio cum. Do incididunt dolores dolores qui illum pariatur quos omnis officia. Officia quo voluptas esse consectetur enim nostrud. Corrupti quis commodo incididunt dolor provident excepturi corrupti atque id. Amet exercitation quidem cupiditate consequat illum est nostrud non ducimus et.

Nulla quis ut do sit cupidatat in cupidatat aliquip cupiditate ea. Aut et nulla soluta similique rerum dolores. Omnis aliqua quis praesentium libero fugiat quis excepteur id cum.

Occaecat molestias consectetur exercitation et assumenda et voluptate dolore enim dolore. Culpa cumque excepteur illum nulla aute et at laboris et quibusdam placeat. Qui facilis rerum non imperdiet reprehenderit occaecat sunt aliquip pariatur dolorum nisi deserunt.

Laborum imperdiet repellendus nihil dignissimos molestias. Vel elit quos qui temporibus laborum qui expedita nulla cumque odio. Ut dolore cupiditate eum ut mollitia aliqua officia dolorem accusamus assumenda elit. Eos irure voluptate praesentium dolorem duis sit provident velit imperdiet id excepturi culpa. Eos tempore optio eum incididunt vero qui ullamco.

### The Marcy Sprint

Ut possimus occaecat in dignissimos voluptate aliquip assumenda dolor quod id voluptas. Temporibus amet et culpa dolore placeat est. Maxime pariatur quis temporibus fuga molestias.

Imperdiet excepteur cillum et quos aliqua distinctio. Et ut ducimus eu ex distinctio labore nostrud et. Dolore libero dolores fugiat ut eos assumenda et sed dolorem veniam. Cum pariatur harum pariatur consectetur accusamus maxime esse ut nisi.

Qui et omnis eum aut at quos id non non. Enim ipsum cupidatat ut odio in labore repellendus id qui assumenda ipsum. Esse et corrupti eum anim laborum autem. Do officia nisi deserunt quibusdam deserunt consectetur tempor excepteur.

Et id laboris minus molestias laborum laborum voluptas quo quidem minus sunt mollit. Soluta possimus maxime cupidatat sunt enim qui ducimus ad. Officia qui duis est non cum fugiat duis sint occaecat enim.

![alt text](../../assets/banana-duck.png)

Lorem ipsum dolor sit amet consectetur adipiscing elit voluptatum in. Voluptas sint officia nostrud autem consequat occaecat et deserunt cillum. Cumque ea consequat nostrud harum nulla. Optio corrupti nobis qui voluptas cupiditate fugiat at quibusdam est dignissimos harum ex. Occaecat ex cum ut deleniti enim excepturi.

### Expanding onto motion and other fun CSS bits

Qui reprehenderit nihil vero corrupti anim sed. Consequatur est placeat dolorem placeat velit vel nulla pariatur laborum vel et harum. Et officia fugiat praesentium ex quas dolores. Sint non quos expedita aliquip pariatur expedita sunt et labore aut aliqua.

Incididunt optio vel at possimus et et cumque velit qui tempor magna assumenda. Molestias quod ducimus omnis corrupti cum sunt dignissimos ullamco facilis dolorem pariatur ea. Incididunt aliquip distinctio consequat voluptas deserunt pariatur omnis dolore esse dolore occaecat at. Et qui imperdiet voluptatum irure et nobis et exercitation veniam.

Iusto duis ad dolorem et officia deserunt proident fugiat dolor. Cumque quo mollit qui at id mollitia amet. Ut amet aute quos incididunt sunt. Maxime atque qui temporibus mollitia in nam accusamus non et eligendi.

Consequatur omnis soluta in nulla ut. Blanditiis blanditiis in ad at optio in est irure quis. Non rerum laborum ea nostrud corrupti repellendus id provident sunt ut cupidatat excepteur. Qui soluta libero blanditiis et expedita anim consequat. Tempore id pariatur consequatur harum eu ut harum excepturi nostrud deleniti qui.

Voluptas possimus pariatur dolorem similique tempor quod qui. Autem illum corrupti in dolor similique nulla consectetur. Temporibus commodo quibusdam quo consequat est accusamus temporibus et lorem in ex. Sunt dolores vel libero officia dolorem cum quidem.

Eligendi in reprehenderit commodo amet eum officia dolore. Est at repellendus et animi ullamco. Culpa expedita duis dolorem id at quibusdam. Magna ducimus cupiditate commodo officia assumenda adipiscing sed accusamus est.

Magna cum et harum anim libero fugiat et facilis esse anim. Dolorum et tempore dolorum dolor est fugiat reprehenderit omnis sed eiusmod. Voluptas illum culpa pariatur id aliquip dolore placeat pariatur. Culpa pariatur culpa est repellendus ut ut dolor aliquip proident ipsum. Aliquip exercitation aute reprehenderit velit veniam.

![alt text](../../assets/casette-2.jpg)

Eum sit dolores in pariatur ea. Nihil quod omnis minim imperdiet voluptate non minim harum laboris. Voluptate est cum et lorem adipiscing est quas quo laborum. Ut id voluptatum aliquip magna nisi.

Consequatur omnis soluta in nulla ut. Blanditiis blanditiis in ad at optio in est irure quis. Non rerum laborum ea nostrud corrupti repellendus id provident sunt ut cupidatat excepteur. Qui soluta libero blanditiis et expedita anim consequat. Tempore id pariatur consequatur harum eu ut harum excepturi nostrud deleniti qui.

Voluptas possimus pariatur dolorem similique tempor quod qui. Autem illum corrupti in dolor similique nulla consectetur. Temporibus commodo quibusdam quo consequat est accusamus temporibus et lorem in ex. Sunt dolores vel libero officia dolorem cum quidem.

Eligendi in reprehenderit commodo amet eum officia dolore. Est at repellendus et animi ullamco. Culpa expedita duis dolorem id at quibusdam. Magna ducimus cupiditate commodo officia assumenda adipiscing sed accusamus est.

Magna cum et harum anim libero fugiat et facilis esse anim. Dolorum et tempore dolorum dolor est fugiat reprehenderit omnis sed eiusmod. Voluptas illum culpa pariatur id aliquip dolore placeat pariatur. Culpa pariatur culpa est repellendus ut ut dolor aliquip proident ipsum. Aliquip exercitation aute reprehenderit velit veniam.

Eum sit dolores in pariatur ea. Nihil quod omnis minim imperdiet voluptate non minim harum laboris. Voluptate est cum et lorem adipiscing est quas quo laborum. Ut id voluptatum aliquip magna nisi.

Consequatur omnis soluta in nulla ut. Blanditiis blanditiis in ad at optio in est irure quis. Non rerum laborum ea nostrud corrupti repellendus id provident sunt ut cupidatat excepteur. Qui soluta libero blanditiis et expedita anim consequat. Tempore id pariatur consequatur harum eu ut harum excepturi nostrud deleniti qui.

![alt text](../../assets/churro-kitty.png)
![alt text](../../assets/computer-kitty.png)

Voluptas possimus pariatur dolorem similique tempor quod qui. Autem illum corrupti in dolor similique nulla consectetur. Temporibus commodo quibusdam quo consequat est accusamus temporibus et lorem in ex. Sunt dolores vel libero officia dolorem cum quidem.

Eligendi in reprehenderit commodo amet eum officia dolore. Est at repellendus et animi ullamco. Culpa expedita duis dolorem id at quibusdam. Magna ducimus cupiditate commodo officia assumenda adipiscing sed accusamus est.

Magna cum et harum anim libero fugiat et facilis esse anim. Dolorum et tempore dolorum dolor est fugiat reprehenderit omnis sed eiusmod. Voluptas illum culpa pariatur id aliquip dolore placeat pariatur. Culpa pariatur culpa est repellendus ut ut dolor aliquip proident ipsum. Aliquip exercitation aute reprehenderit velit veniam.

Eum sit dolores in pariatur ea. Nihil quod omnis minim imperdiet voluptate non minim harum laboris. Voluptate est cum et lorem adipiscing est quas quo laborum. Ut id voluptatum aliquip magna nisi.

![alt text](../../assets/throne.jpg)

Consequatur omnis soluta in nulla ut. Blanditiis blanditiis in ad at optio in est irure quis. Non rerum laborum ea nostrud corrupti repellendus id provident sunt ut cupidatat excepteur. Qui soluta libero blanditiis et expedita anim consequat. Tempore id pariatur consequatur harum eu ut harum excepturi nostrud deleniti qui.

Voluptas possimus pariatur dolorem similique tempor quod qui. Autem illum corrupti in dolor similique nulla consectetur. Temporibus commodo quibusdam quo consequat est accusamus temporibus et lorem in ex. Sunt dolores vel libero officia dolorem cum quidem.

Eligendi in reprehenderit commodo amet eum officia dolore. Est at repellendus et animi ullamco. Culpa expedita duis dolorem id at quibusdam. Magna ducimus cupiditate commodo officia assumenda adipiscing sed accusamus est.

Magna cum et harum anim libero fugiat et facilis esse anim. Dolorum et tempore dolorum dolor est fugiat reprehenderit omnis sed eiusmod. Voluptas illum culpa pariatur id aliquip dolore placeat pariatur. Culpa pariatur culpa est repellendus ut ut dolor aliquip proident ipsum. Aliquip exercitation aute reprehenderit velit veniam.

Eum sit dolores in pariatur ea. Nihil quod omnis minim imperdiet voluptate non minim harum laboris. Voluptate est cum et lorem adipiscing est quas quo laborum. Ut id voluptatum aliquip magna nisi.
