// From 0 ~ 1        year: Beginner
// From 1 ~ 3       years: Intermediate
// From 3 ~ 6       years: Advanced
// From 7 years and above: Jedi Master


function experience(age) {
    console.log(age);

    if (age <= 1) {
        console.log("Beginner");
    } else if (age > 1 && age <= 3) {
        console.log("Intermedate");
    } else if (age > 3 && age <= 6) {
        console.log("Advanced");
    } else if (age >= 7) {
        console.log("Jedi Master");
    }   else {
        console.log("Error");
    }
}

var yearsOfStudy = 8;

