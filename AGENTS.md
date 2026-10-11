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
- Contact form delivers via EmailJS from the browser (public IDs only) and only reports success after EmailJS confirms, to avoid false delivery feedback.
- Also archive contact messages through a validated server function into private, service-only storage, as a best-effort backup.
- Generate the downloadable résumé from portfolio facts with learning skills separated from practiced skills, so experience is never overstated.
