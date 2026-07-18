# Traceability Matrix

| Project | Automation Exercise Enterprise QA Framework |
| --------- | --------------------------------------------- |
| Version | 1.0 |
| Status | Approved |

---

## Purpose

The purpose of this matrix is to establish traceability between business flows, risks, test cases and automated test suites.

---

| ID | Business Flow | Risk | Priority | Test Suite | Automation |
| ---- | --------------- | ------ | ---------- | ------------ | ------------ |
| BF-01 | User Registration | High | High | Regression | registration.spec.ts |
| BF-02 | User Authentication | Critical | Critical | Smoke / Regression | login.spec.ts |
| BF-03 | Product Discovery | Medium | Medium | Regression | products.spec.ts |
| BF-04 | Product Search | Medium | Medium | Regression | search.spec.ts |
| BF-05 | Shopping Cart | Critical | Critical | Smoke / Regression | cart.spec.ts |
| BF-06 | Checkout | Critical | Critical | Smoke / Regression | checkout.spec.ts |
| BF-07 | Contact Support | Low | Low | Regression | contact.spec.ts |
| BF-08 | Delete Account | Medium | Medium | Regression | account.spec.ts |
| BF-09 | Public API | Medium | Medium | API | users.api.spec.ts |

---

## Coverage Summary

| Priority | Covered |
| ---------- | --------- |
| Critical | ✅ |
| High | ✅ |
| Medium | ✅ |
| Low | ✅ |

---

## QA Decisions

- Every automated test must trace back to a business flow.
- Every critical business flow must belong to the Smoke suite.
- Regression includes all business flows.
- API tests remain independent from UI tests.
