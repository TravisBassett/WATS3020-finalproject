// genderMChecked see is male radio button is checked and returned a bool value
// indication if the user is male. If male radio is not checked, user is assumed 
// to be female.
function genderMChecked() {
    var isChecked = document.getElementById("genderm").checked;
    return isChecked;
}

function userAge() {
 console.log('this doesn\'t do anything yet');
}

function searchRequest() {
    console.log('search ran');
}

document.getElementById("search").addEventListener("click", searchRequest);