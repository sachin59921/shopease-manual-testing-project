
---
```markdown
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
| Status | Completed |

---

## 2. Requirement IDs

| Requirement ID | Requirement |
|---|---|
| REQ-001 | User should be able to login |
| REQ-002 | Application should validate login inputs |
| REQ-003 | Products should be displayed correctly |
| REQ-004 | User should be able to search products |
| REQ-005 | User should be able to manage Cart |
| REQ-006 | Cart should calculate totals correctly |
| REQ-007 | User should be able to checkout |
| REQ-008 | Application navigation should work correctly |
| REQ-009 | Application should support responsive layouts |
| REQ-010 | Application should support major browsers |

---

# 3. Requirement Traceability Matrix

| Requirement ID | Requirement | Test Case IDs | Total TC | Passed | Failed | Coverage |
|---|---|---|---:|---:|---:|---|
| REQ-001 | User Login | TC-001, TC-002, TC-003 | 3 | 3 | 0 | Covered |
| REQ-002 | Login Validation | TC-004, TC-005, TC-006, TC-007, TC-008 | 5 | 5 | 0 | Covered |
| REQ-003 | Product Listing | TC-009, TC-010, TC-011 | 3 | 3 | 0 | Covered |
| REQ-004 | Product Search | TC-012, TC-013, TC-014, TC-015 | 4 | 4 | 0 | Covered |
| REQ-005 | Cart Management | TC-016, TC-017, TC-018, TC-019, TC-020, TC-021, TC-023 | 7 | 6 | 1 | Partial |
| REQ-006 | Cart Calculation | TC-022 | 1 | 1 | 0 | Covered |
| REQ-007 | Checkout | TC-024, TC-025 | 2 | 2 | 0 | Covered |
| REQ-008 | Navigation | TC-026, TC-027, TC-028 | 3 | 3 | 0 | Covered |
| REQ-009 | Responsive UI | TC-029 | 1 | 0 | 1 | Partial |
| REQ-010 | Browser Compatibility | TC-030 | 1 | 0 | 1 | Partial |
| **TOTAL** | | **TC-001 to TC-030** | **30** | **27** | **3** | **90%** |

---

# 4. Test Case Traceability

| Test Case ID | Requirement ID | Result | Defect |
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

# 5. Coverage Summary

| Metric | Result |
|---|---:|
| Total Requirements | 10 |
| Requirements Covered | 10 |
| Total Test Cases | 30 |
| Passed | 27 |
| Failed | 3 |
| Requirement Coverage | 100% |
| Test Pass Rate | 90% |

---

# 6. Traceability Status

All defined requirements have at least one associated test case.

However, the following requirements have failed test cases:

- REQ-005 – Cart Management
- REQ-009 – Responsive UI
- REQ-010 – Browser Compatibility

These requirements should be revalidated after the associated defects are fixed.