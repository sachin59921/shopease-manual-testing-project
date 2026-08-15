# ShopEase – Bug Report

## Project Information

| Field | Details |
|---|---|
| Project Name | ShopEase – Demo E-commerce Application |
| Document | Bug Report |
| Version | 1.0 |
| Tested By | Sachin Kumar Pal |
| Testing Type | Manual Testing |
| Environment | Windows 11 |
| Browser | Google Chrome, Microsoft Edge, Mozilla Firefox |
| Total Test Cases | 30 |
| Failed Test Cases | 3 |
| Total Defects | 3 |

---

# Bug Summary

| Bug ID | Test Case ID | Module | Bug Title | Severity | Priority | Status |
|---|---|---|---|---|---|---|
| BUG-001 | TC-020 | Shopping Cart | Negative quantity is accepted | High | P1 | Open |
| BUG-002 | TC-029 | Responsive UI | Horizontal scrolling on mobile Products section | Medium | P2 | Open |
| BUG-003 | TC-030 | Cross-Browser | UI alignment issue in Firefox | Low | P3 | Open |

---

# BUG-001 – Negative Quantity Accepted

## Bug Information

| Field | Details |
|---|---|
| Bug ID | BUG-001 |
| Test Case ID | TC-020 |
| Module | Shopping Cart |
| Severity | High |
| Priority | P1 |
| Status | Open |
| Environment | Windows 11 |
| Browser | Google Chrome |
| Reported By | Sachin Kumar Pal |

## Title

**Negative product quantity is accepted in the Shopping Cart.**

## Description

The Shopping Cart allows users to enter a negative quantity such as `-1`.

A negative quantity should not be accepted because it can result in an invalid cart state and incorrect calculations.

## Preconditions

- ShopEase application is accessible.
- Product is available.
- Product has been added to the Cart.

## Steps to Reproduce

1. Open the ShopEase application.
2. Navigate to the Products section.
3. Add **Wireless Mouse** to the Cart.
4. Open the Shopping Cart.
5. Locate the quantity field.
6. Enter `-1`.
7. Observe the Cart.

## Test Data

```text
Product: Wireless Mouse
Quantity: -1