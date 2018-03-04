class Character {

  id: number;
  name: string;
  isFemale: boolean;
  house: number;
  aliases: string[];
  books: number[];

  /**
   * @constructor
   * @param {Object} props - character properties
   * @param {number} id - character id
   * @param {string} name - character name
   * @param {boolean} isFemale - character gender indicator
   * @param {number} [house] - character's house id
   * @param {number[]} books - books ids where character made an appearance
   */
  constructor(props) {
    if(props != null) {
      this.id = props.id;
      this.name = props.name;
      this.isFemale = props.isFemale;
      this.house = props.house;
      this.books = props.books;
    }
  }
}

export { Character };
