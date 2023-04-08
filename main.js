
const myArray = [
    {id:123,
    nameS :"Navid Khaleghi"},
    {id:123,
    nameS :"mahdia Khaleghi"},
    {id:1235,
        nameS :"Mohammad Khaleghi"},
    {id:1235,
    nameS :"Taiba Khaleghi"},
    {id:12369,
        nameS :"Abbas Khaleghi"},
    {id:1243,
    nameS :"Vahid Khaleghi"}
];
/// The note that some array methods dose not change our base array
///
///
const baseArry = ["a", "b", "b", "a", "c"];
textBarinfo = "the sellfish of the bar";
myArray.push({id:1235, nameS:"based User ID"});
myArray.pop();
myArray.shift();
myArray.unshift({id:123, nameS:"Navid Khaleghi"});
myArray.join("and");
console.log(myArray);
const item = myArray.slice(1);
console.log(myArray.includes( {id:1235,
    nameS :"Mohammad Khaleghi"}));