import { createConnection } from './connection.mjs';

const connection = await createConnection();

const channel = await connection.createChannel();

const queue = 'hello';

await channel.assertQueue(queue, { durable: false });

channel.consume(
  queue, 
  (message) => console.log('[x] received %s', message.content.toString()),
  { noAck: true },
);
