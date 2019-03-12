// declares universal variables for user's age and gender
let userAge;
let userGender;

// JSON for unsorter shelter index, maybe load it from GitHub later
var unsortedShelters = [{
        "name": "Bread of Life Mission",
        "minage": 18,
        "genders": "m",
        "website": "https://www.breadoflifemission.org/"
    },
    {
        "name": "DESC – Main Shelter",
        "minage": 18,
        "genders": "mf",
        "website": "https://www.desc.org/what-we-do/survival-services/main-shelter/"
    },
    {
        "name": "Drexel House",
        "minage": 18,
        "genders": "m",
        "website": "https://ccsww.org/get-help/shelter-homeless-services/drexel-house"
    },
    {
        "name": "Hammond House",
        "minage": 18,
        "genders": "f",
        "website": "https://www.compasshousingalliance.org/what-we-do-top/emergency-shelter/hammond-house/"
    },
    {
        "name": "Mary’s Place",
        "minage": 18,
        "genders": "f",
        "website": "https://www.marysplaceseattle.org/shelters"
    },
    {
        "name": "Noel House Programs",
        "minage": 18,
        "genders": "f",
        "website": "https://ccsww.org/get-help/shelter-homeless-services/noel-house-programs/"
    },
    {
        "name": "Roots Young Adult Shelter",
        "minage": 18,
        "genders": "mf",
        "website": "http://www.rootsinfo.org/"
    },
    {
        "name": "St. Martin De Porres",
        "minage": 50,
        "genders": "m",
        "website": "https://ccsww.org/get-help/shelter-homeless-services/st-martin-de-porres-shelter/"
    },
    {
        "name": "Union Gospel Shelter",
        "minage": 18,
        "genders": "m",
        "website": "https://www.ugm.org/"
    }
];

// genderMChecked see is male radio button is checked and returned a bool value
// indication if the user is male. If male radio is not checked, user is assumed 
// to be female.
function getUserGender() {
    let isChecked = document.getElementById("genderm").checked;
    // determines users gender as 'm' or 'f' depending on bool values for check of genderm radio button
    if (isChecked === true) {
        userGender = 'm';
    } else {
        userGender = 'f';
    };
    return userGender;
}

// retrives users age
function getUserAge() {
    let foundAge = document.getElementById("ageselector").value;
    return foundAge;
}

// the main search funciton, retrieves user gender and age and determines matching shelter
function searchRequest() {
    userAge = getUserAge();
    userGender = getUserGender();
    // for testing
    console.log(userAge, userGender);
}

// applies event listener on search button after DOM is fully loaded to avoid console
// error
window.onload = function () {
    document.getElementById("searchbtn").addEventListener("click", searchRequest);
}