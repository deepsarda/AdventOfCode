import { file } from "./input";
import colors from "colors";
import { daynumber } from "./constants";

export function execute() {
  console.log(colors.green("Read input for") + ` day ${daynumber}`.yellow);

  const elves = file.split("\r\n\r\n");
  const caloriesTotal = [];
  for (let i = 0; i < elves.length; i++) {
    const items = elves[i].split("\r\n").map((item) => Number.parseInt(item));
    let calories = 0;

    items.forEach((item) => (calories += item));
    caloriesTotal.push(calories);
  }

  caloriesTotal.sort((a, b) => b - a);

  const top3 = caloriesTotal[0] + caloriesTotal[1] + caloriesTotal[2];
  console.log(
    "Highest calories is".green + ` ${caloriesTotal[0]} calories`.yellow
  );

  console.log("Sum of Top 3 calories is".green + ` ${top3} calories`.yellow);
}
