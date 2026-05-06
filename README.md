# Rithvik's Homepage

Personal website and portfolio — Next.js front-end, self-hosted on a homelab. Live at **[rntech.org](https://www.rntech.org/)**.

Every push to GitHub kicks off a Jenkins pipeline that builds the Docker image, ships it to a local registry, and rolls the running container via Portainer.

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

Requires Node 16+.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the built app
```

## Deployment

Vercel-compatible out of the box (`vercel.json` is checked in), but the live `rntech.org` instance runs on a self-hosted homelab:

1. Push to GitHub triggers the Jenkins pipeline (`Jenkinsfile`).
2. Jenkins clones the repo and builds the production Docker image (`Dockerfile`).
3. The image is pushed to a local Docker registry.
4. A Portainer API call rolls the running service to the new image.

## Credits

Forked from [Takuya Matsuyama](https://github.com/craftzdog)'s [homepage template](https://github.com/craftzdog/craftzdog-homepage) (MIT).
