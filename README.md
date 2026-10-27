# Aedifex

Source for [christopherblack.net](https://christopherblack.net), the personal site of Christopher Black.

The site is being rebuilt. Older posts live in `_drafts/` until they are reviewed, rewritten or retired.

## Run it locally

Requires Ruby and Bundler. Works on Ruby 3.3 (used by CI) and Ruby 4.x; the Gemfile includes the gems Ruby 3.4+ no longer bundles.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open http://127.0.0.1:4000.

To include the posts in `_drafts/`, add `--drafts`:

```bash
bundle exec jekyll serve --livereload --drafts
```

## Writing posts

- Work in progress goes in `_drafts/` and is never published.
- To publish, move the file to `_posts/` and name it `YYYY-MM-DD-title.md`.
- Images go in `assets/img/`.
- Site settings, the navbar and social links are in `_config.yml`.

Front matter for a post:

```yaml
---
layout: post
title: My post
subtitle: Optional
tags: [terraform, security]
cover-img: /assets/img/example.jpg
---
```

## Credits

Built on [Beautiful Jekyll](https://beautifuljekyll.com) by Dean Attali. Theme code is MIT licensed (see `LICENSE`); site content © Christopher Black.
