/** IndexedDB

Explanation:

- IndexedDB is a low-level NoSQL database in the browser that allows storing large amounts of structured data.
- It is asynchronous, meaning it does not block the main thread and works with transactions.
- Data is stored as key-value pairs inside object stores, making it useful for caching and offline applications.
- IndexedDB works inside a browser and persists data even after page reloads.

Feature	Description
- NoSQL             Storage	Stores structured data as key-value pairs.
- Asynchronous      API	Works without blocking the main thread.
- Object Stores	    Collections where data is stored, similar to tables in SQL.
- Indexed Data	    Can create indexes for efficient searching.
- Transactions	    Ensures data consistency with read and write transactions. 

Conclusion:

IndexedDB allows storing structured data in the browser for long-term use.
It is asynchronous and works with transactions to ensure data consistency.
Data is stored in Object Stores, similar to tables in a database.
CRUD operations (Create, Read, Update, Delete) are performed using IndexedDB transactions.
IndexedDB is commonly used for offline applications, caching, and storing user data persistently.

*/