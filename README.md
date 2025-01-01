# [Cloud Phone](https://www.cloudfone.com/) - Svelte Sample Widget

:beginner: This is a beginner guide on [Cloud Phone](https://www.cloudfone.com/) widget development, created using [`sv`](https://github.com/sveltejs/cli) to bootstrap a [SvelteKit](https://svelte.dev/) project.

[https://cloudmosa.github.io/cloudphone-svelte-sample/](https://cloudmosa.github.io/cloudphone-svelte-sample/)

## Prerequisites

* [Node & npm](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* A [GitHub](https://github.com/signup) account :octocat:

## Deploy to GitHub Pages

[GitHub Pages](https://pages.github.com/) offers free hosting for public open-source repositories. This project uses the official [deploy-pages](https://github.com/actions/deploy-pages) GitHub Action to build and deploy static HTML, CSS, and JS. SvelteKit's [`adapter-static`](https://svelte.dev/docs/kit/adapter-static) creates a [single page application (SPA)](https://svelte.dev/docs/kit/single-page-apps) that's compatible with [GitHub Pages](https://svelte.dev/docs/kit/adapter-static#GitHub-Pages) by setting [`config.kit.paths.base`](https://svelte.dev/docs/kit/configuration#paths) to match your repository name.

:warning <u>Production</u>: although it's possible to configure [custom domain names](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages), "GitHub Pages is not intended for or allowed to be used... either facilitating commercial transactions or providing commercial software" ([see Prohibited Uses](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#prohibited-uses)). Use GitHub Pages for production applications at your own risk.

## Developer Program

Register for the [Cloud Phone Developer Program](https://www.cloudfone.com/developer-program) to upload test widgets and use the Cloud Phone Simulator.

![New Widget Screenshot](./screenshots/Screenshot%202024-12-25%20at%201.42.16 PM.png)
![Cloud Phone Welcome Screenshot](./screenshots/Screenshot%202024-12-25%20at%201.51.54 PM.png)

## License

Licensed under the [Apache 2.0](./LICENSE) license
