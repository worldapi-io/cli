import fs from 'fs/promises';

export default async function (query: string, file: string) {
    try {
        const fileContents = await fs.readFile(file, 'utf-8');
        const lines = fileContents.split('\n');
        const results = lines.filter(line => line.includes(query));
        if (results.length === 0) return
        console.log(`${file} ${results.length} Occurrences`);

    } catch (error) {
        console.error('[WorldAPI]: An error occurred while querying the file system.');

    }
}
