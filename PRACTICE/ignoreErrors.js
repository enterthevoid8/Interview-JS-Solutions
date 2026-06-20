
// ==============================
// IGNORING PROMISE ERRORS EXAMPLES
// ==============================

// 1️⃣ Simple ignore using .catch()
function example1() {
  fetch("https://invalid-api.com/data")
    .catch(() => {}); // ❌ error ignored silently
}

// 2️⃣ Using void (explicit discard)
function example2() {
  fetch("https://invalid-api.com/data")
    .catch((e) => void e); // ignored
}

// 3️⃣ Async/Await with try/catch ignore
async function example3() {
  try {
    await fetch("https://invalid-api.com/data");
  } catch (e) {
    // ignored
  }
}

// 4️⃣Inline ignore (very common)
async function example4() {
  await fetch("https://invalid-api.com/data").catch(() => {});
}

// 5️⃣ Fire-and-forget (ignore success + error)
function example5() {
  void fetch("https://invalid-api.com/log");
}

// 6️⃣ Selective ignore (BEST PRACTICE)
async function example6() {
  try {
    const controller = new AbortController();

    setTimeout(() => controller.abort(), 100); // force abort

    await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    });
  } catch (e) {
    if (e.name === "AbortError") {
      console.log("Ignored AbortError");
    } else {
      throw e; // important errors rethrown
    }
  }
}

// ==============================
// RUN ALL EXAMPLES
// ==============================

example1();
example2();
example3();
example4();
example5();
example6();

