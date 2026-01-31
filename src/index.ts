import { getQuest } from "./parallel/quests";

async function main() {
  const quest = getQuest();
  console.log("Quest loaded:", quest);
}

main();
