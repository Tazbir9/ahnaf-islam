<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep portfolio skills, milestones, project facts, and navigation in a browser-safe structured data module so content can grow without changing page structure.
- Use a single index portfolio with section anchors and shared design-system controls; this preserves a continuous editorial experience.
- Keep contact submission disabled until a real delivery service and recipient are configured, to prevent false delivery feedback.
- Prepare public contact writes through a validated server function into private, service-only storage; keep the visitor form disabled while email delivery is unconfigured.
- Generate the downloadable résumé from portfolio facts with learning skills separated from practiced skills, so experience is never overstated.
