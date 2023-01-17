
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
  	matrix.forEach((element, index) => {
            if (index % 2) {
                element.reverse();
            }
        });
        return  matrix.flat(1)
    }
}
