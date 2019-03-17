    // applies JS after DOM is fully loaded to avoid errors
    document.addEventListener("DOMContentLoaded", function (event) {

        // declares universal variables for user's age and gender and an array to
        // store sortedShelters
        let userAge;
        let userGender;
        let sortedShelters = [];

        // unsorted shelted index, maybe load it from GitHub as a JSON object later
        const unsortedShelters = [{
                name: "Bread of Life Mission",
                minage: 18,
                genders: "m",
                website: "https://www.breadoflifemission.org/"
            },
            {
                name: "DESC – Main Shelter",
                minage: 18,
                genders: "mf",
                website: "https://www.desc.org/what-we-do/survival-services/main-shelter/"
            },
            {
                name: "Drexel House",
                minage: 18,
                genders: "m",
                website: "https://ccsww.org/get-help/shelter-homeless-services/drexel-house"
            },
            {
                name: "Hammond House",
                minage: 18,
                genders: "f",
                website: "https://www.compasshousingalliance.org/what-we-do-top/emergency-shelter/hammond-house/"
            },
            {
                name: "Mary’s Place",
                minage: 18,
                genders: "f",
                website: "https://www.marysplaceseattle.org/shelters"
            },
            {
                name: "Noel House Programs",
                minage: 18,
                genders: "f",
                website: "https://ccsww.org/get-help/shelter-homeless-services/noel-house-programs/"
            },
            {
                name: "Roots Young Adult Shelter",
                minage: 18,
                genders: "mf",
                website: "http://www.rootsinfo.org/"
            },
            {
                name: "St. Martin De Porres",
                minage: 50,
                genders: "m",
                website: "https://ccsww.org/get-help/shelter-homeless-services/st-martin-de-porres-shelter/"
            },
            {
                name: "Union Gospel Shelter",
                minage: 18,
                genders: "m",
                website: "https://www.ugm.org/"
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

        // creates the HTML element for each shelter search result
        function showShelter() {
            for (neededShelter in sortedShelters) {
                // creates elements to be used to create a new element for each shelter
                // iterated through
                var myArticle = document.createElement('article');
                var myH2 = document.createElement('h2');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');

                // assigns values to each elment from the current shelter being
                // iterated through
                myH2.textContent = sortedShelters[neededShelter].name;
                myPara1.textContent = 'Minimum Age: ' + sortedShelters[neededShelter].minage;
                myPara2.textContent = 'Genders Served: ' + sortedShelters[neededShelter].genders;
                myPara3.textContent = 'URL: ' + sortedShelters[neededShelter].website;

                // appends new text elements to article element
                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);

                // inserts article element into the DOM
                document.getElementById("searchResults").appendChild(myArticle);
            }
        }

        // this function sorts the shelters according to the users preferences and sends the result
        // into a new array
        function sortShelters() {
            // declares arrays to be used within function, tmpShelter array to be passed out of function
            let tmpShelterArray = [];
            let perfectMatch = [];
            let partialMatch = [];
            let noMatch = [];
            // iterates through every shelter in the unsortedShelters array
            for (let i = 0; i < unsortedShelters.length; i++) {
                // determines if the shelter is a perfect match and adds to relevant array
                if (unsortedShelters[i].minage <= userAge &&
                    unsortedShelters[i].genders === userGender ||
                    unsortedShelters[i].genders === 'mf') {
                    perfectMatch.push(unsortedShelters[i]);
                    // determines if the shelter is a partial match and adds to relevant array
                } else if (unsortedShelters[i].minage <= userAge ||
                    unsortedShelters[i].genders === userGender ||
                    unsortedShelters[i].genders === 'mf') {
                    partialMatch.push(unsortedShelters[i]);
                // otherwise the shelter is a none match and gets added to relevant array
                } else {
                    noMatch.push(unsortedShelters[i]);
                }
            }

            // starts building tmpShelterArray by adding perfect matches first
            tmpShelterArray = perfectMatch;
            // keeps building tmpShelterArray by adding imperfect matches second
            tmpShelterArray = tmpShelterArray.concat(partialMatch);
            // finishes building tmpShelterArray by adding non-matches last in line
            tmpShelterArray = tmpShelterArray.concat(noMatch);

            return tmpShelterArray;
        }

        // the main search function, retrieves user gender and age and determines matching shelter
        // then assigns returned value of sortShelters() to sortedShelters array, which is then displayed 
        // in the DOM by showShelter();
        function searchRequest() {
            userAge = getUserAge();
            userGender = getUserGender();
            sortedShelters = sortShelters();
            console.log(sortedShelters);
            showShelter();
        }

        // applies event listener to submit button, preventsDefault() auto-refresh since not passing data
        // to a server, and calls search request 
        document.addEventListener('submit', function (e) {
            e.preventDefault();
            searchRequest();
        });
    });