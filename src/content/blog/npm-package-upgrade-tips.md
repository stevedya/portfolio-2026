---
title: "Npm package upgrade tips"
excerpt: "Helpful npm commands to upgrade and manage dependencies with less pain."
category: "Software Engineering"
date: "2025-06-20"
readTime: "6 min read"
image: "https://stevensteinwand.com/media/images/chris-ried-ieic5Tq8YMk-unsplash.2e16d0ba.fill-605x363.jpg"
order: 3
---
So you have to upgrade some npm packages eh?

Here are practical commands I've used to upgrade and manage dependencies more safely.

## 1) Check outdated packages

Use `npm outdated` to compare current, wanted, and latest versions.

## 2) Explore dependency tree

Use `npm ls` to inspect dependency relationships.

For a specific package:

- `npm ls webpack`
- `npm ls replace-ext`

## 3) Force reinstall everything cleanly

If dependencies are out of sync:

- `rm -rf node_modules package-lock.json`
- `npm install`

## 4) Trace deprecations

Use:

- `node --trace-deprecation`

This helps identify which package is triggering warnings.

## 5) Audit vulnerabilities

- `npm audit`
- `npm audit fix`

For stubborn issues, manually upgrade the affected package versions.

## 6) Clean npm cache when needed

- `npm cache clean --force`

Useful when local cache issues create confusing install behavior.
