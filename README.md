# leonardotireck.com

Personal website and software development portfolio for [Leonardo Tireck](https://leonardotireck.com).

## Development

Requirements: Node.js 24 and pnpm 11.

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Deployment

The project is a statically exported Next.js site. `pnpm build` creates the deployable site in `out/` for Cloudflare Pages.

## Stack

Next.js, React, TypeScript, ESLint, pnpm, and Cloudflare Pages.

## License

This repository is unlicensed and all rights are reserved.
