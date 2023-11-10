"use strict";


function displayPart(part){
    console.log(part.partCode);
    console.log(part.supplierCode);
    console.log(part.partSize);
}


let partCode1 = "XYZ:1234-L";

let part1 = parsePartCode(partCode1);

displayPart(part1);


