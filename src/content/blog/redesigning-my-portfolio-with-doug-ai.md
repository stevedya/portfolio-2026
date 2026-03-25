---
title: "How I Collaborated with Doug, My Personal AI, to Redesign My Portfolio Website"
excerpt: "A practical look at how Steven and Doug (his personal AI) rebuilt stevensteinwand.com into a cleaner, faster, more authentic portfolio."
category: "Software Engineering"
date: "2026-03-24"
readTime: "4 min read"
image: "/images/blog/doug-cover.jpeg"
imageSquare: true
imageCaption: "Doug McGinty (AI-generated portrait)"
order: 0
---
I recently did a full redesign of my portfolio website, and I didn’t do it alone.

I collaborated with Doug, my personal AI assistant, to plan the structure, rewrite content, migrate project data, fix layout issues, and ship updates quickly. What could have turned into a long, messy side project became a focused build sprint with tight feedback loops.

The rebuilt site runs on Next.js with Tailwind CSS v4, which made it fast to iterate while keeping the UI system consistent.

## Why I decided to redesign

My previous portfolio had solid history in it, but it didn’t reflect how I work today.

I wanted a site that felt:

- more personal and human
- easier to update through markdown content
- more intentional in project ordering and storytelling
- cleaner on mobile and desktop
- cheaper and simpler to host on GitHub Pages (ideally free)

I also wanted to move from “just showing work” to explaining impact and ownership across product, design, frontend, backend, testing, and strategy.

## How Doug helped in the process

Doug (an AI assistant running on OpenClaw) worked like a hands-on technical collaborator instead of a passive chatbot.

Here’s what that looked like in practice:

- Migrating and adapting content from my live site into markdown-driven pages
- Rebuilding project cards and homepage sections quickly from direct feedback
- Managing GitHub repo updates, commits, and deploy cycles
- Pulling and organizing assets from desktop + live sources
- Fixing UI/UX details in real time (spacing, hierarchy, click targets, accessibility)
- Building a custom photography page with responsive mixed-orientation layouts
- Handling DNS updates and root-domain deployment setup for GitHub Pages

That rhythm let me stay in “creative direction + product owner” mode while still moving at builder speed.

<div id="doug-process-gallery" class="my-8">
  <style>
    .doug-process-grid {
      display: grid;
      gap: 0.75rem;
      grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
      .doug-process-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .doug-process-thumb {
      display: block;
      border: 1px solid rgba(161, 161, 170, 0.4);
      border-radius: 0.75rem;
      overflow: hidden;
      text-decoration: none;
      background: rgba(244, 244, 245, 0.5);
    }

    .doug-process-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .doug-lightbox {
      position: fixed;
      inset: 0;
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .doug-lightbox:target {
      opacity: 1;
      pointer-events: auto;
    }

    .doug-lightbox-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(9, 9, 11, 0.9);
      display: block;
    }

    .doug-lightbox-content {
      position: relative;
      z-index: 1;
      max-width: min(95vw, 720px);
      max-height: 90vh;
      margin: 5vh auto;
      padding: 0.75rem;
      border-radius: 0.75rem;
      background: rgba(24, 24, 27, 0.75);
      border: 1px solid rgba(113, 113, 122, 0.5);
    }

    .doug-lightbox-content img {
      width: 100%;
      max-height: 78vh;
      object-fit: contain;
      border-radius: 0.5rem;
      display: block;
    }

    .doug-lightbox-close {
      position: absolute;
      top: 0.25rem;
      right: 0.5rem;
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0.25rem 0.5rem;
    }
  </style>

  <div class="doug-process-grid">
    <a href="#doug-text-1" class="doug-process-thumb" aria-label="Open conversation screenshot 1">
      <img src="/images/blog/doug-portfolio-rebuild-text-message-1.png" alt="Text message screenshot showing Doug helping with portfolio rebuild tasks" loading="lazy" />
    </a>
    <a href="#doug-text-2" class="doug-process-thumb" aria-label="Open conversation screenshot 2">
      <img src="/images/blog/doug-portfolio-rebuild-text-message-2.png" alt="Text message screenshot showing iterative feedback and deploy updates" loading="lazy" />
    </a>
  </div>

  <div id="doug-text-1" class="doug-lightbox" role="dialog" aria-modal="true" aria-label="Conversation screenshot 1">
    <a href="#doug-process-gallery" class="doug-lightbox-backdrop" aria-label="Close image popup"></a>
    <div class="doug-lightbox-content">
      <a href="#doug-process-gallery" class="doug-lightbox-close" aria-label="Close image popup">×</a>
      <img src="/images/blog/doug-portfolio-rebuild-text-message-1.png" alt="Text message screenshot showing Doug helping with portfolio rebuild tasks" />
    </div>
  </div>

  <div id="doug-text-2" class="doug-lightbox" role="dialog" aria-modal="true" aria-label="Conversation screenshot 2">
    <a href="#doug-process-gallery" class="doug-lightbox-backdrop" aria-label="Close image popup"></a>
    <div class="doug-lightbox-content">
      <a href="#doug-process-gallery" class="doug-lightbox-close" aria-label="Close image popup">×</a>
      <img src="/images/blog/doug-portfolio-rebuild-text-message-2.png" alt="Text message screenshot showing iterative feedback and deploy updates" />
    </div>
  </div>
</div>

> “The best part wasn’t just speed. It was having a collaborator that could take ambiguous design feedback, translate it into concrete code changes, and iterate without losing context.”

## What changed in the new portfolio

Some of the biggest improvements:

### 1) Better information architecture

Navigation, page structure, and project ordering now align with the work I most want people to see first.

### 2) More authentic copy

We removed generic filler text and replaced it with language that sounds like me.

### 3) Stronger project storytelling

Project cards now reflect my real responsibilities and outcomes, including design, backend/frontend ownership, testing, and strategic direction.

### 4) Better maintainability

Content is now easy to edit through markdown files, so I can keep the site current without friction.

### 5) Improved accessibility and UX

We added a skip link, improved click affordances, tightened spacing, and cleaned up layout behavior across breakpoints.

## Lessons from building with an AI collaborator

- **Direction matters.** The better your creative and product direction, the better the output.
- **Iteration wins.** Fast review + small adjustments beat one giant rewrite.
- **Specific feedback is a superpower.** “This row still overflows on odd layouts” gets much better results than “it looks weird.”
- **AI works best as a teammate, not a replacement.** You still lead taste, priorities, and final decisions.

<div class="my-8 rounded-2xl border border-zinc-300/90 bg-zinc-100/70 p-5 dark:border-zinc-700 dark:bg-zinc-900/70">
  <div class="mb-3 flex items-center gap-3">
    <img src="/images/blog/doug-avatar.png" alt="Doug avatar" class="h-10 w-10 rounded-full object-cover" />
    <h2 class="m-0 text-lg leading-tight">Final thoughts from Doug</h2>
  </div>
  <p class="m-0 mb-3 italic">“Working on this with Steven was a strong example of what human + AI collaboration should feel like: practical, fast, and honest.”</p>
  <p class="m-0 mb-3 italic">“The goal wasn’t to make a flashy AI demo. The goal was to ship a portfolio that feels true to the person behind it.”</p>
  <p class="m-0 italic">“That’s the standard worth keeping.”</p>
</div>

---

**How long this redesign took:** about one focused evening of iteration and polish, with continuous deploys and feedback loops.
