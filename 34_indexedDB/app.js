// app.js (Main JavaScript File)

// Open a database named "UserDatabase" (version 1)
const request = indexedDB.open("UserDatabase", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
    }
    console.log("Database setup complete.");
};

request.onsuccess = function (event) {
    console.log("Database opened successfully.");
};

request.onerror = function (event) {
    console.log("Error opening database:", event.target.error);
};

// Function to add user data
function addUser(user) {
    const dbRequest = indexedDB.open("UserDatabase", 1);
    dbRequest.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("users", "readwrite");
        const store = transaction.objectStore("users");
        store.add(user);
        transaction.oncomplete = () => console.log("User added successfully.");
    };
}

// Function to fetch all users
function fetchUsers() {
    const dbRequest = indexedDB.open("UserDatabase", 1);
    dbRequest.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("users", "readonly");
        const store = transaction.objectStore("users");
        const request = store.getAll();
        request.onsuccess = function () {
            console.log("Users:", request.result);
            updateDOM(request.result);
        };
    };
}

// Function to update a user by ID
function updateUser(id, newData) {
    const dbRequest = indexedDB.open("UserDatabase", 1);
    dbRequest.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("users", "readwrite");
        const store = transaction.objectStore("users");
        store.get(id).onsuccess = function (event) {
            const data = event.target.result;
            if (data) {
                Object.assign(data, newData);
                store.put(data);
                console.log("User updated successfully.");
            } else {
                console.log("User not found.");
            }
        };
    };
}

// Function to delete a user by ID
function deleteUser(id) {
    const dbRequest = indexedDB.open("UserDatabase", 1);
    dbRequest.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction("users", "readwrite");
        const store = transaction.objectStore("users");
        store.delete(id);
        transaction.oncomplete = () => console.log("User deleted successfully.");
    };
}

// Function to update the DOM
function updateDOM(users) {
    const container = document.getElementById("output");
    container.innerHTML = users.map(user => `<p>${user.id}: ${user.name}, Age: ${user.age}</p>`).join("");
}

// Event Listeners for UI buttons
document.getElementById("addUser").addEventListener("click", () => {
    addUser({ name: "Alice", age: 25 });
});

document.getElementById("fetchUsers").addEventListener("click", fetchUsers);

document.getElementById("updateUser").addEventListener("click", () => {
    updateUser(1, { age: 30 });
});

document.getElementById("deleteUser").addEventListener("click", () => {
    deleteUser(1);
});
