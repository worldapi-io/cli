import { Logtail } from "@logtail/node";

let logtail: Logtail | null = null;

export const initLogtail = () => {
    if (!process.env.LOGTAIL_TOKEN) {
        throw new Error("LOGTAIL_TOKEN not set");
    }
    if (logtail) return logtail;
    logtail = new Logtail(process.env.LOGTAIL_TOKEN);
    return logtail;
}
