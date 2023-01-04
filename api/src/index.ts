import express from 'express';
import helmet from 'helmet';
import { logtail } from "./central.config";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, async () => logtail.info('Presets API listening on port 3000!'))
