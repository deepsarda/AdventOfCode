import { file } from "./input";
import colors from "colors";
import { daynumber } from "./constants";

function match(s1: string, s2: string) {
  let duplicateCharacter = "";
  for (let i = 0; i < s1.length; i += 1)
    if (duplicateCharacter.indexOf(s1[i]) === -1)
      if (s2.indexOf(s1[i]) !== -1) duplicateCharacter += s1[i];

  return duplicateCharacter;
}
const charScore = (char: string): number =>
  char.charCodeAt(0) - (char.match(/[a-z]/) ? 96 : 38);

function getValue(s: string) {
  let sum = 0;
  const characters = s.split("");
  for (let i = 0; i < characters.length; i++) sum += charScore(characters[i]);
  return sum;
}

export function execute() {
  console.log(colors.green("Read input for") + ` day ${daynumber}`.yellow);
  const input = file.split("\r\n");
  let common = "";
  for (let i = 0; i < input.length; i++) {
    const s = input[i];
    const partOne = s.slice(0, s.length / 2);
    const partTwo = s.slice(s.length / 2, s.length);
    common += match(partOne, partTwo);
  }
  console.log(
    "The solution #1 is ".green + ` ${getValue(common)} points`.yellow
  );

  common = "";
  for (let i = 0; i < input.length; i = i + 3) {
    const s = input[i];
    const s1 = input[i + 1];
    const s2 = input[i + 2];
    common += match(s, match(s1, s2));
  }
  console.log(
    "The solution #2 is ".green + ` ${getValue(common)} points`.yellow
  );
}
