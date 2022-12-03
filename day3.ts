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
function getValue(s: string) {
  let sum = 0;
  const characters = s.split("");
  for (let i = 0; i < characters.length; i++) {
    const c = characters[i].toLowerCase();
    if (c == "a") sum += 1;
    else if (c == "b") sum += 2;
    else if (c == "c") sum += 3;
    else if (c == "d") sum += 4;
    else if (c == "e") sum += 5;
    else if (c == "f") sum += 6;
    else if (c == "g") sum += 7;
    else if (c == "h") sum += 8;
    else if (c == "i") sum += 9;
    else if (c == "j") sum += 10;
    else if (c == "k") sum += 11;
    else if (c == "l") sum += 12;
    else if (c == "m") sum += 13;
    else if (c == "n") sum += 14;
    else if (c == "o") sum += 15;
    else if (c == "p") sum += 16;
    else if (c == "q") sum += 17;
    else if (c == "r") sum += 18;
    else if (c == "s") sum += 19;
    else if (c == "t") sum += 20;
    else if (c == "u") sum += 21;
    else if (c == "v") sum += 22;
    else if (c == "w") sum += 23;
    else if (c == "x") sum += 24;
    else if (c == "y") sum += 25;
    else if (c == "z") sum += 26;

    if (c != characters[i]) sum += 26;
  }
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
