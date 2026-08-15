# ShopEase – Requirement Traceability Matrix

## 1. Document Information

| Field | Details |
|---|---|
| Project | ShopEase – Demo E-commerce Application |
| Document | Requirement Traceability Matrix |
| Version | 1.0 |
| Prepared By | Sachin Kumar Pal |
| Total Requirements | 10 |
| Total Test Cases | 30 |
| Total Defects | 3 |
| Status | Completed |

---

## 2. Requirement IDs

| Requirement ID | Requirement |
|---|---|
| REQ-001 | User should be able to login with valid credentials |
| REQ-002 | Application should validate login inputs |
| REQ-003 | Products should be displayed correctly |
| REQ-004 | User should be able to search products |
| REQ-005 | User should be able to manage the Shopping Cart |
| REQ-006 | Cart should calculate product totals correctly |
| REQ-007 | User should be able to complete checkout |
| REQ-008 | Application navigation should work correctly |
| REQ-009 | Application should support responsive layouts |
| REQ-010 | Application should work correctly across supported browsers |

---

# 3. Requirement Traceability Matrix

| Requirement ID | Requirement | Test Case IDs | Total TC | Passed | Failed | Status |
|---|---|---|---:|---:|---:|---|
| REQ-001 | User Login | TC-001, TC-002, TC-003 | 3 | 3 | 0 | Passed |
| REQ-002 | Login Validation | TC-004, TC-005, TC-006, TC-007, TC-008 | 5 | 5 | 0 | Passed |
| REQ-003 | Product Listing | TC-009, TC-010, TC-011 | 3 | 3 | 0 | Passed |
| REQ-004 | Product Search | TC-012, TC-013, TC-014, TC-015 | 4 | 4 | 0 | Passed |
| REQ-005 | Cart Management | TC-016, TC-017, TC-018, TC-019, TC-020, TC-021, TC-023 | 7 | 6 | 1 | Partially Passed |
| REQ-006 | Cart Calculation | TC-022 | 1 | 1 | 0 | Passed |
| REQ-007 | Checkout | TC-024, TC-025 | 2 | 2 | 0 | Passed |
| REQ-008 | Navigation | TC-026, TC-027, TC-028 | 3 | 3 | 0 | Passed |
| REQ-009 | Responsive UI | TC-029 | 1 | 0 | 1 | Failed |
| REQ-010 | Browser Compatibility | TC-030 | 1 | 0 | 1 | Failed |
| **TOTAL** | | **TC-001 to TC-030** | **30** | **27** | **3** | **90% Passed** |

---

# 4. Detailed Test Case Traceability

| Test Case ID | Requirement ID | Test Case Result | Defect ID |
|---|---|---|---|
| TC-001 | REQ-001 | Pass | — |
| TC-002 | REQ-001 | Pass | — |
| TC-003 | REQ-001 | Pass | — |
| TC-004 | REQ-002 | Pass | — |
| TC-005 | REQ-002 | Pass | — |
| TC-006 | REQ-002 | Pass | — |
| TC-007 | REQ-002 | Pass | — |
| TC-008 | REQ-002 | Pass | — |
| TC-009 | REQ-003 | Pass | — |
| TC-010 | REQ-003 | Pass | — |
| TC-011 | REQ-003 | Pass | — |
| TC-012 | REQ-004 | Pass | — |
| TC-013 | REQ-004 | Pass | — |
| TC-014 | REQ-004 | Pass | — |
| TC-015 | REQ-004 | Pass | — |
| TC-016 | REQ-005 | Pass | — |
| TC-017 | REQ-005 | Pass | — |
| TC-018 | REQ-005 | Pass | — |
| TC-019 | REQ-005 | Pass | — |
| TC-020 | REQ-005 | Fail | BUG-001 |
| TC-021 | REQ-005 | Pass | — |
| TC-022 | REQ-006 | Pass | — |
| TC-023 | REQ-005 | Pass | — |
| TC-024 | REQ-007 | Pass | — |
| TC-025 | REQ-007 | Pass | — |
| TC-026 | REQ-008 | Pass | — |
| TC-027 | REQ-008 | Pass | — |
| TC-028 | REQ-008 | Pass | — |
| TC-029 | REQ-009 | Fail | BUG-002 |
| TC-030 | REQ-010 | Fail | BUG-003 |

---

# 5. Requirement Coverage Summary

| Metric | Result |
|---|---:|
| Total Requirements | 10 |
| Requirements with Test Coverage | 10 |
| Requirements without Test Coverage | 0 |
| Requirement Coverage | 100% |
| Total Test Cases | 30 |
| Executed Test Cases | 30 |
| Passed Test Cases | 27 |
| Failed Test Cases | 3 |
| Blocked Test Cases | 0 |
| Not Executed | 0 |
| Test Pass Rate | 90% |
| Total Defects | 3 |

---

# 6. Requirement Status Summary

| Status | Requirements | Count |
|---|---|---:|
| Passed | REQ-001, REQ-002, REQ-003, REQ-004, REQ-006, REQ-007, REQ-008 | 7 |
| Partially Passed | REQ-005 | 1 |
| Failed | REQ-009, REQ-010 | 2 |
| **Total** | | **10** |

---

# 7. Failed Requirement Details

## REQ-005 – Cart Management

**Status:** Partially Passed

### Failed Test Case

```text
TC-020 – Verify negative quantity validation