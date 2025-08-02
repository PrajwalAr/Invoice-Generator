# CRUSH.md

Build/lint/test
- Dev: npm run dev (Next dev on :3000)
- Build: npm run build (Next build)
- Start: npm run start (Next start on :3000)
- Lint: npm run lint (ESLint: next/core-web-vitals, next/typescript)
- Typecheck: npx tsc -p tsconfig.json --noEmit
- Tests: none configured; to add, install vitest/react-testing-library or jest. Single test example (Vitest): npx vitest run path/to/file.test.ts

Project
- Framework: Next.js 15 (App Router), React 18, TypeScript strict, TailwindCSS
- Aliases: @/* -> src/* (tsconfig paths) [ensure tsconfig.json has baseUrl "." and paths mapping]
- PDFs/images: html2canvas + jsPDF in src/lib/pdf.ts; currency utils in src/lib/currency.ts

Code style
- Imports: use absolute '@/...' for src; group std/lib/third-party/local; keep side-effect imports last
- Formatting: Prettier not configured; follow ESLint rules, 2-space indent, single quotes or project default, semicolons typical TypeScript
- Types: strict true; prefer explicit types for public exports; use zod for runtime validation where applicable
- Naming: PascalCase for components, camelCase for functions/vars, SCREAMING_SNAKE_CASE for constants; file names match default export
- Components: Functional components with React.FC disabled; colocate UI in src/components; avoid default exports where possible
- State/props: define prop types/interfaces in same file; avoid any; prefer union/enum literals
- Errors: throw Error with message; avoid console.log in production paths; surface user errors via UI
- Async: use async/await; handle rejections; no floating promises
- Styling: Tailwind with tailwind-merge for class merging; avoid inline styles unless necessary
- Accessibility: follow next/core-web-vitals; img: Next/Image preferred; rule @next/next/no-img-element is off

Conventions
- PDF/image generation should run client-side only
- Do not commit secrets; .env* is gitignored
- Keep .next, /out, /build out of VCS

Cursor/Copilot rules
- No Cursor or Copilot instruction files found
