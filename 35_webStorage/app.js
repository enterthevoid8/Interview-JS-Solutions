// app.js (Main JavaScript File)

// Save data to localStorage
document.getElementById("saveLocal").addEventListener("click", () => {
    localStorage.setItem("username", "Alice");
    localStorage.setItem("age", "25");
    console.log("Data saved to localStorage");
});

// Retrieve data from localStorage
document.getElementById("getLocal").addEventListener("click", () => {
    const username = localStorage.getItem("username");
    const age = localStorage.getItem("age");
    document.getElementById("output").innerText = `Username: ${username}, Age: ${age}`;
});

// Remove a specific item from localStorage
document.getElementById("removeLocal").addEventListener("click", () => {
    localStorage.removeItem("username");
    console.log("Username removed from localStorage");
});

// Clear all data from localStorage
document.getElementById("clearLocal").addEventListener("click", () => {
    localStorage.clear();
    console.log("localStorage cleared");
});

// Save data to sessionStorage
document.getElementById("saveSession").addEventListener("click", () => {
    sessionStorage.setItem("sessionData", "This data lasts until the tab is closed");
    console.log("Data saved to sessionStorage");
});

// Retrieve data from sessionStorage
document.getElementById("getSession").addEventListener("click", () => {
    const sessionData = sessionStorage.getItem("sessionData");
    document.getElementById("sessionOutput").innerText = `Session Data: ${sessionData}`;
});

// Clear sessionStorage
document.getElementById("clearSession").addEventListener("click", () => {
    sessionStorage.clear();
    console.log("sessionStorage cleared");
});
