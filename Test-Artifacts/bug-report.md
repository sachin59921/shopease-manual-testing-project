
---
```markdown
# ShopEase – Bug Report

## 1. Document Information

| Field | Details |
|---|---|
| Project | ShopEase – Demo E-commerce Application |
| Document | Bug Report |
| Version | 1.0 |
| Tester | Sachin Kumar Pal |
| Total Defects | 3 |
| Status | Open |

---

# BUG-001 – Negative Quantity Accepted in Cart

| Field | Details |
|---|---|
| Bug ID | BUG-001 |
| Test Case ID | TC-020 |
| Module | Shopping Cart |
| Title | Negative quantity is accepted |
| Severity | High |
| Priority | P1 |
| Status | Open |
| Environment | Windows 11 / Google Chrome |

### Description

The Cart quantity field allows the user to enter a negative quantity such as `-1`.

Negative product quantities should not be accepted because they can result in an invalid cart state and incorrect calculations.

### Preconditions

- Application is accessible.
- A product has been added to the Cart.

### Steps to Reproduce

1. Open ShopEase.
2. Add Wireless Mouse to Cart.
3. Open Cart.
4. Locate the quantity field.
5. Enter `-1`.
6. Observe the Cart.

### Test Data

```text
Product: Wireless Mouse
Quantity: -1