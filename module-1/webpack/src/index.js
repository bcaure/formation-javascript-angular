import add from './awesome-lib'
import { add as namedImport, boom } from './awesome-lib';

console.log(add(1, 2));
console.log(namedImport(1, 3));
console.log(boom());
