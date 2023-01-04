import express from 'express';
import { forwardException } from '../helpers/forwardException';
import { Requests } from '../types/Requests';

const register = express.Router();



register.post('/', async (req, res) => {
    try {
        const { email, gh_repo } = req.body as Requests.RegisterRequest;
        if (!email || !gh_repo) res.send({ accepted: false })
        const registrarKey = await registerPreset(email, gh_repo);

    } catch (error) {
        await forwardException(error)
    }
});
