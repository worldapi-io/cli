import * as fs from "fs/promises";
import refs from "../refs.js";

interface Config {
  snippets: {
    [sname: string]: string;
  };
}

export default async function getConfig(): Promise<Config> {
  const configContent = await fs.readFile(
    `${refs.rootDir}/config.json`,
    "utf-8"
  );
  return JSON.parse(configContent);
}
