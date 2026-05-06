# Rithvik's Homepage

Personal website and portfolio — Next.js front-end, self-hosted on a homelab. Live at **[rntech.org](https://www.rntech.org/)**.

Jenkins polls GitHub every couple of minutes; on a new master commit it builds the Docker image and pushes it to a local registry. Watchtower watches the running container's image digest and redeploys when it sees a new one — usually within ~60s of the push completing.

## Stack

- [Next.js](https://nextjs.org/) 13 — React framework with hybrid static / server rendering
- [Chakra UI](https://chakra-ui.com/) — accessible component library
- [Three.js](https://threejs.org/) — 3D rendering for the homepage voxel dog
- [Framer Motion](https://www.framer.com/motion/) — page and section animations

## Project structure

```
$PROJECT_ROOT
├── pages/                  # Next.js routes
│   ├── index.js              # Home: hero, about, interests, featured projects
│   ├── portfolios.js         # Portfolio index
│   └── portfolios/           # One file per project (BPL, Snowflake Harness, TripPlanner, etc.)
├── components/             # React components (navbar, layouts, sections, voxel-dog)
├── lib/                    # Theme + 3D model helpers
├── public/
│   ├── files/resume.pdf      # Resume served at /files/resume.pdf
│   └── images/works/         # Project thumbnails
├── Dockerfile              # Multi-stage Node build for production
└── Jenkinsfile             # CI: build image → push to local registry → trigger Portainer redeploy
```

## Local development

Requires Node 20+.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the built app
```

## Deployment

Vercel-compatible out of the box (`vercel.json` is checked in), but the live `rntech.org` instance runs on a self-hosted homelab:

1. Jenkins polls master every ~2 minutes via SCM polling (`Jenkinsfile`).
2. On a new commit, Jenkins builds the production Docker image (`Dockerfile`) using BuildKit.
3. The image is tagged with the build ID + `latest` and pushed to a local Docker registry.
4. Watchtower watches the running container, detects the new image digest, and recreates the container — typically within ~60s of the push.

Portainer is used to manage the homelab stacks (Jenkins, Watchtower, the portfolio container itself), but is not part of the redeploy path.

## Credits

Forked from [Takuya Matsuyama](https://github.com/craftzdog)'s [homepage template](https://github.com/craftzdog/craftzdog-homepage) (MIT).
