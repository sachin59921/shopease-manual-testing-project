# ShopEase – Test Plan

## 1. Document Information

| Field | Details |
|---|---|
| Project Name | ShopEase – Demo E-commerce Application |
| Document | Test Plan |
| Testing Type | Manual Testing |
| Application Type | Web Application |
| Version | 1.0 |
| Prepared By | Sachin Kumar Pal |
| Status | Draft / Final |
| Testing Approach | Manual Functional & UI Testing |

---

## 2. Objective

The objective of this test plan is to define the testing approach, scope, resources, test environment, and testing activities required to validate the ShopEase demo e-commerce application.

The main goal is to ensure that the application's core functionality works according to the expected business requirements and provides a consistent user experience.

---

## 3. Application Overview

ShopEase is a demo e-commerce web application that allows users to:

- Access the home page
- Navigate between application sections
- Login using credentials
- View available products
- Search for products
- Add products to the shopping cart
- Update product quantities
- View cart total
- Checkout products
- Use the application on different screen sizes

---

## 4. Scope of Testing

### 4.1 In Scope

The following areas will be tested:

- Home page
- Navigation
- Login functionality
- Login validation
- Product listing
- Product search
- Add to Cart
- Cart quantity
- Cart total calculation
- Checkout functionality
- Empty cart validation
- Responsive UI
- Basic usability

### 4.2 Out of Scope

The following areas are not included:

- Payment gateway testing
- Real payment transactions
- Backend/API testing
- Database testing
- Performance testing
- Load testing
- Security penetration testing
- Email notifications
- Third-party integrations

---

## 5. Testing Types

The following testing techniques will be used:

1. Functional Testing
2. UI Testing
3. Positive Testing
4. Negative Testing
5. Boundary Value Analysis
6. Equivalence Partitioning
7. Exploratory Testing
8. Regression Testing
9. Smoke Testing
10. Responsive Testing

---

## 6. Test Environment

### Operating Systems

- Windows 10
- Windows 11

### Browsers

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

### Devices

- Desktop
- Laptop
- Mobile responsive viewport

### Suggested Mobile Viewports

- 375 × 667
- 390 × 844
- 412 × 915

---

## 7. Test Data

### Valid Login

Email:

`qa@example.com`

Password:

`Test@123`

### Invalid Login

Email:

`invalid@example.com`

Password:

`Wrong@123`

### Additional Test Data

| Data | Value |
|---|---|
| Valid Product | Wireless Mouse |
| Partial Search | Mouse |
| Invalid Search | xyz123 |
| Quantity | 1 |
| Boundary Quantity | 0 |
| Invalid Quantity | Negative value |

---

## 8. Entry Criteria

Testing can begin when:

- Application is available.
- Application loads successfully.
- Required test data is available.
- Test environment is ready.
- Test cases are prepared.
- Major blocking issues are not present.

---

## 9. Exit Criteria

Testing can be completed when:

- All planned test cases are executed.
- Critical and high-priority test cases are completed.
- All critical defects are resolved or accepted.
- Failed test cases have associated defect reports.
- Regression testing is completed.
- Test summary report is prepared.

---

## 10. Defect Management

Defects will be documented with:

- Bug ID
- Module
- Summary
- Description
- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Environment
- Status
- Evidence

---

## 11. Severity Levels

| Severity | Description |
|---|---|
| Blocker | Prevents further testing or major application usage |
| Critical | Major functionality is completely broken |
| High | Important functionality is significantly affected |
| Medium | Functionality is affected but workaround exists |
| Low | Minor UI or usability issue |

---

## 12. Priority Levels

| Priority | Description |
|---|---|
| P0 | Immediate fix required |
| P1 | High priority fix |
| P2 | Normal priority |
| P3 | Low priority |

---

## 13. Risks

Potential risks include:

- Browser compatibility issues
- Unexpected UI behavior
- Incorrect validation
- Missing requirements
- Changes to application functionality
- Environment-specific issues

---

## 14. Deliverables

The following QA deliverables will be maintained:

- Test Plan
- Test Scenarios
- Test Cases
- Test Execution Results
- Bug Reports
- Requirement Traceability Matrix
- Regression Checklist
- Test Summary Report

---

## 15. Approval

| Role | Name | Status |
|---|---|---|
| QA Engineer | Sachin Kumar Pal | Prepared |
| Reviewer | — | Pending |
| Project Owner | — | Pending |