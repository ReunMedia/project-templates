# Coolify Deployment workflow

## How to use

Create a new workflow file in your repository with following content and change
`[version]` to the commit SHA of the workflow version you want to use.

```yml
name: "Coolify Deployment"

on:
    workflow_dispatch:
        inputs:
            environment:
                required: true
                type: choice
                options:
                    - production
                    - staging
                default: staging

env:
    COOLIFY_URL: >-
        ${{ inputs.environment == 'production'
            && vars.COOLIFY_PRODUCTION_URL
            || vars.COOLIFY_STAGING_URL
        }}
    COOLIFY_RESOURCE_ID: >-
        ${{ inputs.environment == 'production'
            && vars.COOLIFY_PRODUCTION_RESOURCE_ID
            || vars.COOLIFY_STAGING_RESOURCE_ID
        }}
    COOLIFY_API_TOKEN: >-
        ${{ inputs.environment == 'production'
            && secrets.COOLIFY_PRODUCTION_API_TOKEN
            || secrets.COOLIFY_STAGING_API_TOKEN
        }}

jobs:
    # https://github.com/orgs/community/discussions/26671#discussioncomment-4295807
    vars:
        runs-on: ubuntu-latest
        outputs:
            coolify_url: ${{ env.COOLIFY_URL }}
            coolify_resource_id: ${{ env.COOLIFY_RESOURCE_ID }}
        steps:
            - run: echo "Exposing env vars"

    coolify-deployment:
        needs: vars
        uses: reun-media/project-templates/.github/workflows/coolify-deployment.yml@[version]
        with:
            coolify_url: ${{ needs.vars.outputs.coolify_url }}
            coolify_resource_id: ${{ needs.vars.outputs.coolify_resource_id }}
        secrets:
            coolify_api_token: ${{ secrets.COOLIFY_API_TOKEN }}
```
