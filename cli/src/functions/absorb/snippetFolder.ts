import * as fs from "fs/promises";
import createSnippet from "../../actions/snippets/create.js";

export default async function absorbSnippetFolder(path: string) {
    const snippets = await fs.readdir(`${path}/snippets`);
    snippets.forEach(async (snippet) =>
        createSnippet(snippet.split(".")[0], { file: `${path}/snippets/${snippet}` })
    );
}
