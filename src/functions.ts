import { SayHello } from './types';

export function sayHello({ name }: SayHello) {
  console.log(name + '+++ HELLO +++');
}
