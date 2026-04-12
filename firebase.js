import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
// Use initializeFirestore with aggressive settings to bypass network issues
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  experimentalAutoDetectLongPolling: false, // Force it
  useFetchStreams: false, // Sometimes helps with proxies
}, firebaseConfig.firestoreDatabaseId);

// Use standard getAuth but set persistence explicitly
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(err => {
    console.error("Error setting persistence:", err);
});

if (!auth) {
    console.error("CRITICAL: Firebase Auth failed to initialize!");
}

export { serverTimestamp };

// CRITICAL CONSTRAINT: Test connection to Firestore on boot
async function testConnection() {
  try {
    // Try to get a non-existent doc from a system collection to test connectivity
    await getDocFromServer(doc(db, '_system_', 'connection-test'));
    console.log("Firestore connection test successful.");
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Firestore Error: The client is offline. Please check your network or ad blocker settings.");
    } else {
      // Other errors are expected (e.g. permission denied for _system_ collection)
      // but they still confirm that the backend was REACHED.
      console.log("Firestore backend reached (test completed).");
    }
  }
}
testConnection();

export const signInWithEmail = async (email, password) => {
  try {
    console.log("Attempting Email sign in...");
    if (!auth) {
        console.error("Auth is not defined!");
        throw new Error("Auth is not defined!");
    }
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Email. Code:", error.code, "Message:", error.message);
    throw error;
  }
};

export const signUpWithEmail = async (email, password) => {
  try {
    console.log("Attempting Email sign up...");
    if (!auth) {
        console.error("Auth is not defined!");
        throw new Error("Auth is not defined!");
    }
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Error signing up with Email. Code:", error.code, "Message:", error.message);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
};
