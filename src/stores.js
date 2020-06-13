import { writable } from 'svelte/store';


// the next.js demo uses a store to store password, but I'd rather not store the password in the store
// we store this info in a server session instead

// export const user = writable({
//   email: '',
//   error: '',
// });
