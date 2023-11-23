
import { createConnection } from './connection.mjs';

const connection = await createConnection();

const channel = await connection.createChannel();

const queue = 'hello';

await channel.assertQueue(queue, { durable: false });

channel.sendToQueue(queue, Buffer.from('Hello World'));

await channel.close();
await connection.close();
