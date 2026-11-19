---
layout: post
title: "IaCM in practice"
subtitle: "Managing Terraform like an application, not a folder of scripts"
author: "Christopher Black"
cover-img: /assets/img/iacm-cover.jpg
thumbnail-img: /assets/img/iacm-thumb.jpg
share-img: /assets/img/iacm-cover.jpg
tags: [iacm, terraform, infrastructure-as-code, harness, devops]
---

Terraform is easy to start and hard to run well at scale: state, drift, approvals, policy, and who changed what. A field note on Infrastructure as Code Management (IaCM) in practice, from the AWS baselines I built to demo it: workspaces, plan and apply in a pipeline, and IaCM driving the deployments that follow.
