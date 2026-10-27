
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
