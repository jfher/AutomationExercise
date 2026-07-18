# Authentication Test Design

## Module

Authentication

---

## Scope

This document defines the automated test coverage for the Authentication module.

---

# Functional Requirements

FR-001

Registered users must be able to login.

---

FR-002

Users with invalid credentials must not login.

---

FR-003

Authenticated users must be able to logout.

---

FR-004

New users must be able to register.

---

FR-005

Existing email addresses cannot be registered again.

---

FR-006

Registered users can delete their account.

---

# Automated Test Coverage

| ID | Scenario | Priority | Smoke | Regression |
| ---- | ---------- | ---------- | -------- | ------------ |
| AUTH-001 | Login with valid credentials | Critical | ✅ | ✅ |
| AUTH-002 | Login with invalid password | High | ❌ | ✅ |
| AUTH-003 | Login with invalid email | High | ❌ | ✅ |
| AUTH-004 | Logout | Medium | ❌ | ✅ |
| AUTH-005 | Register new account | High | ❌ | ✅ |
| AUTH-006 | Register existing email | Medium | ❌ | ✅ |
| AUTH-007 | Delete account | Medium | ❌ | ✅ |

---

# Out of Scope

- Password recovery
- Social login
- MFA
- Session expiration
