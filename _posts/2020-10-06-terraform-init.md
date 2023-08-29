---
layout: post
title: $ terraform init
subtitle: Part 1/3
cover-img: /assets/img/terraform-init.jpg
author: "Christopher Black"
tags: [programming, inspiration, infrastructure, devops]
---

# $ terraform init

<blockquote>The terraform init command is used to initialize a working directory containing Terraform configuration files. This is the first command that should be run after writing a new Terraform configuration or cloning an existing one from version control. It is safe to run this command multiple times.</blockquote>

This is the first entry (`init`) in a three-part series on one of my favorite tools - Terraform. It's no secret, I'm a huge fan of Terraform and Hashicorp technologies in general. Terraform is one of several core technologies accelerating the great digital transformation for countless organizations. Terraform leverages a powerful methodology known as Infrastructure as Code, IaC.

Infrastructure as Code empowers software developers, operations & infrastructure engineers to manage (complex) cloud infrastructure (or bare metal, there are providers for nearly everything including open stack) at scale using "machine-readable definition files" rather than manual processes or interactive configuration tools. IaC automates what was once a manual, error prone, and at times highly tedious process of provisioning computational infrastructure.

Whoa, that was a lot of text.

## tl;dr

Terraform is a tool which enables developers to manage <i>infrastructure</i> using declarative configuration files, i.e. <i>code</i>.

By using code to define the shape and configuration of our infrastructure, we can further benefit from well established technologies like version control systems and scripting tools.

## Makes sense. How do I learn more?

There have been many excellent primers written on the topic, including some incredible tutorials - Gruntwork, I'm looking at you.

This series is not intended to be an exhaustive tutorial. Parts 2 (`plan`) and 3 (`apply`) will contain an in-depth tutorial with links to sample code. Rather, part 1 (`init`) is a high-level overview with an aggregation of resources. I also recommend everyone serious (or curious) about Terraform get their hands on the book Terraform Up and Running (Version 2) by Yevgeniy Brikman.

I wrote a <a href="https://circleci.com/blog/an-intro-to-infrastructure-as-code/">blog post</a> introducing a few core concepts around infrastructure as code, including a brief summary on declarative versus procedural paradigms in collaboration with my employer, CircleCI. I recommend reading that first :)

Hopefully after reading this post you have an idea of what Terraform & IaC is and most importantly, where you can go to learn more. No doubt you're excited and ready to deploy some infrastructure of your own!

I've compiled a list of resources below which will help you on your journey. The next entry in this series will synthesize two powerful concepts into a sophistacted paradigm many companies and teams of all shapes and sizes are using to deploy and manage infrastructure, CI/CD && IaC.

## Resources

1. <a href="https://blog.gruntwork.io/an-introduction-to-terraform-f17df9c6d180">Gruntwork's outstanding getting started primer</a>

2. <a href="https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code">Hashicorp's Intro to IaC</a>

3. <a href="https://www.oreilly.com/library/view/terraform-up/9781492046899/"><i>The</i> Terraform book</a>

4. <a href="https://github.com/aedifex/terrasphere">Terrasphere - a not so clever name for a fun project that uses CircleCI to deploy Terraform</a>
