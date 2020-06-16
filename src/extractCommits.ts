const get = require("lodash.get");

type Commit = {
    message: string;
};

const extractCommits = async (context): Promise<Commit[]> => {
    // For "push" events, commits can be found in the "context.payload.commits".
    const pushCommits = Array.isArray(get(context, "payload.commits"));
    if (pushCommits) {
        return context.payload.commits;
    }
};

export default extractCommits;
