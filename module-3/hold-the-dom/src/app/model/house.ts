import { Character } from './character';

class House {

  id: number;
  name: string;
  characters: Character[];

  /**
   * @constructor
   * @param {Object} props - house properties
   * @param {number} id - house id
   * @param {string} name - house name
   */
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
  }
}

export { House };
