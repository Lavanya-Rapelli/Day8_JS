// Nested loops 
// for (let i = 1; i <= 10; i++) {
//     let row = '';
//     for (let j = 1; j <= 10; j++) {
//       row += (i * j) + '\t';
//     }
//     console.log(row);
//   }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
//     }
//   }

const colors = ['red', 'green', 'blue'];
const shapes = ['circle', 'square', 'triangle'];

for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < shapes.length; j++) {
    console.log(`${colors[i]} ${shapes[j]}`);
  }
}