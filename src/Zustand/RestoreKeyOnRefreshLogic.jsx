// restoreKeyFromSession.js
import { zustandKeyObjectStore } from './ZustadUid'

//This entire Logic is to be Encapsulated within a useEffect() that should be above all components in the hierarchy
//and is supposed to work when any component among all Refreshes/Re-Renders

export async function restoreKeyFromSession() {
  const base64Key = sessionStorage.getItem("userDerivedKey");
  if (!base64Key) return;

  try {
    // Decode base64 to Uint8Array
    const rawBytes = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0));

    // Import as a CryptoKey
    const key = await window.crypto.subtle.importKey(
      "raw",
      rawBytes,
      { name: "AES-GCM" },
      true,
      ["encrypt", "decrypt"]
    );

    // Set into Zustand
    zustandKeyObjectStore.getState().setCryptoKey(key);
    console.log("CryptoKey restored from sessionStorage and loaded into Zustand.");
  } catch (error) {
    console.error("Failed to restore CryptoKey from sessionStorage:", error);
  }
}
