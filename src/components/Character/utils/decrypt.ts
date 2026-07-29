async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch encrypted model: ${response.status} ${response.statusText}`);
  }
  const encryptedData = await response.arrayBuffer();
  if (encryptedData.byteLength < 16) {
    throw new Error(`Encrypted file too small (${encryptedData.byteLength} bytes) — likely corrupt or missing`);
  }
  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);
  try {
    return await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
  } catch (e) {
    throw new Error(`AES decryption failed — wrong password or corrupt file: ${e}`);
  }
};
