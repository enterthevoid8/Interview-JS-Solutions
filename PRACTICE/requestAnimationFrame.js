// ===== CREATE ELEMENT =====
const element = document.createElement("div");
element.id = "myElement";
element.textContent = "🚗";
element.style.position = "absolute";
element.style.left = "0px";
element.style.top = "100px";
element.style.fontSize = "30px";

document.body.appendChild(element);

// ===== ANIMATION FUNCTION =====
function animate() {
  let currentPosition = parseInt(window.getComputedStyle(element).left, 10) || 0;

  currentPosition += 2;
  element.style.left = currentPosition + "px";

  if (currentPosition < window.innerWidth - 50) {
    requestAnimationFrame(animate);
  }
}

// ===== START =====
requestAnimationFrame(animate);