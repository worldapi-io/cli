import { Probot } from "probot";
import { forwardException } from "../general/forwardException.js";

export default async function (app: Probot) {
    try {
        app.on("installation.created", newInstallation);
        app.on("installation.deleted", removedInstallation);
        app.on("installation_repositories.added", newInstallation);
        app.on("installation_repositories.removed", removedInstallation);
    } catch (error) {
        await forwardException(error);
    }
}
