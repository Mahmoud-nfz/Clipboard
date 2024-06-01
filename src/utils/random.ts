import { IdPrefixes } from "@/constants";
import { randomBytes } from "crypto";

export function generateRandomId(prefix: IdPrefixes): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  // Generate random bytes
  const randomBytesArray = randomBytes(4);

  // Convert each byte to a character from the characters string
  for (let i = 0; i < 4; i++) {
    const index = randomBytesArray[i] % charactersLength;
    result += characters[index];
  }

  return `${prefix}${result}`;
}
