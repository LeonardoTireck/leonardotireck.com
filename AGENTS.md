# AGENTS.md

## Project

This repository contains Leonardo Tireck's personal website and portfolio. It is a statically exported Next.js application deployed to Cloudflare Pages.

## Commands

- `pnpm install` — install dependencies
- `pnpm dev` — start local development
- `pnpm lint` — run ESLint
- `pnpm typecheck` — run TypeScript checks
- `pnpm build` — create the static export in `out/`

## Guidelines

- Keep changes small and focused on the requested work.
- Preserve TypeScript strict mode and the static export configuration.
- Keep personal, professional, and contact information accurate.
- Avoid adding dependencies unless they are necessary.
- Do not commit generated directories such as `node_modules/`, `.next/`, or `out/`.
- Run lint, typecheck, and build after meaningful code or configuration changes.
