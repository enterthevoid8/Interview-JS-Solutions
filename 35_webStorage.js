/**
    
    Web Storage

    Web Storage API provides a way to store key-value pairs in the browser with better security and larger storage capacity than cookies.
    It includes two types: localStorage (persistent storage) and sessionStorage (temporary storage for a session).
    Both localStorage and sessionStorage store data as strings and can only be accessed by scripts from the same origin.
    Web Storage is synchronous, meaning it executes immediately.
    
    Storage Type	Description
    
    localStorage	Stores data persistently (until manually cleared).
    sessionStorage	Stores data for a session (cleared when the tab is closed).
    Storage Limit	Typically around 5-10MB per domain, much larger than cookies.
    Access Scope	Data is accessible only from scripts on the same domain.
    Data Format	    Stores data as key-value string pairs.

    Conclusion:
    
    localStorage persists data until it is manually cleared, even after browser restarts.
    sessionStorage stores data temporarily and clears it once the tab is closed.
    Web Storage allows quick and secure data storage, better than cookies but less powerful than IndexedDB.
    Stored data is only accessible from scripts on the same origin (domain, protocol, port).

 */