import * as fs from "fs/promises";
import * as os from "os";
import refs from "../refs.js";

//checks for proper configuration existance in order to run the program
export const checkProperConfiguration = async () => {
  const homedir = await fs.readdir(os.homedir());
  if (!homedir.includes(".worldapi")) {
    await fs.mkdir(`${os.homedir()}/.worldapi`);
    await fs.writeFile(`${os.homedir()}/.worldapi/config.json`, "{}");
    return;
  }
  const rdir = await fs.readdir(refs.rootDir);
  if (!rdir.includes("config.json"))
    await fs.writeFile(`${refs.rootDir}/config.json`, "{}");
};
