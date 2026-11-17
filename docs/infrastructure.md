# 🏗️ Infrastructure

## Current footprint

The repository contains one Next.js application and static UI assets. There is no infrastructure-as-code directory, database instance, object store, message broker, collaboration server, AI gateway, deployment manifest, or configured monitoring stack.

## Current runtime flow

A browser requests the Next.js application. The landing and editor routes render UI. Editor and chat interactions remain in local React state. Some browser/build asset requests may reach external avatar and font providers.

## Not currently provisioned

| Infrastructure component | Status |
|---|---|
| Next.js Node runtime | Required by deployment, host not selected |
| Database | Not present |
| Object storage | Not present |
| WebSocket/message broker | Not present |
| Authentication provider | Not present |
| AI provider gateway | Not present |
| Monitoring/alerting | Not configured in this repository |
| Automated production deployment | Not configured |
| Backup/restore system | Not present |

## Future infrastructure design

A connected product should define network boundaries, service identities, secret management, isolation, regions, capacity, cost, backups, monitoring, and recovery. Document each resource and its owner in an architecture decision record.

## Operational warning

Do not create empty Terraform, Docker, Kubernetes, or cloud deployment files just to fill a checklist. Add infrastructure-as-code only when there is a real target architecture and a tested deployment path.
