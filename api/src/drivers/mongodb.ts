import mongodb from 'mongodb';
import { logtail } from '../central.config';
let client: mongodb.MongoClient;

export const initMongoDB = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined');
    }
    if (client) return client.db('@worldapi_presets_marketplace');
    client = await mongodb.MongoClient.connect(process.env.MONGODB_URI).then(async (mongo) => { await logtail.info('Mongo Cluster Initialized'); return mongo })
    return client.db('@worldapi_presets_marketplace');
}
