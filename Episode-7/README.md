# Node.js Core Concepts (Demo Project)

This project demonstrates important **Node.js concepts**:

---

## 1. Synchronous vs Asynchronous (pbkdf2 example)

- `crypto.pbkdf2Sync()` → **Synchronous** function. Blocks the main thread until the key is generated.
- `crypto.pbkdf2()` → **Asynchronous** function. Runs in the background using libuv’s thread pool.

👉 Always prefer **async** in production.

---

## 2. Multiply Function (Basic JS)

```js
function multiplyFn(x, y) {
  return x * y;
}
Simple example to show functions and return values.
''''
3. setTimeout and Event Loop
js


setTimeout(() => console.log("Runs after main thread is empty"), 0);
setTimeout(() => console.log("Runs after 3 seconds"), 3000);
setTimeout(..., 0) does not run immediately.

It waits until the call stack is empty, then executes.

''''
4. HTTPS GET Request

https.get("https://dummyjson.com/products/1", (res) => {
   let data = "";
   res.on("data", chunk => data += chunk);
   res.on("end", () => console.log(data));
});
Uses Node.js core https module.

Non-blocking, event-driven.
''''
5. File System (fs.readFile)

fs.readFile("./file.txt", "utf8", (err, data) => {
   if (err) throw err;
   console.log("File Data:", data);
});
Async file read.

Runs in libuv thread pool, callback is triggered when done.
'''
6. Event Loop & Libuv
JS runs on single thread.

Long-running tasks (crypto, fs, https) are delegated to libuv thread pool.

Once finished, callback is queued in Event Loop → executed when stack is free.

📌 Conclusion
Always use async methods in Node.js to avoid blocking.

Understand event loop for writing scalable code.

This demo shows:
✅ Sync vs Async
✅ Event Loop behavior
✅ HTTPS request handling
✅ File system I/O
✅ Functions and variables in JS