import { mongodb } from "../../central.config";
import { forwardException } from "../forwardException";
import { Requests } from "../../types/Requests";

const db = mongodb.collection("presets");

export default async function registerPreset(): Promise<Requests.Preset | null> {
    try {
        const _construct: Requests.Preset = {

        }
    } catch (error) {
        await forwardException(error);
        return null;
    }

}
