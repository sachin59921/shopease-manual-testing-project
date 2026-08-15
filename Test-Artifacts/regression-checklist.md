# ShopEase – Regression Testing Checklist

## 1. Document Information

| Field | Details |
|---|---|
| Project | ShopEase – Demo E-commerce Application |
| Document | Regression Testing Checklist |
| Version | 1.0 |
| Prepared By | Sachin Kumar Pal |
| Total Checks | 30 |
| Status | Ready for Regression |

---

# 2. Purpose

This checklist is used to verify that existing ShopEase functionality continues to work after defect fixes, code changes, UI changes, or new feature implementation.

---

# 3. Login Regression

- [ ] Verify Login page loads correctly
- [ ] Verify valid login
- [ ] Verify invalid email
- [ ] Verify invalid password
- [ ] Verify blank email validation
- [ ] Verify blank password validation
- [ ] Verify both fields blank
- [ ] Verify password masking

**Related Test Cases:** TC-001 to TC-008

---

# 4. Product Regression

- [ ] Verify Products page loads
- [ ] Verify product names
- [ ] Verify product prices
- [ ] Verify product cards
- [ ] Verify Add to Cart button
- [ ] Verify product information

**Related Test Cases:** TC-009 to TC-011

---

# 5. Search Regression

- [ ] Verify exact product search
- [ ] Verify partial product search
- [ ] Verify invalid product search
- [ ] Verify blank search
- [ ] Verify search result accuracy
- [ ] Verify search results after page refresh

**Related Test Cases:** TC-012 to TC-015

---

# 6. Cart Regression

- [ ] Verify product can be added
- [ ] Verify multiple products
- [ ] Verify same product multiple times
- [ ] Verify quantity update
- [ ] Verify quantity 1
- [ ] Verify quantity 0
- [ ] Verify negative quantity validation
- [ ] Verify large quantity
- [ ] Verify product removal
- [ ] Verify cart count
- [ ] Verify cart persistence
- [ ] Verify cart total

**Related Test Cases:** TC-016 to TC-023

---

# 7. Checkout Regression

- [ ] Verify checkout with empty Cart
- [ ] Verify checkout with valid Cart
- [ ] Verify order confirmation
- [ ] Verify Cart details before checkout
- [ ] Verify total amount before checkout

**Related Test Cases:** TC-024 to TC-025

---

# 8. Navigation Regression

- [ ] Verify Home navigation
- [ ] Verify Products navigation
- [ ] Verify Login navigation
- [ ] Verify Cart navigation
- [ ] Verify navigation after login
- [ ] Verify browser Back button

**Related Test Cases:** TC-026 to TC-028

---

# 9. Responsive Regression

Test the application at:

```text
375 × 667
390 × 844
412 × 915