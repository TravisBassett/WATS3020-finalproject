// genderMChecked see is male radio button is checked and returned a bool value
// indication if the user is male. If male radio is not checked, user is assumed 
// to be female.
function genderMChecked() {
    var isChecked = document.getElementById("genderm").checked;
    return isChecked;
}

function getUserAge() {
 console.log('this doesn\'t do anything yet');
}

function searchRequest() {
    if (genderMChecked()){
        userGender = 'm';
    } else {
        userGender = 'f';
    };
    let userAge = getUserAge();
    console.log('search ran');
}

window.onload=function(){
document.getElementById("searchbtn").addEventListener("click", searchRequest());
}