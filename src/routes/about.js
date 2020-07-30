import express from 'express';
import { aboutPage } from '../controllers/about';

const aboutRouter = express.Router();

/* GET about page. */
aboutRouter.get('/about', aboutPage);

export default aboutRouter;
