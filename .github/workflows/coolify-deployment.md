# Coolify Deployment workflow

GitHub action for automated Coolify deployment

## Pre-requisites

- Private GitHub repository for the project
- Working Coolify deployment

## Quick checklist

- [ ] [Copy action to your repository](#copy-action-to-your-repository)
- [ ] [Create API token in Coolify](#create-api-token-in-coolify)
- [ ] [Add API token to repository secrets](#add-api-token-to-repository-secrets)
- [ ] [Configure action variables](#configure-action-variables)

## Copy action to your repository

Copy [`coolify-deployment.yml`](./coolify-deployment.yml) to your repository's
`.github/workflows` directory

## Create API token in Coolify

Api token is used to access and modify Coolify resource's settings during
deployment.

1. Navigate to **Keys & Tokens -> API tokens**
2. Create a new token with `[my-project]-COOLIFY_STAGING_API_TOKEN` description
   and enable all permissions (uncheck both **Read-only** and **View Sensitive
   Data**)
3. In your project's GitHub repository navigate to **Settings -> Secrets and
   variables -> Actions** and click **New repository secret**
4. Copy the API key from Coolify to **Secret** and name it
   `COOLIFY_STAGING_API_TOKEN` (e.g.)

> [!TIP]
>
> The action supports separate deployment to both `STAGING` and `PRODUCTION`, so
> you can create both API tokens in the respective environments.

## Add API token to repository secrets

In your project's GitHub repository navigate to **Settings -> Secrets and
variables -> Actions** and add following **secrets** with tokens you created in
[the previous step](#create-api-token-in-coolify):

| Name                         | Description                 | Example value |
| ---------------------------- | --------------------------- | ------------- |
| COOLIFY_STAGING_API_TOKEN    | API token to access Coolify | uqpDqZK6...   |
| COOLIFY_PRODUCTION_API_TOKEN | API token to access Coolify | F9AKcoji...   |

## Configure action variables

Add following **variables** in **Actions secrets and variables**:

| Name                           | Description                           | Example value               |
| ------------------------------ | ------------------------------------- | --------------------------- |
| COOLIFY_STAGING_URL            | URL of staging Coolify instance       | coolify.staging.example.com |
| COOLIFY_STAGING_RESOURCE_ID    | Resource ID of the project in Coolify | Qv2BXOMteC3h3v5LODIKoD9x    |
| COOLIFY_PRODUCTION_URL         | URL of production Coolify instance    | coolify.example.com         |
| COOLIFY_PRODUCTION_RESOURCE_ID | Resource ID of the project in Coolify | 2tuA1wlYexP3s3sLCDmy6MAC    |
