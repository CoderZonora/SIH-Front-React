export const convertFromASCII = (
  ascii: string,
  setBinary: (value: string) => void,
  setHex: (value: string) => void
) => {
  const binary = asciiToBinary(ascii);
  const hex = asciiToHex(ascii);
  setBinary(binary);
  setHex(hex);
};

export const convertFromBinary = (
  binary: string,
  setAscii: (value: string) => void,
  setHex: (value: string) => void
) => {
  const ascii = binaryToASCII(binary);
  const hex = asciiToHex(ascii);
  setAscii(ascii);
  setHex(hex);
};

export const convertFromHex = (
  hex: string,
  setAscii: (value: string) => void,
  setBinary: (value: string) => void
) => {
  const ascii = hexToASCII(hex);
  const binary = asciiToBinary(ascii);
  setAscii(ascii);
  setBinary(binary);
};

const asciiToBinary = (str: string): string => {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
};

const binaryToASCII = (str: string): string => {
  return str
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
};

const asciiToHex = (str: string): string => {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
    .join(" ");
};

const hexToASCII = (str: string): string => {
  return str
    .split(" ")
    .map((hex) => String.fromCharCode(parseInt(hex, 16)))
    .join("");
};
