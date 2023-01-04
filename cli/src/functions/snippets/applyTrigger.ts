import * as fs from "fs/promises";
import refs from "../../refs.js";
import getConfig from "../getConfig.js";

export default async function applyTrigger(name: string, trigger: string) {
  let config = await getConfig();
  config = { ...config, snippets: { ...config.snippets, [name]: trigger } };
  await fs.writeFile(
    `${refs.rootDir}/config.json`,
    JSON.stringify(config, null, 4)
  );
}
