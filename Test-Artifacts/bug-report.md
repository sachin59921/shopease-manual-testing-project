# ShopEase – Bug Report

## BUG-001 – Login accepts invalid password

| Field | Details |
|---|---|
| Bug ID | BUG-001 |
| Module | Login |
| Severity | High |
| Priority | P1 |
| Status | Open |
| Environment | Windows 11 / Chrome |

### Summary

Login succeeds when a valid email is combined with an incorrect password.

### Steps to Reproduce

1. Open Login section.
2. Enter `qa@example.com`.
3. Enter `Wrong@123`.
4. Click **Login**.

### Expected Result

Login should fail and an invalid credentials message should be displayed.

### Actual Result

Application displays **Login successful** even though the password is incorrect.

---

## BUG-002 – Login accepts invalid email

| Field | Details |
|---|---|
| Bug ID | BUG-002 |
| Module | Login |
| Severity | High |
| Priority | P1 |
| Status | Open |
| Environment | Windows 11 / Chrome |

### Steps to Reproduce

1. Open Login section.
2. Enter `invalid@example.com`.
3. Enter `Test@123`.
4. Click **Login**.

### Expected Result

Invalid email should be rejected.

### Actual Result

Application allows login when an invalid email is entered.

---

## BUG-003 – Cart accepts quantity zero

| Field | Details |
|---|---|
| Bug ID | BUG-003 |
| Module | Cart |
| Severity | Medium |
| Priority | P2 |
| Status | Open |
| Environment | Windows 11 / Chrome |

### Steps to Reproduce

1. Add Wireless Mouse to cart.
2. Open Cart.
3. Change quantity to `0`.

### Expected Result

Product should be removed or appropriate validation should be displayed.

### Actual Result

Product remains in the cart with quantity `0`.

---

## BUG-004 – Incorrect cart total for invalid quantity

| Field | Details |
|---|---|
| Bug ID | BUG-004 |
| Module | Cart |
| Severity | High |
| Priority | P1 |
| Status | Open |
| Environment | Windows 11 / Chrome |

### Steps to Reproduce

1. Add a product to cart.
2. Open Cart.
3. Enter an invalid/negative quantity where permitted.
4. Observe the total.

### Expected Result

Cart total should never become invalid or negative.

### Actual Result

Cart total may become incorrect depending on the entered quantity.

---

## BUG-005 – No clear validation message for zero quantity

| Field | Details |
|---|---|
| Bug ID | BUG-005 |
| Module | Cart |
| Severity | Low |
| Priority | P3 |
| Status | Open |
| Environment | Windows 11 / Chrome |

### Steps to Reproduce

1. Add product to cart.
2. Open Cart.
3. Set quantity to `0`.

### Expected Result

Clear validation or removal behavior should be provided.

### Actual Result

No clear validation message is displayed.