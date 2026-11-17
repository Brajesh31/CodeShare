# 🧭 Authorization

## Current status

There is no authorization layer because the current application has no authenticated users, protected resources, server routes, project records, or room membership model. The editor route is an interface route, not a private workspace.

## Future authorization model

Before implementing collaboration, define an explicit policy for each action and resource. A possible future matrix might include:

| Resource/action | Anonymous visitor | Authenticated member | Project owner | Administrator |
|---|---:|---:|---:|---:|
| View public landing page | Allow | Allow | Allow | Allow |
| View private project | Deny | Membership-dependent | Allow | Policy-dependent |
| Edit project document | Deny | Role-dependent | Allow | Policy-dependent |
| Invite member | Deny | Deny by default | Allow | Policy-dependent |
| Delete project | Deny | Deny by default | Allow | Policy-dependent |
| Review security events | Deny | Deny | Deny by default | Restricted |

This table is a design prompt, not current behavior or an approved policy.

## Enforcement requirements

- Enforce every decision on the server for every protected operation.
- Derive the actor identity from a verified session, not client-supplied values.
- Resolve resource ownership and membership server-side.
- Deny by default when a role or resource cannot be resolved.
- Recheck permissions for background jobs, exports, WebSocket events, and server actions.
- Prevent cross-project and cross-room identifier substitution.
- Keep administrative privileges separate from ordinary membership.

## Verification

Add positive and negative tests for every permission row. In particular, test a valid user attempting to access another user's resource, a revoked member using a stale connection, and an anonymous request to a protected resource.

## Related material

See [authentication](authentication.md), [access control](access-control.md), and [threat model](threat-model.md).
