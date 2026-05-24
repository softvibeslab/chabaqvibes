# Monaco Project: my-project

This is an example Dynatrace Configuration as Code project managed by Monaco CLI.

## Structure

```text
projects/my-project/
├── README.md
├── settings/
│   └── README.md
├── dashboards/
│   └── README.md
├── alerting/
│   └── README.md
└── slo/
    └── README.md
```

## How Monaco Uses This Project

The root `manifest.yaml` registers this project:

```yaml
projects:
  - name: my-project
    path: projects/my-project
```

Monaco deploys configuration files from this directory to the environments defined in `environmentGroups`.

## Suggested Folders

- `settings/`: Settings 2.0 resources.
- `dashboards/`: Dashboard configuration.
- `alerting/`: Alerting profiles, notification integrations, or related alert resources.
- `slo/`: Service-level objective resources.

## Local Setup

1. Copy `.env.example` to `.env`.
2. Fill in your Dynatrace tenant URL and credentials.
3. Export variables into your shell:

```sh
set -a
. ./.env
set +a
```

4. Validate with a dry run:

```sh
monaco deploy --dry-run manifest.yaml
```

No real credentials should be committed to git.

