---
layout: post
title: "GitOps with Argo CD: a field guide"
subtitle: "Git as the source of truth for what runs in production"
author: "Christopher Black"
tags: [gitops, argocd, kubernetes, devops]
published: false   # scaffold: hidden until it's written
---

GitOps makes a Git repository the single source of truth for what runs in your clusters, and Argo CD is the tool most teams reach for to make that real. A practical field guide: how the reconcile loop works, how to structure repos, and the mistakes I see most often.
