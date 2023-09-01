<div align="center" margin="0 auto 20px">
  <h1>svelte-component</h1>
  <p style="font-style: italic;">📑 Template for a ready-to-publish Svelte component.</p>
  <!--
  Add your badge links here. Included here are some sample ones.
  <div>
    <a href='https://github.com/himynameisdave/svelte-copyright/actions?query=workflow%3Atest+branch%3Amain'>
      <img src="https://github.com/himynameisdave/svelte-copyright/workflows/test/badge.svg" alt="GitHub Actions - Test Workflow Badge" />
    </a>
    <a href="https://packagephobia.now.sh/result?p=svelte-copyright">
        <img src="https://packagephobia.now.sh/badge?p=svelte-copyright" alt="Install size" />
    </a>
    <a href="https://bundlephobia.com/result?p=svelte-copyright">
        <img src="https://img.shields.io/bundlephobia/min/svelte-copyright.svg" alt="Bundle size (minified)" />
    </a>
  </div>
  -->
</div>

---

A template for a ready-to-publish [Svelte](https://svelte.dev/) component. Makes use of [Sveltekit's packaging](https://kit.svelte.dev/docs/packaging) feature.

## Get started

You can use GitHub's handy "Use this template" feature, which opens a new repo based on this template. You could do this manually as well:

```bash
# Clone the repo
git clone https://github.com/himynameisdave/svelte-component-template

# Rename it
mv ./svelte-component-template ./svelte-my-component

# Change into that dir
cd ./svelte-my-component

# Remove the git history for this template
rm -rf ./.git/

# Start a new git history
git init

# Add the changes
git add .

# Commit them
git commit -m "✨ Initial commit"
```

## Developing

For building your component/library, you can mostly just follow the guidelines outlined in [Sveltekit's packaging](https://kit.svelte.dev/docs/packaging) documentation.

The best part about this approach is that you get a "playground" to test your component: everything in `lib/routes/` operates like a typical Sveltekit app, and you can pull in your component to test here in the browser.

## Testing

This is set up to use [`vitest`](https://vitest.dev/) for unit testing and [`playwright`](https://playwright.dev/) for integration testing. Playwright tests will run against the `lib/routes/` project.

Linting is handled by [`eslint-config-himynameisdave`](https://github.com/himynameisdave/eslint-config-himynameisdave).

## Publishing

You can publish your component/library to NPM via the `release` command:

```bash
# Should use npm instead of yarn for this
npm run release
```

This will first build your package and test that everything is ready to publish. You will be prompted for info about the release, including your NPM 2FA password.

---

_✌️ Built by [Dave Lunny](http://himynameisdave.com)._
