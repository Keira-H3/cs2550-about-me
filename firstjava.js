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


let re = new RegExp("ab", "i");
//let re = /ab/i;
let mytext = "hello";
re.test(mytext);

let words = ["ban", "babble", "make", "flab"];
for (w of words) {
    if (re.test(w)) {
        console.log(w + " matches.")
    }
}

let text = "Is this all there is?";
re = /^Is/;
re = /is\?$/;
re = /t.*e/i;
re = /t.?e/i;
re = /t.+e/i;
re = /t.e/i;
re = /t\We/i;
re = /[^t]h|e/i;
re = /a-e/i;
re.test(text);



let myRe = /ab*/g;
let str = "abbcdefabh";
//myRe.exec(str);
//myRe.exec(str);
let myarray = myRe.exec(str);
while (myarray != null) {
    console.log(`Found ${myarray[0]}`);
    myarray = myRe.exec(str);
}





let reEvent = /(B.+)'s (.+day)/;
let eventStr = "When is Becky's birthday";

let result = re.exec(eventStr);
console.log(result);
console.log(`Who's event? ${result[1]}`);
console.log(`What event? ${result[2]}`);


//\(\d{3}\)\d{3}-\d{4}
let rePhone = /\(\d{3}\)/;
let myPhone = "mobile phone: (801)863-8000";

