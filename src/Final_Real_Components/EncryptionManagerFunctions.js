//This file will have the Functions/Logics for Encryption of the Actual Files
//And the Functions will be Exported to Other Files from here

export const IVGeneration = ()=>
    {
        return window.crypto.getRandomValues(new Uint8Array(12)); 
    //This func generates a 96-Bit Initialisation Vector needed for File Encryption
    }

export async function encryptFile(actual_file, cryptoKeyObject) {
  const iv = IVGeneration(); //Generates the IV and stores in Js Var

  const fileBuffer = await actual_file.arrayBuffer(); // File to ArrayBuffer
//WebCryptoAPI handles files only after converting them to Binary Form i.e. BufferArrayForm

  const encryptedBuffer = await window.crypto.subtle.encrypt(
    { //Main encryption Logic
      name: 'AES-GCM',
      iv: iv
    },
    cryptoKeyObject, 
    fileBuffer
  );

  return { //An Object with 2 Keys is being returned...EncryptedContent, Secondly IV needed in Decryption
    encryptedBlob: new Blob([encryptedBuffer]), // Encrypted file content
    //"Blob" stands for "Binary Large Object"- used to deal with binary data and stores file-like data, easily nderstoood by WebCryptoAPI
    iv: Array.from(iv) // Convert Uint8Array(coz iv pehle humnei as BufferArray generate kiyaa tha) to plain array (easy for storage)
  };
}
//Is function dwara returned contents ko Parse krenge into an Object before uploading to Firebase