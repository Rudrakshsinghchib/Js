const arr=[0,1,2,3,4,5]
const heros=["shakti","hama","dana",1,true]
// console.log(heros)

const myarr=new Array(1,2,3,4)

// array methods

arr.push(7)
arr.pop()
// console.log(arr)

arr.unshift(8)
arr.shift()
// console.log(arr)

// console.log(arr.includes(3))
// console.log(arr.indexOf(1
// ))

const newarr=arr.join()
console.log(newarr)

// slice, splice
console.log("A", arr)
const myn1=arr.slice(1,3);
console.log(myn1)
console.log("B",arr)


console.log("A", arr)
const myn2=arr.splice(1,3);
console.log(myn2)
console.log("B",arr)