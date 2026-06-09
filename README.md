# Automation Testing Assessment 

UI Automation site https://www.saucedemo.com/
API Automation site https://reqres.in/
A complete Automation Testing project containing:

-UI Automation Testing using Playwright

-API Automation Testing using Postman & Newman

-Allure Reporting

-HTML Extra Reporting

# Project Overview
The project contains:

-UI Automation Testing

-API Automation Testing

-End-to-End Validation

-Assertion Handling

-CLI Execution

-Reporting

# Technologies Used
-Playwright

-JavaScript

-Postman

-Newman

-Allure  Report

-HTML Extra Reporter

-Node.js

-Github

# Install Dependencies
```bash
npm install
```

## Install Playwright Browsers
```bash
npx playwright install
```

## Install Allure Report
```bash
npm install -D allure-playwright
```

## Install Newman
```bash
npm install -g newman
npm install -g newman-reporter-htmlextra
```

# Run UI Automation Tests
```bash
npx playwright test
```

## Get Allure Report
```bash
npx allure generate allure-results --clean && allure open ./allure-report
```

# Run API Automation Tests
```bash
newman run "API Automation Testing.postman_collection.json"
```

## Generate Newman HTML Report
```bash
newman run "API Automation Testing.postman_collection.json" -r htmlextra
```

## Export Newman HTML Report
```bash
newman run "API Automation Testing.postman_collection.json" -r htmlextra --reporter-htmlextra-export reports/report.html
```
# Features Covered
## UI Automation

-Login Validation

-Error Message Validation

-Checkout Process

-State Reset Validation

## API Automation

-Get API Testing

-POST API Testing

-PUT API testing

-PATCH API Testing

-Status Code Validation

-Response Body Validation

-Authentication Validation

# CLI Command Reference
| Command | Descriction |
|---|---|
| `npx plawright test` | Run Playwright tests |
| `npx playwright show-report` | Open Playwright report |
| `npx allure generate allure-results --clean && allure open ./allure-report` | Get Allure report |
| `newman run collection.json` | Run Postman collection |
| `-r htmlextra` | Generate HTML report |

# Author
## Mostakim Kabir
Github:

https://github.com/Mostakimkabir
