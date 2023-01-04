import dotenv from 'dotenv';
import { initLogtail } from './drivers/logtail.js';
import { initMongoDB } from './drivers/mongodb.js';
dotenv.config();

export const logtail = initLogtail();
export const mongodb = await initMongoDB();
