function removeEveryOther(arr){
return arr.filter((_,index)=> index % 2 ===0);
}
const input =["Keep", "Remove", "Keep", "Remove", "Keep"];
const result = removeEveryOther(input);
console.log(result);

//egide