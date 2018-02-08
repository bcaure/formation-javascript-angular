import { findById, find } from './book-service';

console.log(find({ sort: 'name', order: 'asc' }));
