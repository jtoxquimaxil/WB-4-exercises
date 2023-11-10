"use script";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

// outer loop will loop from one student to the next 

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let total = 0;

    // inner loop will have to loop over a particular students scores

    for (let s = 0; s < student.scores.length; s++) {
    total += student.scores[s]; 
    }
    // add them up and then divide by the number of scores

    let average = total / student.scores.length;

    console.log(`${student.name}'s average score is ${average}`)

}



