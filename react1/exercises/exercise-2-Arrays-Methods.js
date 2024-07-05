function transformToObjects(numberArray) {
    return numberArray.map((num)=>
    {
        return {val:num};
    });
    

}
const xyz = [1, 2, 3];
const obj=transformToObjects(xyz);
console.log(obj);

// //output
// [ { val: 1 }, { val: 2 }, { val: 3 } ]