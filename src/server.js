import { router, setQueues } from 'bull-board';
import 'dotenv/config';
import express from 'express';
import { userController } from './app/controllers/user-controller';
import Queue from './app/lib/queue';
const app = express();

app.use(express.json());
setQueues(Queue.queues.map((queue) => queue.bull));

app.post('/users', userController.store);
app.use('/admin/queues', router);

app.listen(3333, () => console.log('Server running on localhost:3333'));
