// export default function getNeighborhoodsList() {
//   this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

//   const self = this;
//   this.addNeighborhood = function add(newNeighborhood) {
//     self.sanFranciscoNeighborhoods.push(newNeighborhood);
//     return self.sanFranciscoNeighborhoods;
//   };
// }
// Re-write add() as an anonymous arrow function
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}