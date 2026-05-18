# Contributing

Thank you for improving the Twilic media kit.

## Scope

This repository holds official logo assets and brand guidelines. Changes should keep `logo/`, `diagrams/`, `GUIDELINES.md`, and `README.md` consistent with each other.

## Editorial Rules

- Write all new content in English.
- Prefer ASCII unless an existing file requires another character set.
- Do not alter logo paths, colors, or proportions outside the rules in `GUIDELINES.md`.
- When clear-space rules change, update both `GUIDELINES.md` and the diagrams in `diagrams/`.

## Formatting

If you use the Node tooling in this repository:

- run `pnpm format` before submitting Markdown changes
- run `pnpm lint` before submitting Markdown changes

Install dependencies once with `pnpm install`.

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/).

Use this format:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Common types include `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci`, and `chore`.

Examples:

- `docs: clarify badge clear space on dark backgrounds`
- `feat(logo): add grayscale wordmark variant`

After `pnpm install`, Husky runs Commitlint on each local commit. Pull requests are also checked in CI so every commit in the branch follows the same rules.

## License

By contributing to this repository, you agree that:

- **Markdown and diagrams** you add may be distributed under **CC BY 4.0** (see [`LICENSE-CC-BY-4.0.txt`](LICENSE-CC-BY-4.0.txt)).
- **Logo artwork** you add or change remains subject to the brand terms in [`LICENSE`](LICENSE); do not submit third-party marks or fonts you cannot license for Twilic’s use.

## Contribution Checklist

- Logo files in `logo/` match the descriptions in `GUIDELINES.md`.
- Diagrams in `diagrams/` reflect current spacing rules.
- `README.md` lists any new assets or paths.
- `pnpm format` and `pnpm lint` pass locally.
