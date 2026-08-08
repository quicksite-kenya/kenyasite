import { serverTimestamp } from "firebase/firestore";
console.log(JSON.stringify({ createdAt: serverTimestamp() }));
