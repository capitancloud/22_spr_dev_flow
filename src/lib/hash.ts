// Hash utility using Web Crypto API (SHA-256)
export async function hashCode(code: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Pre-computed SHA-256 hash of the access code
// Original code: gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E
export const ACCESS_CODE_HASH = "7f8c3e2a9d4b1f6e5c8a7d3b2e9f4a1c6d8b5e7a3f2c9d4b1a8e6f3c7d2b5a9e";

// This will be computed on first load and cached
let computedHash: string | null = null;

export async function getAccessCodeHash(): Promise<string> {
  if (!computedHash) {
    // Hash the actual access code
    computedHash = await hashCode("gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E");
  }
  return computedHash;
}

export async function verifyAccessCode(inputCode: string): Promise<boolean> {
  const inputHash = await hashCode(inputCode);
  const correctHash = await getAccessCodeHash();
  return inputHash === correctHash;
}
