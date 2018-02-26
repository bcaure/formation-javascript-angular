function add(a, b) {
  return a + b;
}

function boom() {
  const character = {
    name: 'Jon Snow',
    titles: ['Lord Commander of the Night\'s Watch', 'King in the North']
  };

  return character.tit1es.join(' ');
}

export {
  add,
  boom
};

export default add;
