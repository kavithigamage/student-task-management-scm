# Library Management System

## 1. Project Name

**Library Management System**

## 2. Project Overview

The Library Management System is a small web-based application developed as part of the Software Configuration Management (SCM) practical sessions.

The application helps users manage library books and basic borrowing activities. It provides simple functionality for adding, viewing, borrowing, and removing books.

The main focus of this project is to understand and demonstrate SCM practices using Git and GitHub throughout the software development process.

## 3. Project Objectives

- Develop a simple web-based Library Management System.
- Implement basic library book management functions.
- Practise version control using Git.
- Collaborate as a team using GitHub.
- Use branches to manage individual development tasks.
- Track changes using commits and maintain project history.
- Review and test changes before merging them into the main branch.
- Maintain project documentation throughout development.

## 4. Team Members and Responsibilities

The project team consists of five students.

| Student | Name | Assigned Role | Responsibilities |
|---|---|---|---|
| Student 1 | [T.D.Arambewela] | SCM Lead | Manage the repository, coordinate branches, monitor commits, and oversee SCM activities. |
| Student 2 | [K.C.Gamage] | Developer | Develop the book addition and viewing features. |
| Student 3 | [W.A.K.A.Panchala] | Developer | Develop the book borrowing functionality. |
| Student 4 | [M.A.M.V.T.Manatunga] | Developer | Develop the book removal functionality and improve the user interface. |
| Student 5 | [M.W.G.D.Chamudinie] | Reviewer/Tester | Review code changes, test application features, and report bugs before merging. |

*Replace the placeholders with the actual names of your team members.*

## 5. Technologies Used

- **HTML5** – Structure of the web application.
- **CSS3** – Styling and layout.
- **JavaScript** – Application functionality and user interactions.
- **Git** – Version control.
- **GitHub** – Remote repository hosting and team collaboration.
- **Visual Studio Code** – Code editor.
- **Web Browser** – Running and testing the application.

## 6. Main Features

### 6.1 Add Books
Allows users to add new books by entering information such as the book title, author, and book ID.

### 6.2 View Books
Displays the books available in the library.

### 6.3 Borrow Books
Allows users to borrow available books and updates their availability status.

### 6.4 Remove Books
Allows users to remove books from the library collection.

### 6.5 Book Availability
Displays whether a book is available or currently borrowed.

## 7. Project Structure

The project follows the recommended directory structure provided in the SCM practical assignment.

```text
scm-project/
├── README.md
├── docs/
│   ├── project-overview.md
│   └── scm-workflow.md
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── tests/
│   └── test-cases.md
└── .gitignore
```

### Directory Description

- `README.md` – Provides project information and setup instructions.
- `docs/` – Contains project documentation and SCM workflow information.
- `src/` – Contains the HTML, CSS, and JavaScript source files.
- `tests/` – Contains test cases and testing documentation.
- `.gitignore` – Specifies files and folders that Git should ignore.

## 8. Setup and Installation Instructions

### Prerequisites

Install or prepare the following:

- Git
- Visual Studio Code or another code editor
- A modern web browser
- Access to the team's GitHub repository

### Step 1: Clone the Repository

Open a terminal and execute:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL of your team's GitHub repository.

### Step 2: Navigate to the Project Directory

```bash
cd scm-project
```

### Step 3: Open the Project

Open the project folder in Visual Studio Code.

Alternatively, use:

```bash
code .
```

### Step 4: Run the Application

Open the `src/index.html` file in a web browser.

You can also use the Live Server extension in Visual Studio Code to run the application locally.

No backend server or database is required for the basic version of this project.

## 9. Software Configuration Management Workflow

Git and GitHub are used to manage source code, track changes, and support team collaboration.

### 9.1 Repository Management

The team uses one shared GitHub repository throughout all practical sessions. The repository history and branches will be maintained across the practical days.

### 9.2 Branching Strategy

The team uses separate branches for individual development tasks.

Example branches:

- `main` – Contains the main project version.
- `feature/add-books` – Development of the add-books feature.
- `feature/borrow-books` – Development of the borrowing feature.
- `feature/remove-books` – Development of the remove-books feature.
- `feature/view-books` – Development of the view-books feature.

### 9.3 Commit Management

Team members commit changes with meaningful commit messages.

Examples:

```bash
git add .
git commit -m "Add book registration form"
```

```bash
git commit -m "Implement book borrowing functionality"
```

```bash
git commit -m "Update book management styles"
```

### 9.4 Code Review and Merging

1. Developers create feature branches.
2. Developers implement and test their assigned features.
3. Developers commit and push their changes to GitHub.
4. Developers create pull requests.
5. The Reviewer/Tester checks the changes and tests the functionality.
6. The SCM Lead coordinates the review and merge process.
7. Approved changes are merged into the `main` branch.

### 9.5 Synchronizing Changes

Before starting new work, team members should update their local repositories.

```bash
git checkout main
git pull origin main
```

Developers should create or switch to their feature branches before making changes.

## 10. Testing

The application will be tested to verify that its main features work as expected.

Planned test cases include:

- Adding a book with valid information.
- Preventing submission when required fields are empty.
- Displaying the list of books correctly.
- Borrowing an available book.
- Preventing a book from being borrowed when it is unavailable.
- Removing a book from the library.
- Checking whether changes introduced through different branches work correctly after merging.

Test results and identified issues will be documented in the `tests/` directory.

## 11. Project Scope and Limitations

This project is intended for educational purposes and focuses primarily on SCM practices.

The initial version uses HTML, CSS, and JavaScript. It does not require a backend server or a database.

Book information may be stored temporarily in the browser or maintained in JavaScript during the initial implementation. Persistent storage and advanced library management features are outside the initial scope unless added later.

## 12. Conclusion

The Library Management System provides a practical opportunity to apply Software Configuration Management concepts in a team-based development environment.

By maintaining a shared repository, using feature branches, writing meaningful commits, reviewing changes, testing features, and documenting the development process, the team aims to demonstrate effective SCM practices throughout the practical sessions.


## Current Development Status
Initial version completed.
Version: 0.1.0

