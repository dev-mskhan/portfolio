# Repository agent notes

The portfolio application lives in `new/`. For UI and app changes, work in that folder and follow `new/AGENTS.md`.

When changing profile facts, skills, projects, project links, experience, or education in `new/src/data.ts`, run `pnpm --dir new profile:readme` and include the regenerated `new/profile-readme/README.md` in the same change.

The GitHub profile repository is `dev-mskhan/dev-mskhan`. The root-level `Sync profile README` workflow updates its `README.md` after pushes to `main`. It requires the `PROFILE_README_TOKEN` Actions secret, scoped to write repository contents in the profile repository. Never commit the token.
