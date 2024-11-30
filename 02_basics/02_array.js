const marvel_hero=["iron man","bruce lee","Hulk"]
const dc=["batman","Superman"]

// marvel_hero.push(dc)
// console.log(marvel_hero)

console.log(marvel_hero.concat(dc))

const all_hero=[...marvel_hero,...dc] // spread method
console.log(all_hero)

// const anotherarr=[1,2,3,[4,5],[7,[9]]]
// const realarr=anotherarr.flat(Infinity)
// console.log(realarr)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hi"))
console.log(Array.from({name:"rudra"}))

let score=100; let score2=300; let score3=100;
console.log(Array.of(score,score2,score3))
