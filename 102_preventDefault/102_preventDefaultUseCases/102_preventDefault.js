// app.js (Main JavaScript File)

/** 
preventDefault()

Explanation:
	preventDefault() stops the default action of an event without stopping event propagation.
	Commonly used in forms, links, key presses, drag-and-drop, and right-click events.
	Prevents unwanted browser behaviors like form submission, link navigation, and scrolling.

	Use Case						Description

	Prevent 						Form Submission	Stops form submission to validate before sending data.
	Disable Link Navigation			Stops <a> tag from navigating to another page.
	Block Right-Click Menu			Disables the default context menu.
	Prevent Page Refresh (F5)		Blocks page reloads using keyboard events.
	Disable Scroll on Key Events	Prevents scrolling using arrow keys or spacebar.
	Prevent Drag-and-Drop Behavior	Stops unwanted file uploads.

*/

// 1. Prevent Form Submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission prevented!");
});

// 2. Prevent Link Navigation
document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link navigation prevented!");
});

// 3. Prevent Right-Click Context Menu
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    console.log("Right-click menu disabled!");
});

// 4. Prevent Page Refresh using F5 or Ctrl+R
document.addEventListener("keydown", function(event) {
    if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
        event.preventDefault();
        console.log("Page refresh prevented!");
    }
});

// 5. Prevent Spacebar & Arrow Key Scrolling
window.addEventListener("keydown", function(event) {
    if (event.key === " " || event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        console.log("Scrolling prevented!");
    }
});

// 6. Prevent Drag-and-Drop File Uploads
document.addEventListener("dragover", function(event) {
    event.preventDefault();
    console.log("Dragover event prevented!");
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    console.log("Drop event prevented!");
});
