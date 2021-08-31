
function getRandomColor() {
  const colorsArr = [
    '#ff4d4f',
    '#36cfc9',
    '#ff7a45',
    '#40a9ff',
    '#ffa940',
    '#73d13d',
    '#ffc53d',
    '#597ef7',
    '#ffec3d',
    '#bae637',
    '#9254de',
    '#f759ab',
  ];
  let index = Math.round(Math.random()*11+1);
  return colorsArr[index-1]
}
export {
  getRandomColor
}