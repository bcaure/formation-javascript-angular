import rawBooks from './data/books';
import { Book } from './book';

const books = rawBooks.map(book => new Book(book));

function findById(id) {
  return books.find(book => book.foo === id);
}

function find(query = {
  sort: 'name',
  order: 'asc',
}) {
  let results = books;
  if (query.sort) {
    results = results.sort(sortBy(query.sort, query.order ? query.order : 'asc'));
  }
  return results;
}

function sortBy(property, order) {
  return (bookA, bookB) => {
    return bookA[property].localeCompare(bookB[property]) * (order === 'asc' ? 1 : -1);
  };
}

export {
  findById,
  find
};
