// genderMChecked see is male radio button is checked and returned a bool value
// indication if the user is male. If male radio is not checked, user is assumed 
// to be female.
function genderMChecked() {
    var isChecked = document.getElementById("genderm").checked;
    return isChecked;
}

// retries users age
function getUserAge() {
    console.log('this doesn\'t do anything yet');
}

// the main search funciton, retrieves user gender and age and determines matching shelter
function searchRequest() {
    if (genderMChecked()) {
        userGender = 'm';
    } else {
        userGender = 'f';
    };
    let userAge = getUserAge();
    console.log('search ran');
}

// applies event listener on search button after DOM is fully loaded to avoid console
// error
window.onload = function () {
    document.getElementById("searchbtn").addEventListener("click", searchRequest());
}