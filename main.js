let myObject = {
    //key:value
    length: 2,
    includes: function () {
    console.log("Hello from method!");
}
};



// OLIKA SÄTT ATT DEFINIERA FUNKTIONER PÅ
let myFunction2 = function (x) {
console.log(x);
};
let myFunction3 = (x) => {
console.log(x);
};
let myFunction4 = (x) => x + 2;

// TESTA KÖRA FUNKTIONERNA NEDAN
// myFunction("Mitt argument");
// myFunction2("Här kommer X");
// myFunction3("Hej från arrow function!");
// console.log(myFunction4(4));


  //    ARRAY-METODER
let myArray = ["Hej", 2, false, "Bamse"];

//              Foreach-metod
let brandonsArray = [];
myArray.forEach((item) => {
    brandonsArray.push(item);
});
console.log("brandonsarray", brandonsArray);

//            Map-metod

let newArray = myArray.map((item) => {
    return item + 2
})

  //            Filter-metod
let arrayOfNumbers = [1,6,9,11,20,25];
let filteredArray = myArray.filter(item => {
    return item<10
})


// FILTER EXEMPEL
let queue = [20,25,35,54,16,18,42];

let popularClub = queue.filter(personAge => {
    return personAge > 23
})

// Reduce-metod

let startArray = [1,2,5,8,10];

let reducedArray = startArray.reduce((total,newValue) => {
    return total*newValue
})

// FUNKTION FÖR ATT RÄTTA PROV

let gradeTest = (studentPoints, passingPoints) => {
//returnera en boolean för om en elev blev godkänd eller inte.
    return studentPoints >= passingPoints
}

// VI LOOPAR IGENOM SAMTLIGA RESULTAT OCH KÖR RÄTTNINGS-FUNKTIONEN
let testPoints = [98,57,23,30,60,75];

let studentResults = testPoints.map(points => {
    return gradeTest(points,65);
});

let studentResults2 = [false,true,false,true,true];

// FUNKTION FÖR ATT TA REDO PÅ OM MAJORITETEN BLEV GODKÄNDA

let didMostPass = (arr) => {
    let passed = 0;
    let failed = 0;
    arr.forEach(item => {
        if (item === true){
            passed++;
        } else {
            failed++
        }
    })
    if(passed > failed){
        return "Most students passed!"
    } else {
        return "Most students failed :("
    }
}

console.log(didMostPass(studentResults))