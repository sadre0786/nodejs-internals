# Node.js Internals – Event Loop

## What I Learned
- What a thread is
- Why Node.js is single-threaded
- What event-driven architecture means
- How the event loop works

## Key Concept
Node.js does not block the main thread.  
Slow tasks run in the background and return results as events.

## Demo
The `event-loop-demo.js` file shows how Node.js executes code
without waiting for timers to finish.
