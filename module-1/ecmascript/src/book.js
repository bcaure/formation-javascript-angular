class Book {
  /**
   * @constructor
   * @param {Object} props - book properties
   * @param {number} props.id - book id
   * @param {string} props.name - book name
   * @param {string[]} props.authors - book authors
   * @param {string} props.releaseDate - book release date (ISO8601 formatted)
   * @param {number=} [props.precededById] - preceding book's id
   * @param {number=} [props.followedById] - following book's id
   */
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.authors = props.authors;
    this.releaseDate = new Date(props.releaseDate);
    this.precededById = props.precededById;
    this.followedById = props.followedById;
  }
}

export { Book };
