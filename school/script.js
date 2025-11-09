function findSchool() {
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");

    if (age === "") {
        result.style.display = "block";
        result.innerHTML = "Please enter an age.";
        return;
    }

    age = Number(age);

    let stage;

    // Using Logical Operators && and ||
    if (age >= 0 && age <= 3) {
        stage = "Nursery / Early Years Foundation Stage (EYFS)";
    } 
    else if (age >= 4 && age <= 7) {
        stage = "Primary School (Key Stage 1)";
    } 
    else if (age >= 8 && age <= 11) {
        stage = "Primary School (Key Stage 2)";
    } 
    else if (age >= 12 && age <= 14) {
        stage = "Secondary School (Key Stage 3)";
    } 
    else if (age >= 15 && age <= 16) {
        stage = "Secondary School (GCSE - Key Stage 4)";
    } 
    else if ((age === 17 || age === 18) && age != 19) {
        stage = "Sixth Form / College (A-Levels / BTEC)";
    } 
    else if (age >= 19 && age <= 25) {
        stage = "University / Higher Education";
    } 
    else {
        stage = "Age not applicable for standard UK school stages.";
    }

    result.style.display = "block";
    result.innerHTML = `Recommended Stage: <br><strong>${stage}</strong>`;
}
