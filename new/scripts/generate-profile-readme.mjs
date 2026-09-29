import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "src/data.ts");
const outputPath = resolve(root, "profile-readme/README.md");
const bannerOutputPath = resolve(root, "profile-readme/assets/profile-banner.svg");
const portfolioUrl = (process.env.PORTFOLIO_URL || "https://devshahzaib.vercel.app").replace(/\/+$/, "");

const source = await readFile(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const dataUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`;
const { profile, skillGroups, projects, experiences, education } = await import(dataUrl);

if (!profile || !Array.isArray(skillGroups) || !Array.isArray(projects)) {
  throw new Error("src/data.ts is missing required profile, skillGroups, or projects exports.");
}

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const htmlImage = (url, alt, attributes = "") =>
  `<img${attributes ? ` ${attributes}` : ""} src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" />`;

const inlineCode = (value) => `\`${String(value).replaceAll("`", "'")}\``;
const aiSkills = skillGroups.find((group) => /ai|llm/i.test(group.label))?.items ?? [];
const applicationSkills = skillGroups.find((group) => /framework|librar/i.test(group.label))?.items ?? [];
const dataSkills = skillGroups.find((group) => /database/i.test(group.label))?.items ?? [];
const infrastructureSkills = skillGroups.find((group) => /devops|deployment/i.test(group.label))?.items ?? [];

const renderProject = (project, { featured = false, width = featured ? 46 : 50 } = {}) => {
  const stack = (project.stack ?? []).slice(0, 5).map(inlineCode).join(" ");
  const links = [
    project.liveLink && `[Live project](${project.liveLink})`,
    project.github && `[Source](${project.github})`,
    `[Portfolio notes](${portfolioUrl}/#work)`,
  ].filter(Boolean).join(" · ");

  return `<td width="${width}%" valign="top">

### ${project.title}

${project.outcome || project.description || ""}

${stack}

${links}

</td>`;
};

const featuredProject = projects[0];
const otherProjects = projects.slice(1);
const featuredImagePath = featuredProject?.image?.startsWith("/")
  ? featuredProject.image
  : `/${featuredProject?.image || ""}`;
const featuredArtwork = featuredProject?.image
  ? `<a href="${escapeHtml(featuredProject.liveLink || `${portfolioUrl}/#work`)}">${htmlImage(portfolioUrl + featuredImagePath, `${featuredProject.title} preview`, 'width="100%"')}</a>`
  : "";
const projectGridRows = [];
for (let index = 0; index < otherProjects.length; index += 2) {
  const row = otherProjects.slice(index, index + 2);
  projectGridRows.push(`<tr>\n${row.map((project) => renderProject(project, { width: row.length === 1 ? 100 : 50 })).join("\n")}\n</tr>`);
}
const projectRows = featuredProject
  ? `<table>
<tr>
${featuredArtwork ? `<td width="54%" valign="middle">\n\n${featuredArtwork}\n\n</td>` : ""}
${renderProject(featuredProject, { featured: true })}
</tr>
</table>

${projectGridRows.length > 0 ? `<table>\n${projectGridRows.join("\n")}\n</table>` : ""}`
  : "Projects will appear here when they are added to the portfolio.";

const skillTable = [
  ["BUILD", applicationSkills],
  ["AI + SYSTEMS", aiSkills],
  ["DATA", dataSkills],
  ["SHIP", infrastructureSkills],
].filter(([, items]) => items.length > 0);

const skillCells = skillTable.map(([label, items]) => `<td width="${Math.floor(100 / skillTable.length)}%" valign="top">

**${escapeHtml(label)}**

${items.map(inlineCode).join(" ")}

</td>`).join("\n");

const experienceRows = (experiences ?? []).map((experience) =>
  `**${escapeHtml(experience.role)}**<br />\n${escapeHtml(experience.company)} · ${escapeHtml(experience.period)}`,
).join("\n\n");

const educationBlock = education
  ? `**${escapeHtml(education.degree)}**<br />\n${escapeHtml(education.school)} · ${escapeHtml(education.period)}`
  : "";

const bannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 1200 320" role="img" aria-labelledby="title description">
  <title id="title">${escapeHtml(profile.name)}</title>
  <desc id="description">Ocean-blue flowing wave illustration</desc>
  <defs>
    <linearGradient id="ocean" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#061522" />
      <stop offset="0.54" stop-color="#0B354B" />
      <stop offset="1" stop-color="#075B73" />
    </linearGradient>
    <linearGradient id="waveDeep" x1="0" y1="0" x2="1" y2="0.8">
      <stop offset="0" stop-color="#0B4F6C" />
      <stop offset="0.56" stop-color="#087E9B" />
      <stop offset="1" stop-color="#00B4D8" />
    </linearGradient>
    <linearGradient id="waveLight" x1="0" y1="0" x2="1" y2="0.35">
      <stop offset="0" stop-color="#48CAE4" stop-opacity="0.42" />
      <stop offset="0.5" stop-color="#90E0EF" stop-opacity="0.78" />
      <stop offset="1" stop-color="#ADE8F4" stop-opacity="0.28" />
    </linearGradient>
    <linearGradient id="foam" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ADE8F4" stop-opacity="0" />
      <stop offset="0.52" stop-color="#ADE8F4" stop-opacity="0.8" />
      <stop offset="1" stop-color="#ADE8F4" stop-opacity="0.12" />
    </linearGradient>
    <radialGradient id="glow" cx="0.76" cy="0.25" r="0.62">
      <stop offset="0" stop-color="#48CAE4" stop-opacity="0.26" />
      <stop offset="1" stop-color="#48CAE4" stop-opacity="0" />
    </radialGradient>
    <filter id="softGlow" x="-30%" y="-100%" width="160%" height="300%">
      <feGaussianBlur stdDeviation="8" />
    </filter>
    <clipPath id="bannerClip">
      <rect width="1200" height="320" rx="28" />
    </clipPath>
  </defs>
  <g clip-path="url(#bannerClip)">
    <rect width="1200" height="320" fill="url(#ocean)" />
    <rect width="1200" height="320" fill="url(#glow)" />
    <path d="M-70 235C105 105 250 112 392 185s240 123 395 43 281-157 483-88v214H-70Z" fill="#041A29" fill-opacity="0.58" />
    <path d="M-60 276C106 150 241 154 390 215s239 102 393 22 286-135 487-56v195H-60Z" fill="url(#waveDeep)" fill-opacity="0.9" />
    <path d="M-60 305c169-111 301-105 454-55s225 84 383 7 301-108 493-34v125H-60Z" fill="url(#waveLight)" fill-opacity="0.68" />
    <path d="M-40 322c167-91 294-88 444-43s236 65 391 2 317-91 499-32v96H-40Z" fill="#061A2B" fill-opacity="0.55" />
    <path d="M-25 273c160-115 279-120 430-68s242 90 403 13 269-122 422-72" fill="none" stroke="#ADE8F4" stroke-opacity="0.26" stroke-width="2" />
    <path d="M-35 291c163-102 279-104 431-55s241 74 396 8 292-104 432-53" fill="none" stroke="url(#foam)" stroke-width="3" filter="url(#softGlow)" />
    <path d="M-35 291c163-102 279-104 431-55s241 74 396 8 292-104 432-53" fill="none" stroke="url(#foam)" stroke-width="1.2" />
    <path d="M-40 306c172-75 286-72 433-31s235 53 389 1 278-76 432-34" fill="none" stroke="#ADE8F4" stroke-opacity="0.28" stroke-width="1" />
    <circle cx="1000" cy="80" r="2" fill="#ADE8F4" fill-opacity="0.78" />
    <circle cx="1051" cy="115" r="1.5" fill="#ADE8F4" fill-opacity="0.5" />
    <circle cx="1095" cy="64" r="1.4" fill="#ADE8F4" fill-opacity="0.6" />
    <text x="600" y="128" text-anchor="middle" fill="#E6FAFF" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="58" font-weight="700" letter-spacing="-1.8">${escapeHtml(profile.name)}</text>
  </g>
</svg>
`;
const typingUrl = "https://readme-typing-svg.demolab.com?font=Fira+Code&size=17&pause=1200&color=48CAE4&center=true&vCenter=true&width=760&height=52&lines=Full-stack+products+from+interface+to+infrastructure;LLMs%2C+RAG%2C+and+agentic+AI+in+real+workflows;Thoughtful+systems+from+prototype+to+production";
const badges = [
  ["https://img.shields.io/badge/EXPLORE%20MY%20WORK-0B2538?style=for-the-badge&logo=vercel&logoColor=48CAE4", "Explore my portfolio", portfolioUrl],
  ["https://img.shields.io/badge/GITHUB-12344A?style=for-the-badge&logo=github&logoColor=ADE8F4", "GitHub profile", profile.links.github],
  ["https://img.shields.io/badge/LINKEDIN-164E63?style=for-the-badge&logo=linkedin&logoColor=ADE8F4", "LinkedIn profile", profile.links.linkedin],
  ["https://img.shields.io/badge/LET'S%20TALK-0E7490?style=for-the-badge&logo=gmail&logoColor=E6FAFF", `Email ${profile.name}`, `mailto:${profile.email}`],
];
const badgeLinks = badges.map(([imageUrl, alt, destination]) => {
  return `<a href="${escapeHtml(destination)}">${htmlImage(imageUrl, alt)}</a>`;
}).join("\n");

const readme = `<div align="center">

${htmlImage("./assets/profile-banner.svg", `Ocean-blue banner for ${profile.name}`, 'width="100%"')}

<br />

${htmlImage(typingUrl, "Full-stack engineering and agentic AI")}

<br />

${badgeLinks}

<br />
<br />

\`MERN + PYTHON\` &nbsp; / &nbsp; \`TYPESCRIPT\` &nbsp; / &nbsp; \`AGENTIC AI\`

</div>

---

<table>
<tr>
<td width="20%" align="center" valign="middle">

${htmlImage(`${portfolioUrl}/images/profile-pic.png`, profile.name, 'width="150"')}

</td>
<td width="80%" valign="top">

## ${escapeHtml(profile.role)}

I’m **${escapeHtml(profile.name)}**, based in **${escapeHtml(profile.location)}**. ${escapeHtml(profile.summaryClient)}

${escapeHtml(profile.summaryHirer)}

</td>
</tr>
</table>

## The build path

<div align="center">

\`\`\`mermaid
flowchart LR
    A["A real problem"] --> B["React + TypeScript"]
    B --> C["Node.js + APIs"]
    C --> D[("MongoDB · PostgreSQL · Redis")]
    C --> E["LLMs · RAG · agents"]
    D --> F["Test · containerize · ship"]
    E --> F
    classDef ocean fill:#0B2538,stroke:#00B4D8,color:#E6FAFF,stroke-width:1.5px;
    classDef current fill:#12344A,stroke:#48CAE4,color:#E6FAFF,stroke-width:1.5px;
    class A,B,C,D,F ocean;
    class E current;
\`\`\`

</div>

## Selected work

${projectRows}

<div align="center">

**More context and project notes live on my [portfolio](${escapeHtml(portfolioUrl)}).**

</div>

## Tools in my current toolkit

<table>
<tr>
${skillCells}
</tr>
</table>

## A few more coordinates

<table>
<tr>
<td width="50%" valign="top">

### Experience

${experienceRows || "Experience details coming soon."}

Full-stack freelance development, from requirements through deployment.

</td>
<td width="50%" valign="top">

### Education

${educationBlock || "Education details coming soon."}

</td>
</tr>
</table>

---

<div align="center">

### Have a thoughtful product problem?

I’m open to **remote roles, internships, and contract work**.

[See what I build](${escapeHtml(portfolioUrl)}) &nbsp; · &nbsp; [Connect on LinkedIn](${escapeHtml(profile.links.linkedin)}) &nbsp; · &nbsp; [Email me](mailto:${escapeHtml(profile.email)})

<br />

<sub>Built with curiosity, careful systems, and a little ocean blue.</sub>

</div>
`;

await mkdir(dirname(outputPath), { recursive: true });
await mkdir(dirname(bannerOutputPath), { recursive: true });
await writeFile(outputPath, readme, "utf8");
await writeFile(bannerOutputPath, bannerSvg, "utf8");
console.log(`Generated ${outputPath}`);
console.log(`Generated ${bannerOutputPath}`);
