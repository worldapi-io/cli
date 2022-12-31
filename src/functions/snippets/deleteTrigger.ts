import refs from "../../refs.js";
import getConfig from "../getConfig.js";
import * as fs from "fs/promises";

export default async function deleteTrigger(name: string) {
  const config = await getConfig();
  delete config.snippets[name];
  await fs.writeFile(`${refs.rootDir}/config.json`, JSON.stringify(config));
}
