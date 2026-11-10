# Software Configuration Management Record

## Project Name
Library Management System

## Task 06 – Identify Configuration Items

The following Configuration Items (CIs) have been identified for the Library Management System. These items are maintained under version control using Git and GitHub to track changes and support team collaboration.

| CI ID | Configuration Item | Type | Owner | Version/Status |
|---|---|---|---|---|
| CI-01 | `src/index.html` | Source Code | Developer 1 | v0.1 |
| CI-02 | `src/style.css` | Source Code | Developer 2 | v0.1 |
| CI-03 | `src/script.js` | Source Code | Developer 3 | v0.1 |
| CI-04 | `README.md` | Documentation | Team | v0.1 |
| CI-05 | `docs/scm-record.md` | Documentation | SCM Lead | v0.1 |
| CI-06 | `tests/test-cases.md` | Test Artifact | Reviewer/Tester | v0.1 |
| CI-07 | `.gitignore` | Configuration File | SCM Lead | v0.1 |


# Software Configuration Management (SCM) Record

## Task 09 – Baseline Record

**Baseline ID:** BL-01

**Baseline Version:** v0.1.0

**Project Name:** Student Task Management System

**Baseline Date:** 02 November 2026

**Description:** This baseline represents the agreed stable version of the Student Task Management System, including the project documentation, source files, test cases, and SCM records.

**Included Configuration Items (CIs):**
- README.md
- docs/project-overview.md
- docs/scm-workflow.md
- docs/scm-record.md
- src/index.html
- src/style.css
- src/script.js
- tests/test-cases.md
- .gitignore

**Purpose:** To establish a reference point for future development and change management.

**Git Tag:** v0.1.0

**Status:** Approved

## Task 04 – Branching Strategy

### Selected Branching Strategy

The team selected the Feature-Branch Workflow
for the Library Management System project.

This approach allows developers to work
independently on different features without
directly modifying the main branch.

### Branching Structure

**1. main**

- Contains the stable integrated version
  of the application.
- Changes are integrated after development,
  review and testing.

**2. feature/CR-02-ui-update**

- Used by Student A.
- Responsible for user interface development.
- Includes improvements to the layout,
  styling, buttons and overall appearance.

**3. feature/CR-03-validation**

- Used by Student B.
- Responsible for book input validation.
- Includes empty-field validation,
  whitespace validation and input limits.

### Justification for Selecting This Strategy

The Feature-Branch Workflow was selected
because two developers are working on
different features independently.

It provides the following benefits:

1. Allows parallel development.
2. Prevents unfinished changes from directly
   affecting the main branch.
3. Makes changes easier to track and review.
4. Supports testing before integration.
5. Helps identify and resolve merge conflicts.

### Integration Approach

After completing their respective features,
both developers will push their branches
to GitHub.

The team will review and test the changes
before merging them into main.

**Status:** Feature development in progress.
