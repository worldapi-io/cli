export default function (paths: string[]) {

    let obj = {}

    function parsePath(str: string) {
        //get params
        let folders = str.split('/')
        const file = folders.pop() as string
        //remove any trailing /
        const sanitized = folders.filter((item) => item !== '' && item !== '.')
        // prevents obj override
        let entry = obj
        sanitized.forEach((item) => {
            //create properties in object
            if (!Object.keys(entry).includes('folders')) {
                Object.assign(entry, { folders: {} })
            }
            if (!Object.keys(entry['folders' as keyof typeof entry]).includes(item)) {
                const _o = entry['folders' as keyof typeof entry] as object
                Object.assign(entry, { folders: { [item]: {}, ..._o } })
            }
            //finalize file location
            entry = entry['folders' as keyof typeof entry][item]

        })
        // create and assign file string to path
        if (!Object.keys(entry).includes('files')) {
            Object.assign(entry, { files: [file] })
        } else {
            const _f = entry['files' as keyof typeof entry] as string[]
            if (_f.includes(file)) return
            Object.assign(entry, { files: [file, ..._f] })
        }
    }

    paths.forEach(async (item) => await parsePath(item))
    return obj

}
