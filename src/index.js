
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }else {  
    let x=[];
    for(let i = 0; i < matrix.length; i++){
      if (i==0||i%2==0){
        x=x.concat(matrix[i]);
      } else {
        let y = matrix[i].reverse();
        x=x.concat(y);
      } 
    }return x;
  }  
}
