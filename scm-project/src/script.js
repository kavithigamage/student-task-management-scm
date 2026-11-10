
let books = JSON.parse(localStorage.getItem("books")) || [];

const form = document.getElementById("bookForm");
const list = document.getElementById("bookList");
const search = document.getElementById("search");

function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

function displayBooks() {
    const keyword = search.value.toLowerCase();

    list.innerHTML = "";

    books.forEach((book, index) => {
        if (
            !book.title.toLowerCase().includes(keyword) &&
            !book.author.toLowerCase().includes(keyword)
        ) return;

        const row = document.createElement("tr");

        [book.title, book.author, book.status].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actions = document.createElement("td");

        const borrow = document.createElement("button");
        borrow.textContent =
            book.status === "Available" ? "Borrow" : "Return";

        borrow.disabled =
            book.status === "Borrowed" && false;

        borrow.onclick = () => {
            book.status =
                book.status === "Available" ? "Borrowed" : "Available";
            saveBooks();
            displayBooks();
        };

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.className = "delete";

        remove.onclick = () => {
            if (confirm("Remove this book?")) {
                books.splice(index, 1);
                saveBooks();
                displayBooks();
            }
        };

        actions.append(borrow, remove);
        row.appendChild(actions);
        list.appendChild(row);
    });

    document.getElementById("total").textContent = books.length;
    document.getElementById("available").textContent =
        books.filter(book => book.status === "Available").length;
    document.getElementById("borrowed").textContent =
        books.filter(book => book.status === "Borrowed").length;
}

form.onsubmit = event => {
    event.preventDefault();

    books.push({
        title: document.getElementById("title").value.trim(),
        author: document.getElementById("author").value.trim(),
        status: "Available"
    });

    saveBooks();
    form.reset();
    displayBooks();
};

search.oninput = displayBooks;

displayBooks();


const themeToggle = document.getElementById("themeToggle");

// Load the saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    themeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ "
        : "🌙";
}

updateThemeButton();

// Toggle themes
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const theme = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("theme", theme);
    updateThemeButton();
});


const bookForm = document.getElementById("bookForm");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");

const validationMessage =
    document.getElementById("validationMessage");

bookForm.addEventListener("submit", function(event) {

    // Prevent automatic form submission
    event.preventDefault();

    // Get input values and remove extra spaces
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    // Check empty title
    if (title === "") {
        showMessage("Please enter a book title.", "error");
        titleInput.focus();
        return;
    }

    // Check empty author
    if (author === "") {
        showMessage("Please enter the author's name.", "error");
        authorInput.focus();
        return;
    }

    // Check title length
    if (title.length > 100) {
        showMessage("Book title cannot exceed 100 characters.", "error");
        titleInput.focus();
        return;
    }

    // Check author length
    if (author.length > 60) {
        showMessage("Author name cannot exceed 60 characters.", "error");
        authorInput.focus();
        return;
    }

    // All validations passed
    showMessage("Book details are valid!", "success");

    // Continue with your existing book-adding functionality here

});

function showMessage(message, type) {

    validationMessage.textContent = message;

    validationMessage.style.color =
        type === "error" ? "red" : "green";
}

































