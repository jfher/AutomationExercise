# System Analysis

| Field | Value |
| -------- | ------- |
| Project | Automation Exercise Enterprise QA Framework |
| Document | System Analysis |
| Version | 1.0 |
| Status | Approved |
| Author | Luis Fernando Aruquipa Gamarra |
| Role | QA Automation Engineer |
| Last Update | 2026-07-17 |

---

## 1. Purpose

The purpose of this document is to analyze the Automation Exercise platform from a Quality Assurance perspective.

This analysis identifies the functional scope of the application, its primary business processes, the different user roles and the main functional modules. The information documented here will serve as the foundation for the Business Flow Analysis, Risk Analysis, Test Strategy, Test Plan and the automation framework developed throughout this project.

---

## 2. System Overview

Automation Exercise is a public web application designed to simulate a real e-commerce platform for educational purposes.

Although its primary objective is to provide an environment for practicing manual and automated testing, the application implements common e-commerce workflows such as user registration, authentication, product browsing, shopping cart management, checkout and account administration.

From a QA perspective, Automation Exercise provides enough functional complexity to design and implement a complete testing strategy similar to one used in a production environment.

---

## 3. System Objectives

The application aims to provide users with a realistic online shopping experience while exposing multiple functional scenarios suitable for software testing.

For this project, Automation Exercise will be considered an enterprise product where Quality Assurance activities will follow professional industry practices rather than tutorial-based automation.

---

## 4. Scope

This project will analyze and automate the public functionality available on the Automation Exercise website.

The following modules are included within the project scope:

- User Management
- Product Catalog
- Shopping Cart
- Checkout Process
- Contact Module
- Public API

The following items are considered out of scope:

- Internal administration modules
- Database validation
- Performance testing
- Security testing
- Mobile native applications
- Third-party integrations not available in the platform

---

## 5. Actors

The system exposes three primary actors.

### Guest User

Can:

- Browse products
- Search products
- View categories
- Contact support
- Register an account

Cannot:

- Checkout
- Delete an account
- Access authenticated functionality

---

### Registered User

Can:

- Login
- Logout
- Manage cart
- Complete purchases
- Delete account
- Update personal information during checkout

---

### API Consumer

Represents any client consuming the public Automation Exercise API.

This actor will be considered during API testing activities.

---

## 6. Functional Modules

| Module | Description |
| ---------- | ------------- |
| User Management | Registration, Login, Logout and Account Deletion |
| Product Catalog | Product listing, Product Details, Categories, Brands and Search |
| Shopping Cart | Cart management and quantity updates |
| Checkout | Address confirmation, Order review and Purchase flow |
| Contact | Contact form and file upload |
| Public API | REST endpoints exposed by the application |

---

## 7. Main Business Processes

The main business processes identified are:

1. User Registration
2. User Authentication
3. Product Discovery
4. Product Search
5. Shopping Cart Management
6. Checkout
7. Account Deletion
8. Contact Support
9. API Consumption

These business processes will be analyzed individually during the Business Flow Analysis document.

---

## 8. Initial Assumptions

The following assumptions were made during this analysis.

- The platform behavior is considered stable.
- Functional requirements are inferred from the current implementation.
- No official business documentation exists.
- The analysis is based exclusively on publicly available functionality.

---

## 9. QA Decisions

### Decision 01

The application will be analyzed by functional modules rather than individual pages.

- Reason

Business processes frequently span multiple pages. Organizing the project by modules improves scalability and better reflects how enterprise QA teams design test suites.

---

### Decision 02

Business processes will become the primary unit for risk analysis and automation prioritization.

- Reason

The objective of QA is to validate business value rather than isolated UI elements.

---

### Decision 03

Only publicly accessible functionality will be considered during the initial implementation.

- Reason

The objective is to simulate a realistic customer journey.

---

## 10. Deliverables Generated From This Document

This analysis becomes the input for:

- Business Flow Analysis
- Risk Analysis
- Test Strategy
- Test Plan
- Test Design
- Automation Architecture
