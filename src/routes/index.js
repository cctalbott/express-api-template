import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', indexPage);
// add the get messages endpoint
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);

export default indexRouter;
