import rawBooks from './data/books';
import { Book } from './book';

const books = rawBooks.map(book => new Book(book));

function findById(id) {
  return books.find(book => book.id === id);
}

function find(query = {
  sort: 'name',
  order: 'asc',
}) {
  let results = books;
  if (query.name) {
    results = results.filter(filterBy('name', query.name));
  }
  if (query.sort) {
    results = results.sort(sortBy(query.sort, query.order ? query.order : 'asc'));
  }
  return results;
}

function filterBy(property, value) {
  return book => book[property] === value;
}

function sortBy(property, order) {
  return (bookA, bookB) => {
    return bookA[property].localeCompare(bookB[property]) * (order === 'asc' ? 1 : -1);
  }
}

export {
  findById,
  find
}
