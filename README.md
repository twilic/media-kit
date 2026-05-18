# Twilic Media Kit

Official logo assets and brand usage guidelines for [Twilic](https://github.com/twilic).

Use these files when you mention Twilic in documentation, presentations, social posts, or integrations. Do not modify the artwork or invent alternate lockups.

## Contents

| Path | Description |
| --- | --- |
| [`logo/badge/normal.svg`](logo/badge/normal.svg) | Square badge — brand blue background, white wordmark |
| [`logo/badge/inverted.svg`](logo/badge/inverted.svg) | Square badge — white background, brand blue wordmark |
| [`logo/wordmark/normal.svg`](logo/wordmark/normal.svg) | Wordmark only — brand blue on transparent |
| [`logo/wordmark/inverted.svg`](logo/wordmark/inverted.svg) | Wordmark only — white on transparent (for dark backgrounds) |
| [`GUIDELINES.md`](GUIDELINES.md) | Full brand rules: color, spacing, grayscale, minimum size, and misuse |
| [`diagrams/`](diagrams/) | Clear-space diagrams (unit **H**, badge **12.5% W**) referenced in the guidelines |

## Quick reference

| Variant | File | Use when |
| --- | --- | --- |
| Badge (normal) | `logo/badge/normal.svg` | Default avatar, app icon, square placements on neutral or light layouts |
| Badge (inverted) | `logo/badge/inverted.svg` | Square placements on saturated or dark layouts where the blue badge lacks contrast |
| Wordmark (normal) | `logo/wordmark/normal.svg` | Headers, README banners, inline mentions on light backgrounds |
| Wordmark (inverted) | `logo/wordmark/inverted.svg` | Headers and inline mentions on dark or photographic backgrounds |

**Brand blue:** `#36A9F8`  
**Wordmark white:** `#FFFFFF`

## Usage

1. Read [`GUIDELINES.md`](GUIDELINES.md) before publishing.
2. Pick the variant that matches your background (see table above).
3. Keep [clear space](GUIDELINES.md#clear-space-exclusion-zone) around the logo.
4. Export to PNG or other raster formats from the SVG source at the size you need; do not upscale beyond 2× the source pixel dimensions.

## License

This repository uses **two** license layers:

| Material | License |
| --- | --- |
| `logo/` (badges and wordmarks) | Permitted use under [`GUIDELINES.md`](GUIDELINES.md); no trademark rights granted — see [`LICENSE`](LICENSE) |
| Markdown and `diagrams/` | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — full text in [`LICENSE-CC-BY-4.0.txt`](LICENSE-CC-BY-4.0.txt) |

Do not treat the logos like MIT-licensed code. Documentation may be shared and adapted with attribution.

## Development

Markdown in this repository is formatted and linted with Prettier and markdownlint (see [`CONTRIBUTING.md`](CONTRIBUTING.md)).

```bash
pnpm install
pnpm format
pnpm lint
```

## Questions

Open an issue in this repository or contact the [Twilic organization](https://github.com/twilic) maintainers if you need a format that is not listed here.
