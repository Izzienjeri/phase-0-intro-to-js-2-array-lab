// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
  }
function destructivelyPrependCat(name) {
    cats.unshift(name);

}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function  destructivelyRemoveFirstCat() {
    cats.shift(name);
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  function prependCat(name){
    const newCats = [name, ...cats];
    return newCats;
  }
function removeLastCat(name) {
   const newArray = cats.slice(0,cats.length -1 );
    return newArray;
}
function removeFirstCat(name) {
    const newCats = cats.slice(1);
    return newCats;
  }



