import { logtail } from "../central.config"

export const forwardException = async (error: any) => {
    await logtail.error(error)
}
