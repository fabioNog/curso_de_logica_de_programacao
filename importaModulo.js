import {foo, baz} from './A.js';

const A = require('./moduloexemplo.js');
const foo = A.foo;
const baz = A.baz;

// sintaxe ES6
import * as A from './A.js';
const foo = A.foo;
const baz = A.baz;

// ou somente
