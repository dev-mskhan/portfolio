# Agent notes

## GitHub profile README

The GitHub profile repository is `dev-mskhan/dev-mskhan`. Its README is generated into `profile-readme/README.md` from the portfolio's canonical content in `src/data.ts`.

When changing profile facts, skills, projects, project links, experience, or education in `src/data.ts`, regenerate the profile README with `pnpm profile:readme` and include the updated `profile-readme/README.md` in the same change. If you change portfolio content that should be reflected on the GitHub profile, update the relevant data in `src/data.ts` first rather than editing generated Markdown by hand.

The `Sync profile README` GitHub Actions workflow copies the generated file to `dev-mskhan/dev-mskhan` after pushes to `main`. The portfolio repository must have an Actions secret named `PROFILE_README_TOKEN` with permission to write contents only in that profile repository. Never put the token in source files or commit it.
