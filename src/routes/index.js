import express from 'express';
import { indexPage } from '../controllers';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', indexPage);

export default indexRouter;
