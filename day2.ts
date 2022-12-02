import { file } from "./input";
import colors from "colors";
import { daynumber } from "./constants";

function getValueForSymbol(symbol: string) {
  switch (symbol) {
    case "A":
      return "rock";
    case "B":
      return "paper";
    case "C":
      return "scissors";
    case "Y":
      return "rock";
    case "X":
      return "paper";
    case "Z":
      return "scissors";
  }

  return "";
}

function getValueForSymbol2(symbol: string) {
  switch (symbol) {
    case "A":
      return "rock";
    case "B":
      return "paper";
    case "C":
      return "scissors";
    case "Y":
      return "draw";
    case "X":
      return "lose";
    case "Z":
      return "win";
  }

  return "";
}

function getOutcomeScore(p: string, o: string) {
  if (o == "rock") {
    if (p == "rock") return 3 + 1;
    else if (p == "paper") return 6 + 2;
    else return 0 + 3;
  } else if (o == "paper") {
    if (p == "paper") return 3 + 2;
    else if (p == "scissors") return 6 + 3;
    else return 0 + 1;
  } else {
    if (p == "scissors") return 3 + 3;
    else if (p == "rock") return 6 + 1;
    else return 0 + 2;
  }
}

function getOutcomeScore2(p: string, o: string) {
  if (o == "rock") {
    if (p == "draw") return 3 + 1;
    else if (p == "win") return 6 + 2;
    else return 0 + 3;
  } else if (o == "paper") {
    if (p == "draw") return 3 + 2;
    else if (p == "win") return 6 + 3;
    else return 0 + 1;
  } else {
    if (p == "draw") return 3 + 3;
    else if (p == "win") return 6 + 1;
    else return 0 + 2;
  }
}

function calculate(input: string) {
  return input.split("\n").map((line) => {
    const symbols = line.trim().split(" ");

    const [oppChoice, playerChoice] = symbols.map((symbol) =>
      getValueForSymbol(symbol)
    );
    const [, needOutcome] = symbols.map((symbol) => getValueForSymbol2(symbol));

    return {
      outcome: getOutcomeScore(playerChoice, oppChoice),
      aleternativeOutcome: getOutcomeScore2(needOutcome, oppChoice),
    };
  });
}

export function execute() {
  console.log(colors.green("Read input for") + ` day ${daynumber}`.yellow);
  const strategyGuide = calculate(file);

  let totalScore = strategyGuide.reduce((acc, item) => acc + item.outcome, 0);

  console.log("The solution #1 is ".green + ` ${totalScore} points`.yellow);

  totalScore = strategyGuide.reduce(
    (acc, item) => acc + item.aleternativeOutcome,
    0
  );

  console.log("The solution #2 is ".green + ` ${totalScore} points`.yellow);
}
