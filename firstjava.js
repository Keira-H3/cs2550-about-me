let a = [5, 2, 7, 4, 1];
console.log(a[2]);

a.push(3);
console.log(a);
let x = a.pop();
console.log(a);
a.unshift(3);
a.shift(a);
//array.splice(startingindex, numofElem2del, [values2add...])

function funcname(a, b, c) {
    return a;
}

console.log(funcname(1,2,3));
let numcomp = function(a,b) {
    return a-b;
}
let lencomp = function(a,b) {
    return a.length - b.length;
}
//a.sort(numcomp);
a.sort(function(a,b) {
    return a-b;
})
console.log(a)
let book = {}
book = {
    title: "the title",
    publish: 2011,
    keywords: "keywordss",
    name: "name",
    get name() {
        return this.book.name;
    }
};
console.log(book);
console.log(book.name)
