# Docker Hub CI/CD Setup Guide

This guide explains how to set up GitHub Actions to automatically build and push Docker images to Docker Hub.

## Prerequisites

1. **Docker Hub Account**: Create one at [hub.docker.com](https://hub.docker.com) if you don't have it
2. **Repository Access**: Admin or write access to the GitHub repository

## Step 1: Create Docker Hub Token

1. Log in to [Docker Hub](https://hub.docker.com)
2. Go to **Account Settings** → **Security** → **Access Tokens**
3. Click **New Access Token**
4. Enter a token name (e.g., `github-actions-bookify`)
5. Select **Read, Write, Delete** permissions
6. Click **Generate**
7. Copy the token (you'll need it in Step 2)

## Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

| Secret Name | Value |
|-------------|-------|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Token from Step 1 |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key (from [dashboard.clerk.com](https://dashboard.clerk.com/last-active?path=api-keys)) |
| `NEXT_PUBLIC_ASSISTANT_ID` | Your Vapi assistant ID (from [dashboard.vapi.ai](https://dashboard.vapi.ai)) |

## Step 3: Verify Workflow

1. Commit and push a change to `main` or `develop` branch
2. Go to **Actions** tab in GitHub
3. Check **Build and Push Docker Image** workflow
4. Verify it passes and pushes to Docker Hub

## Workflow Behavior

### On Push to `main` or `develop`
- ✅ Builds image
- ✅ Tags with branch name + latest
- ✅ Pushes to Docker Hub if `DOCKERHUB_TOKEN` is set
- ✅ Caches layers for faster rebuilds

### On Pull Request
- ✅ Builds image (for testing)
- ❌ Does NOT push to Docker Hub
- ❌ Does NOT require secrets
- ✅ Posts comment with build status

### On Version Tag (e.g., `v1.0.0`)
- ✅ Builds image
- ✅ Tags with version number
- ✅ Pushes to Docker Hub

## Image Tags

The workflow automatically creates these tags:

```
docker.io/<username>/bookify:main          # On push to main
docker.io/<username>/bookify:latest        # On push to main
docker.io/<username>/bookify:develop       # On push to develop
docker.io/<username>/bookify:v1.0.0        # On tag v1.0.0
docker.io/<username>/bookify:sha-abc1234   # Git SHA reference
```

## Pull the Built Image

Once pushed to Docker Hub, pull and run it:

```bash
# Replace <username> with your Docker Hub username
docker run -p 3000:3000 \
  --env-file .env.local \
  docker.io/<username>/bookify:latest
```

Or use Docker Compose with the pushed image:

```yaml
# docker-compose.override.yml
services:
  app:
    image: docker.io/<username>/bookify:latest
    # Remove the build section above if using pre-built image
```

## Troubleshooting

### Workflow fails with "Invalid publishableKey"
- Verify `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` secret is set and valid
- Check it matches your Clerk API key (starts with `pk_`)

### "Failed to authenticate" on Docker Hub push
- Verify `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` are correct
- Ensure token has **Read, Write, Delete** permissions
- Token hasn't expired

### Workflow doesn't trigger
- Check branch matches trigger (main or develop)
- Verify `.github/workflows/docker-build.yml` is in the repo
- Ensure GitHub Actions is enabled in Settings → Actions

## Advanced Configuration

### Set Custom Image Name

Edit `.github/workflows/docker-build.yml`:

```yaml
env:
  REGISTRY: docker.io
  IMAGE_NAME: custom-bookify-name  # Change this
```

### Push to Other Registries

To push to **GitHub Container Registry** instead, follow [GitHub's GHCR guide](https://docs.github.com/en/packages/working-with-a-package-registry/working-with-the-container-registry).

### Trigger Manual Build

```bash
# Use GitHub CLI to manually trigger workflow
gh workflow run docker-build.yml --ref main
```

## Security Best Practices

✅ Use GitHub Secrets for all sensitive data  
✅ Rotate Docker Hub tokens regularly  
✅ Use least-privilege access for tokens (never use Account Password)  
✅ Restrict who can modify workflows (Settings → Branch protection)  
✅ Review workflow permissions before merging PRs  

## References

- [Docker Build Push Action](https://github.com/docker/build-push-action)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [Docker Hub API Token](https://docs.docker.com/docker-hub/access-tokens/)
