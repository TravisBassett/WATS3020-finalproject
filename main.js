// declares universal variables for user's age and gender
let userAge;
let userGender;

// genderMChecked see is male radio button is checked and returned a bool value
// indication if the user is male. If male radio is not checked, user is assumed 
// to be female.
function genderMChecked() {
    let isChecked = document.getElementById("genderm").checked;
    return isChecked;
}

// retrives users age
function getUserAge() {
    let foundAge = document.getElementById("ageselector").value;
    return foundAge;
}

// the main search funciton, retrieves user gender and age and determines matching shelter
function searchRequest() {
    // determines users gender as 'm' or 'f' depending on bool values for check of genderm radio button
    if (genderMChecked() === true) {
        userGender = 'm';
    } else {
        userGender = 'f';
    };
    userAge = getUserAge();
    // for testing
    console.log(userAge, userGender);
}

// applies event listener on search button after DOM is fully loaded to avoid console
// error
window.onload = function () {
    document.getElementById("searchbtn").addEventListener("click", searchRequest());
}