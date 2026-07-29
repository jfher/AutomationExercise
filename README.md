<div align="center">

# 🚀 Playwright Enterprise Framework

Enterprise-grade QA Automation Framework built with **Playwright**, **TypeScript** and **Clean Architecture**.

Designed to demonstrate production-ready UI, API, Integration and Accessibility testing practices.

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)

</div>

---

# Table of Contents

- [🚀 Playwright Enterprise Framework](#-playwright-enterprise-framework)
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Key Features](#key-features)
  - [UI Automation](#ui-automation)
  - [API Testing](#api-testing)
  - [Integration Testing](#integration-testing)
  - [Accessibility](#accessibility)
  - [Quality](#quality)
  - [DevOps](#devops)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Design Principles](#design-principles)
  - [Single Responsibility Principle](#single-responsibility-principle)
  - [Reusability](#reusability)
  - [Scalability](#scalability)
  - [Maintainability](#maintainability)
  - [Readability](#readability)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Install Playwright Browsers](#install-playwright-browsers)
- [Environment Variables](#environment-variables)
  - [Environment Variables](#environment-variables-1)
- [Running the Project](#running-the-project)
  - [Execute the Entire Test Suite](#execute-the-entire-test-suite)
  - [Smoke Tests](#smoke-tests)
  - [Regression Tests](#regression-tests)
  - [API Tests](#api-tests)
  - [Integration Tests](#integration-tests)
  - [Accessibility Tests](#accessibility-tests)
  - [Interactive Playwright UI](#interactive-playwright-ui)
  - [Headed Execution](#headed-execution)
- [Test Tags](#test-tags)
- [Cross Browser Execution](#cross-browser-execution)
- [Docker Support](#docker-support)
  - [Build](#build)
  - [Smoke](#smoke)
  - [Regression](#regression)
  - [API](#api)
  - [Docker Architecture](#docker-architecture)
- [Continuous Integration](#continuous-integration)
- [Reports](#reports)
  - [HTML Report](#html-report)
  - [Trace Viewer](#trace-viewer)
  - [Screenshots](#screenshots)
  - [Videos](#videos)
  - [JUnit Report](#junit-report)
  - [Blob Report](#blob-report)
- [Accessibility Testing](#accessibility-testing)
- [Test Evidence](#test-evidence)
- [Output Structure](#output-structure)
- [Testing Strategy](#testing-strategy)
  - [Test Pyramid](#test-pyramid)
  - [Test Types](#test-types)
    - [Smoke Tests](#smoke-tests-1)
    - [Regression Tests](#regression-tests-1)
    - [API Tests](#api-tests-1)
    - [Integration Tests](#integration-tests-1)
    - [Accessibility Tests](#accessibility-tests-1)
- [Functional Coverage](#functional-coverage)
- [Coding Standards](#coding-standards)
  - [Naming Conventions](#naming-conventions)
    - [Test Files](#test-files)
    - [Page Objects](#page-objects)
    - [Business Flows](#business-flows)
    - [Components](#components)
    - [API](#api-1)
- [Git Workflow](#git-workflow)
  - [Commit Convention](#commit-convention)
- [Project Metrics](#project-metrics)
- [Recommended Screenshots](#recommended-screenshots)
  - [HTML Report](#html-report-1)
  - [GitHub Actions](#github-actions)
  - [Docker Execution](#docker-execution)
  - [Project Structure](#project-structure-1)
  - [Accessibility Report](#accessibility-report)
  - [Visual Comparison Testing](#visual-comparison-testing)
- [Roadmap](#roadmap)
  - [Completed](#completed)
  - [Future Improvements](#future-improvements)
- [Contributing](#contributing)
  - [Development Workflow](#development-workflow)
- [License](#license)
- [Acknowledgements](#acknowledgements)
    - [⭐ If you found this project useful, consider giving it a star.](#-if-you-found-this-project-useful-consider-giving-it-a-star)

---

# Overview

This repository contains a complete QA Automation Framework built with **Playwright** and **TypeScript** following software engineering best practices commonly used in enterprise environments.

The objective of this project is not only to automate browser interactions but also to demonstrate how a professional automation framework should be structured, documented and maintained.

The framework includes multiple testing layers:

- UI Testing
- API Testing
- UI + API Integration Testing
- Accessibility Testing
- Cross-browser execution
- Continuous Integration
- Docker execution
- Professional reporting

The project follows a modular architecture that promotes maintainability, scalability and code reuse.

---

# Key Features

## UI Automation

- Page Object Model (POM)
- Business Flows
- Reusable Components
- Custom Fixtures
- Centralized Test Data

---

## API Testing

- REST API automation
- Strongly typed models
- Reusable API client
- Endpoint abstraction
- Dynamic test data

---

## Integration Testing

- API data setup
- UI verification
- API cleanup
- End-to-end business scenarios

---

## Accessibility

- Axe integration
- WCAG validation
- Automated accessibility scans

---

## Quality

- ESLint
- Prettier
- Husky
- lint-staged
- EditorConfig

---

## DevOps

- Docker
- GitHub Actions
- HTML Reports
- JUnit Reports
- Blob Reports
- Trace Viewer

---

# Architecture

The framework separates responsibilities into independent layers.

```
Tests
   │
   ▼
Flows
   │
   ▼
Pages
   │
   ▼
Components
```

API follows the same concept.

```
Tests
   │
   ▼
API Endpoints
   │
   ▼
API Client
```

Each layer has a single responsibility.

| Layer | Responsibility |
|--------|---------------|
| Tests | Business scenarios |
| Flows | Business processes |
| Pages | UI interactions |
| Components | Reusable UI elements |
| API | REST communication |
| Fixtures | Dependency injection |
| Data | Test data |
| Utils | Generic utilities |

This separation minimizes duplicated code while improving readability and maintainability.

---

# Project Structure

```text
playwright-enterprise-framework
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── docker/
│
├── docs/
│
├── playwright/
│   └── auth/
│
├── resources/
│   ├── files/
│   └── images/
│
├── src/
│   │
│   ├── api/
│   │   ├── client/
│   │   ├── endpoints/
│   │   └── models/
│   │
│   ├── components/
│   │
│   ├── config/
│   │
│   ├── core/
│   │
│   ├── data/
│   │
│   ├── fixtures/
│   │
│   ├── flows/
│   │
│   ├── pages/
│   │
│   └── utils/
│
├── tests/
│   │
│   ├── api/
│   ├── auth/
│   ├── products/
│   ├── cart/
│   ├── checkout/
│   ├── contact/
│   ├── integration/
│   └── accessibility/
│
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

# Technology Stack

| Category | Technology |
|-----------|------------|
| Language | TypeScript |
| Automation | Playwright |
| Runtime | Node.js |
| Assertions | Playwright Test |
| API Testing | Playwright APIRequestContext |
| Accessibility | @axe-core/playwright |
| Containerization | Docker |
| CI/CD | GitHub Actions |
| Formatting | Prettier |
| Linting | ESLint |
| Git Hooks | Husky |
| Staged Validation | lint-staged |

---

# Design Principles

The framework was designed around a few simple principles.

## Single Responsibility Principle

Each class performs one specific task.

Examples:

- Pages only interact with the UI.
- Flows execute business processes.
- Tests verify business behavior.
- API classes communicate with REST services.

---

## Reusability

Business logic is never duplicated.

The same flows, components and API clients can be reused across multiple scenarios.

---

## Scalability

Adding a new module requires minimal effort without changing the existing architecture.

---

## Maintainability

Business logic, locators, test data and configuration are isolated into dedicated modules.

This reduces maintenance costs when the application changes.

---

## Readability

Tests are intentionally concise.

Instead of this:

```ts
await page.locator(...).click();
await page.locator(...).fill(...);
await page.locator(...).click();
```

Tests express business intent:

```ts
await loginFlow.login(user);
```

This improves readability for both QA Engineers and developers.

---

# Installation

## Prerequisites

Before running the project, ensure the following software is installed on your machine.

| Software | Recommended Version |
|-----------|---------------------|
| Node.js | 22.x LTS |
| npm | 10.x or later |
| Git | Latest |
| Docker Desktop *(optional)* | Latest |

Verify your installation:

```bash
node -v
npm -v
git --version
docker --version
```

---

## Clone the Repository

```bash
git clone https://github.com/<your-username>/playwright-enterprise-framework.git

cd playwright-enterprise-framework
```

---

## Install Dependencies

```bash
npm ci
```

> **Why `npm ci` instead of `npm install`?**

`npm ci` provides deterministic installations using the `package-lock.json`, making local and CI environments consistent.

---

## Install Playwright Browsers

```bash
npx playwright install --with-deps
```

This command downloads Chromium, Firefox and WebKit along with all required system dependencies.

---

# Environment Variables

Create a local environment file.

```bash
cp .env.example .env
```

Example:

```text
BASE_URL=https://automationexercise.com

API_BASE_URL=https://automationexercise.com/api

HEADLESS=false

DEFAULT_TIMEOUT=30000

EXPECT_TIMEOUT=10000
```

## Environment Variables

| Variable | Description |
|-----------|-------------|
| BASE_URL | Application URL |
| API_BASE_URL | REST API URL |
| HEADLESS | Browser execution mode |
| DEFAULT_TIMEOUT | Default Playwright timeout |
| EXPECT_TIMEOUT | Assertion timeout |

---

# Running the Project

## Execute the Entire Test Suite

```bash
npm test
```

---

## Smoke Tests

```bash
npm run test:smoke
```

Runs the most critical business scenarios.

Typical execution time:

- 2–5 minutes

---

## Regression Tests

```bash
npm run test:regression
```

Runs the complete functional regression suite.

---

## API Tests

```bash
npm run test:api
```

Runs all REST API scenarios.

---

## Integration Tests

```bash
npm run test:integration
```

Runs scenarios combining API setup with UI validation.

---

## Accessibility Tests

```bash
npm run test:accessibility
```

Runs Axe accessibility validations.

---

## Interactive Playwright UI

```bash
npm run test:ui
```

Useful while developing new tests.

---

## Headed Execution

```bash
npm run test:headed
```

Runs browsers with the graphical interface enabled.

---

# Test Tags

The framework uses Playwright tags to organize execution.

| Tag | Description |
|------|-------------|
| @smoke | Critical functionality |
| @regression | Complete regression suite |
| @api | REST API tests |
| @integration | UI + API scenarios |
| @accessibility | Accessibility validation |
| @negative | Negative test scenarios |

Example:

```bash
npx playwright test --grep @smoke
```

---

# Cross Browser Execution

The framework supports:

- Chromium
- Firefox
- WebKit

Execution is configured directly in `playwright.config.ts`.

Cross-browser execution can be enabled by simply running:

```bash
npm test
```

or selecting a specific project:

```bash
npx playwright test --project=chromium

npx playwright test --project=firefox

npx playwright test --project=webkit
```

---

# Docker Support

The project can be executed without installing Node.js or Playwright locally.

## Build

```bash
npm run docker:test
```

---

## Smoke

```bash
npm run docker:smoke
```

---

## Regression

```bash
npm run docker:regression
```

---

## API

```bash
npm run docker:api
```

---

## Docker Architecture

```
Docker

│

▼

Playwright Image

│

▼

Node.js

│

▼

Framework

│

▼

Reports
```

Docker uses the official Playwright container image, ensuring identical execution across local development and CI environments.

---

# Continuous Integration

The project includes a GitHub Actions workflow.

Every Pull Request automatically executes the Smoke Suite.

```
Developer

↓

Push

↓

GitHub Actions

↓

Install Dependencies

↓

Execute Smoke Tests

↓

Upload Reports
```

Manual executions are also supported.

Available suites:

- Smoke
- Regression
- API
- Integration
- Full

---

# Reports

The framework generates multiple report formats.

| Report | Purpose |
|----------|---------|
| HTML | Local execution |
| List | Console output |
| JUnit | CI/CD integration |
| Blob | Parallel report merging |

---

## HTML Report

Generate after execution:

```bash
npm run report
```

---

## Trace Viewer

Whenever a test fails, Playwright stores a trace.

Open it with:

```bash
npx playwright show-trace path/to/trace.zip
```

---

## Screenshots

Automatically generated only on failure.

---

## Videos

Automatically generated only on failure.

---

## JUnit Report

Generated at:

```text
test-results/junit.xml
```

---

## Blob Report

Generated at:

```text
blob-report/
```

Useful when merging reports from parallel executions.

---

# Accessibility Testing

Accessibility validation is performed using:

**@axe-core/playwright**

The framework automatically checks common WCAG violations such as:

- Missing labels
- Invalid ARIA attributes
- Color contrast
- Heading hierarchy
- Semantic HTML
- Image alternative text
- Keyboard navigation issues

Run accessibility tests:

```bash
npm run test:accessibility
```

Accessibility tests are independent from functional tests and can be executed separately.

---

# Test Evidence

Whenever a failure occurs, the framework automatically captures:

- Screenshot
- Video
- Trace
- HTML Report

This makes debugging significantly easier without requiring additional configuration.

---

# Output Structure

After execution, generated artifacts will look like:

```text
playwright-report/

blob-report/

test-results/
├── junit.xml
├── traces/
├── videos/
└── screenshots/
```

All evidence is ignored by Git and uploaded automatically as GitHub Actions artifacts when executed in CI.

---

# Testing Strategy

The framework follows a layered testing strategy inspired by industry best practices and ISTQB principles.

## Test Pyramid

```text
                Manual Exploratory Testing
                        ▲
                        │
              UI End-to-End Tests
                        ▲
                        │
             Integration Tests
                        ▲
                        │
                 API Tests
```

The goal is to maximize confidence while keeping execution time reasonable.

---

## Test Types

### Smoke Tests

Smoke tests validate the application's most critical functionality.

Examples:

- User Login
- Product Search
- Add Product to Cart
- Checkout
- Contact Form

Executed:

- Pull Requests
- Push to `main`
- Before deployments

---

### Regression Tests

Regression tests validate the complete functionality of the application after changes.

Executed:

- Before releases
- Manual CI execution
- Local validation

---

### API Tests

API tests validate REST endpoints independently from the UI.

Typical validations include:

- Status codes
- Response schema
- Business rules
- Error handling
- Data consistency

---

### Integration Tests

Integration tests combine multiple layers.

Example workflow:

```
Create Product (API)

↓

Open UI

↓

Validate Product

↓

Delete Product (API)
```

This approach keeps UI scenarios deterministic while reducing execution time.

---

### Accessibility Tests

Accessibility tests verify compliance with common WCAG rules using Axe.

These tests run independently from functional validation.

---

# Functional Coverage

| Module | Status |
|---------|:------:|
| Authentication | ✅ |
| Products | ✅ |
| Cart | ✅ |
| Checkout | ✅ |
| Contact | ✅ |
| API | ✅ |
| Integration | ✅ |
| Accessibility | ✅ |

---

# Coding Standards

The project follows a consistent coding style across all modules.

## Naming Conventions

### Test Files

```text
login.spec.ts

checkout.spec.ts

products.spec.ts
```

---

### Page Objects

```text
LoginPage.ts

ProductsPage.ts

CartPage.ts
```

---

### Business Flows

```text
LoginFlow.ts

CheckoutFlow.ts

ContactFlow.ts
```

---

### Components

```text
HeaderComponent.ts

FooterComponent.ts

NavigationComponent.ts
```

---

### API

```text
UserEndpoint.ts

ProductEndpoint.ts

CartEndpoint.ts
```

---

# Git Workflow

Development follows a simplified Git workflow.

```
main

▲

│

feature/authentication

feature/products

feature/cart

feature/checkout
```

Every feature should be developed in an isolated branch and merged through a Pull Request.

---

## Commit Convention

Examples:

```text
feat(auth): add login flow

feat(products): implement search tests

fix(cart): resolve flaky checkout test

refactor(api): simplify endpoint abstraction

docs(readme): improve installation guide

ci(actions): add Playwright workflow

test(accessibility): integrate Axe
```

---

# Project Metrics

Current project scope:

| Area | Coverage |
|------|----------|
| UI Testing | ✅ |
| API Testing | ✅ |
| Integration Testing | ✅ |
| Accessibility Testing | ✅ |
| Docker Support | ✅ |
| GitHub Actions | ✅ |
| Cross Browser | ✅ |
| Reporting | ✅ |

---

# Recommended Screenshots

The following screenshots are recommended for the repository.

## HTML Report

```text
docs/images/html-report.png
```

---

## GitHub Actions

```text
docs/images/github-actions.png
```

---

## Docker Execution

```text
docs/images/docker.png
```

---

## Project Structure

```text
docs/images/project-structure.png
```

---

## Accessibility Report

```text
docs/images/accessibility.png
```

---

## Visual Comparison Testing

This framework uses Playwright native visual comparisons.

Features:

- Full page screenshots
- Element screenshots
- Cross-browser baselines
- Automatic diff generation
- Native Playwright snapshots

Run:

```bash
npm run test:visual
```

Update snapshots:

```bash
npm run test:visual:update
```

# Roadmap

## Completed

- ✅ Authentication Module
- ✅ Products Module
- ✅ Cart Module
- ✅ Checkout Module
- ✅ Contact Module
- ✅ API Automation
- ✅ Integration Testing
- ✅ Accessibility Testing
- ✅ Docker Support
- ✅ GitHub Actions
- ✅ Professional Reporting
- ✅ Documentation

---

## Future Improvements

Although the framework is considered feature complete, future enhancements may include:

- Performance testing using k6
- Mobile device emulation
- Visual regression testing
- Database validation
- Contract testing
- Cloud execution
- Test analytics dashboard

These improvements are intentionally outside the scope of this repository.

---

# Contributing

Contributions are welcome.

## Development Workflow

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Commit your changes.

```bash
git commit -m "feat(module): add new functionality"
```

4. Push your branch.

```bash
git push origin feature/my-feature
```

5. Open a Pull Request.

Before submitting your Pull Request, ensure:

- All tests pass.
- ESLint passes.
- Prettier formatting is applied.
- Husky hooks complete successfully.

---

# License

This project is distributed under the MIT License.

See the `LICENSE` file for additional information.

---

# Acknowledgements

This project was created to demonstrate enterprise-level QA Automation practices using Playwright and TypeScript.

It brings together concepts commonly used in professional software development teams, including:

- Clean Architecture
- Page Object Model
- API Automation
- CI/CD
- Docker
- Accessibility Testing
- Cross-browser Testing
- Modern developer tooling

The project serves both as a learning resource and as a portfolio project for QA Automation Engineers.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star.

Happy Testing! 🚀

</div>
