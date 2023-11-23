import amqp from 'amqplib';

export const createConnection = () => 
  amqp.connect('amqp://localhost');

