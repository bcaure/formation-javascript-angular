import { findById, find } from './book-service';

console.log(findById(1));
console.log(find({ sort: 'name', order: 'asc' }));
