---
layout: post
title: "Continuous delivery for AWS Lambda"
subtitle: "Provision with IaCM, deploy with a pipeline"
author: "Christopher Black"
cover-img: /assets/img/lambda-cover.jpg
share-img: /assets/img/lambda-cover.jpg
thumbnail-img: /assets/img/lambda-thumb.jpg
tags: [aws, lambda, serverless, continuous-delivery, harness, iacm]
---

Serverless still needs a delivery pipeline. A walkthrough of the [harness-lambda-cd-pipeline](https://github.com/aedifex/harness-lambda-cd-pipeline) project: Terraform and IaCM provision the function, and a Harness service definition deploys it, the same way you'd ship any other service.
