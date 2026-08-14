# ShopEase – Regression Testing Checklist

## Project Information

| Field | Details |
|---|---|
| Project | ShopEase – Demo E-commerce Application |
| Testing Type | Regression Testing |
| Prepared By | Sachin Kumar Pal |
| Version | 1.0 |
| Environment | Windows 11 / Chrome |

---

## 1. Login Module

### Authentication

- [ ] Login page loads successfully
- [ ] User can login with valid credentials
- [ ] Login fails with invalid email
- [ ] Login fails with invalid password
- [ ] Login fails with both invalid email and password
- [ ] Login is prevented when email is blank
- [ ] Login is prevented when password is blank
- [ ] Appropriate error message is displayed
- [ ] Successful login message is displayed
- [ ] Password field masks entered characters

---

## 2. Product Module

### Product Listing

- [ ] Products section loads successfully
- [ ] All expected products are displayed
- [ ] Product name is displayed correctly
- [ ] Product price is displayed correctly
- [ ] Add to Cart button is displayed
- [ ] Product cards have proper alignment
- [ ] Product information is readable

---

## 3. Search Module

### Product Search

- [ ] Exact product search works
- [ ] Partial product search works
- [ ] Search is case-insensitive where applicable
- [ ] Search returns correct matching products
- [ ] Search with unavailable product displays appropriate message
- [ ] Empty search behaves correctly
- [ ] Search results update correctly
- [ ] Search does not display unrelated products

---

## 4. Shopping Cart Module

### Cart Functionality

- [ ] Add product to cart works
- [ ] Cart count increases correctly
- [ ] Same product can be added multiple times
- [ ] Product quantity is displayed correctly
- [ ] Product quantity can be updated
- [ ] Quantity cannot be negative
- [ ] Quantity zero is handled correctly
- [ ] Invalid quantity is rejected
- [ ] Product can be removed if supported
- [ ] Cart total is calculated correctly
- [ ] Cart total updates after quantity change
- [ ] Cart remains consistent after multiple updates

---

## 5. Checkout Module

### Checkout Validation

- [ ] Checkout button is displayed
- [ ] Empty cart cannot be checked out
- [ ] Appropriate empty-cart validation is displayed
- [ ] Checkout works with a valid cart
- [ ] Successful checkout message is displayed
- [ ] Cart total is correct before checkout
- [ ] Invalid cart values do not allow checkout

---

## 6. Navigation

- [ ] Home navigation works
- [ ] Products navigation works
- [ ] Login navigation works
- [ ] Cart button opens cart
- [ ] Close cart button works
- [ ] Navigation does not cause page errors
- [ ] Navigation links are clickable

---

## 7. UI Testing

### General UI

- [ ] Page layout is consistent
- [ ] Text is readable
- [ ] Buttons are visible
- [ ] Buttons are clickable
- [ ] Input fields are aligned correctly
- [ ] No overlapping elements
- [ ] No broken layout
- [ ] No unnecessary horizontal scrolling
- [ ] Error messages are readable
- [ ] Success messages are readable

---

## 8. Responsive Testing

### Mobile Viewports

- [ ] 375 × 667
- [ ] 390 × 844
- [ ] 412 × 915

### Desktop Viewports

- [ ] 1366 × 768
- [ ] 1920 × 1080

### Responsive Checks

- [ ] Navigation remains usable
- [ ] Product cards adjust correctly
- [ ] Search field remains usable
- [ ] Buttons remain clickable
- [ ] Text does not overflow
- [ ] No element overlap
- [ ] Cart panel works correctly
- [ ] Page does not require unexpected horizontal scrolling

---

## 9. Cross-Browser Regression

### Google Chrome

- [ ] Login
- [ ] Product listing
- [ ] Search
- [ ] Cart
- [ ] Checkout
- [ ] Navigation
- [ ] Responsive UI

### Microsoft Edge

- [ ] Login
- [ ] Product listing
- [ ] Search
- [ ] Cart
- [ ] Checkout
- [ ] Navigation
- [ ] Responsive UI

### Mozilla Firefox

- [ ] Login
- [ ] Product listing
- [ ] Search
- [ ] Cart
- [ ] Checkout
- [ ] Navigation
- [ ] Responsive UI

---

## 10. Defect Retesting

After defects are fixed:

- [ ] BUG-001 retested
- [ ] BUG-002 retested
- [ ] BUG-003 retested
- [ ] BUG-004 retested
- [ ] BUG-005 retested

### Retesting Result

| Bug ID | Expected Result | Actual Result | Status |
|---|---|---|---|
| BUG-001 | Invalid password rejected | — | Pending |
| BUG-002 | Invalid email rejected | — | Pending |
| BUG-003 | Zero quantity handled correctly | — | Pending |
| BUG-004 | Cart total remains accurate | — | Pending |
| BUG-005 | Proper validation message displayed | — | Pending |

---

## 11. Regression Exit Criteria

Regression testing can be completed when:

- [ ] All critical test cases pass
- [ ] All high-priority defects are fixed or formally accepted
- [ ] Fixed defects are successfully retested
- [ ] No critical regression defects are identified
- [ ] Failed cases have associated defect IDs
- [ ] Test execution results are updated
- [ ] RTM is updated
- [ ] Test Summary Report is completed

---

## 12. Final Regression Status

**Status:** Not Executed

> Update this status after executing the complete regression suite.

Possible values:

- `Passed`
- `Failed`
- `Passed with Minor Issues`
- `Blocked`
- `Not Executed`