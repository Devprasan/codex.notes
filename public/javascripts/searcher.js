/**
 * Class for searching through notes
 */
export default class Searcher {

  /**
   * @constructor
   */
  constructor() {
    this.DOM = {
      parent: null,
      serchField: null
    };

    /**
     * Where to search
     * @type {Array}
     */
    this.dataset = null;
  }

  /**
   * Set data where search will be done
   * @param {Array} data - array to set
   */
  set data( data ) {
    this.dataset = data;
  }

  /**
   * Set data where search will be done
   * @param {Array} data - array to set
   */
  search( item ) {
    let found = [];

    this.dataset.forEach((element) => {
      if (element.indexOf(item) == 0)      {
        found.push(element);
      }
    });

    return found;
  }

}
