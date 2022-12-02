import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.List;

public class Day2 {

    public static String formatOpponentChoice(String oppChoice) {
        switch (oppChoice) {
            case "A":
                return "rock";
            case "B":
                return "paper";
            default:
                return "scissors";
        }
    }

    public static String formatYourChoice(String oppChoice) {
        switch (oppChoice) {
            case "X":
                return "rock";
            case "Y":
                return "paper";
            default:
                return "scissors";
        }
    }

    public static String formatYourChoice2(String oppChoice) {
        switch (oppChoice) {
            case "X":
                return "lose";
            case "Y":
                return "draw";
            default:
                return "win";
        }
    }

    public static void main(String[] args) throws Exception {
        List<String> lines = Files.readAllLines(Paths.get("input2.txt"));
        int score = 0;
        int score2 = 0;

        for (int i = 0; i < lines.size(); i++) {
            String line = lines.get(i).trim();
            String oppChoice = formatOpponentChoice(line.split(" ")[0]);
            String yourChoice = formatYourChoice(line.split(" ")[1]);
            String yourChoice2 = formatYourChoice2(line.split(" ")[1]);
            switch (oppChoice) {
                case "rock":
                    if (yourChoice == "rock")
                        score += 3 + 1;
                    else if (yourChoice == "paper")
                        score += 6 + 2;
                    else
                        score += 0 + 3;

                    if (yourChoice2 == "draw")
                        score2 += 3 + 1;
                    else if (yourChoice2 == "win")
                        score2 += 6 + 2;
                    else
                        score2 += 0 + 3;

                    break;
                case "paper":
                    if (yourChoice == "rock")
                        score += 0 + 1;
                    else if (yourChoice == "paper")
                        score += 3 + 2;
                    else
                        score += 6 + 3;

                    if (yourChoice2 == "lose")
                        score2 += 0 + 1;
                    else if (yourChoice2 == "draw")
                        score2 += 3 + 2;
                    else
                        score2 += 6 + 3;
                    break;

                case "scissors":
                    if (yourChoice == "rock")
                        score += 6 + 1;
                    else if (yourChoice == "paper")
                        score += 0 + 2;
                    else
                        score += 3 + 3;

                    if (yourChoice2 == "win")
                        score2 += 6 + 1;
                    else if (yourChoice2 == "lose")
                        score2 += 0 + 2;
                    else
                        score2 += 3 + 3;
                    break;
            }
        }

        System.out.println("Score: " + score);
        System.out.println("Score2: " + score2);
    }
}