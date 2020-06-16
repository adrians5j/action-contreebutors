const core = require("@actions/core");
const { context } = require("@actions/github");
import { Contreebutors } from "contreebutors";
import extractCommits from "./extractCommits";

async function run() {
    core.info(`ℹ️ Checking for new contributors...`);

    const extractedCommits = await extractCommits(context);
    if (extractedCommits.length === 0) {
        core.info(`No commits to check, skipping...`);
        return;
    }

    console.log('dobeo commitove', JSON.stringify(extractedCommits, null, 2))
    const contreebutors = new Contreebutors();

    for (let i = 0; i < extractedCommits.length; i++) {
        let commit = extractedCommits[i];
        await contreebutors.add({ username: "kobaja" });
        /*if (isValidCommitMessage(commit.message)) {
            core.info(`✅ ${commit.message}`);
        } else {
            core.info(`🚩 ${commit.message}`);
            hasErrors = true;
        }*/
    }

    core.info("🎉 Done.");
}

run();
