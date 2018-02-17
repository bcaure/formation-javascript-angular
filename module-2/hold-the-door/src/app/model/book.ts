class Book {
  id: number;
  name: string;
  authors: string[];
  releaseDate: Date;
  
  /**
   * @constructor
   * @param {Object} props - book properties
   * @param {number} props.id - book id
   * @param {string} props.name - book name
   * @param {string[]} props.authors - book authors
   * @param {string} props.releaseDate - book release date (ISO8601 formatted)
   */
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.authors = props.authors;
    this.releaseDate = new Date(props.releaseDate);
  }
}

export { Book };
