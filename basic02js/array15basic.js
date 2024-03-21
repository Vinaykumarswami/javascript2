const marval_heros=["thor","ironman","spiderman"];
const cd_heros=["spuerman","flash","batman"];
// marval_heros.push(cd_heros);
// console.log(marval_heros);
//  output :- [ 'thor', 'ironman', 'spiderman', [ 'spuerman', 'flash', 'batman' ] ]



// let newArray=marval_heros.concat(cd_heros);
// console.log(newArray);
// output:--[ 'thor', 'ironman', 'spiderman', 'spuerman', 'flash', 'batman' ]


console.log(Array.isArray("vinay"));
console.log(Array.from("vinay"));
console.log(Array.from({name:"vinay"}));//interesting


let score1=3000;
let score2=5000;
let scroe3=6000;
console.log(Array.of(score1,score2,scroe3));