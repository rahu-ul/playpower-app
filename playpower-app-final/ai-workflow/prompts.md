# AI-assisted development log

This file records how AI tooling was used on this project. Only sessions that
actually happened are described; fill in the placeholders for the ones marked.

## Session 1 — Initial build (author to complete)

The first implementation was built from the reference video/screenshots.

- Tool(s) used: `<YOUR_AI_TOOL_AND_MODEL>`
- Prompt sequence (paste the real prompts, in order):
  1. `<PROMPT_1>`
  2. `<PROMPT_2>`
  3. `<PROMPT_3>`

## Session 2 — Fidelity, behaviour and accessibility correction (Claude)

Goal given to the assistant: compare the existing project with the reference
screen recording, fix meaningful differences with minimal changes, test, and
package the project. The assistant could not reach the deployed site or the
reference URL from its sandbox, so all comparison used the recording and a
local build.

Steps actually performed:

1. Extracted the project, read `package.json`, the gallery / Photo Tour /
   Lightbox components, the focus-trap hook and their CSS.
2. Sampled frames from the recording (one every 6 s, plus full-resolution
   frames of the listing, Photo Tour and Lightbox). The recording matches a
   ~1280×619 CSS viewport at 1.5× pixel density, so local screenshots were
   taken at 1280×619 for like-for-like comparison.
3. Built and linted the project (`npm run build`, `npm run lint`), then drove
   it with Playwright (Chromium) to capture screenshots and test keyboard
   behaviour (Tab, Shift+Tab, Enter, Escape, ArrowLeft/Right).
4. Fixed the differences listed in `CHANGES.md`, rebuilding and re-testing after
   each group.
5. Added the architecture diagram, this log and the agent/skill configs, then
   re-ran build, lint and the keyboard tests before zipping.

Representative prompt (paraphrased): "Inspect the existing implementation and
the reference recording, list every meaningful difference, correct them in the
existing project without rewriting it, test, and return the corrected ZIP."
