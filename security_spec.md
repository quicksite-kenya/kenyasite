# Security Specification: QuickSite Kenya Fortress

## Data Invariants
1. **Client Sites**: A client site cannot exist without a valid `businessName` and must be associated with a valid `plan` and `template`. Access to managing (creating, updating, deleting) these sites is strictly restricted to verified administrators.
2. **Inquiries**: All inquiries must have a valid email and name. Public users can create inquiries but only verified admins can read or manage them.
3. **Blog Posts**: Public can read blog posts, but only verified admins can write or modify them.
4. **Marketplace Items**: Public can read, but only verified admins can write.
5. **System Identity**: Author/Admin roles are strictly verified against a whitelist of verified emails.

## The "Dirty Dozen" Payloads (Deny Cases)
1. **Identity Spoofing**: Attempt to create a `clientSite` as a non-admin.
2. **PII Breach**: Attempt to `list` or `get` another user's inquiry as a non-admin.
3. **Unverified Admin**: Attempt to write as an admin email but with `email_verified == false`.
4. **Schema Poisoning**: Attempt to inject a 1MB string into `businessName`.
5. **Shadow Field Injection**: Attempt to create a `clientSite` with an unauthorized `isAdminOverride: true` field.
6. **State Shortcutting**: Attempt to update an inquiry status to an invalid value or bypass the admin check.
7. **Resource Exhaustion**: Use a 2KB string as a document ID.
8. **Orphaned Record**: Create a blog post with a missing `category`.
9. **Update Gap**: Update `createdAt` field on an existing `clientSite`.
10. **Terminal State Break**: Attempt to modify a "Closed" inquiry (if terminal locking is enabled).
11. **Blanket Read Attack**: Attempt to query `clientSites` without an admin session.
12. **ID Poisoning**: Use special characters (~, /, .) in a document ID to break path logic.

## Security Rule Verification Plan
All above cases must return `PERMISSION_DENIED` in the rule evaluation.
Verification will be performed via rules deployment and manual testing of the dashboard flows.
