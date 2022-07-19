let chiled1 = document.getElementById('chiled1');
let chiled2 = document.getElementById('chiled2');
let signUp = document.getElementById('signUp');
let SingIn = document.getElementById('SingIn');
let btnLogin = document.getElementById('btnLogin');
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputPass = document.getElementById('inputPass');
let btnSingUp = document.getElementById('btnSingUp');
let smartLoagin = document.getElementById('smartLoagin');


let emailInputCheck = document.getElementById('emailInputCheck');
let passInputCheck = document.getElementById('passInputCheck');
let clientPageParent = document.getElementById('clientPageParent');

let clientPage = document.getElementById('clientPage');
let btnLogout = document.getElementById('btnLogout');
let allInputIsRequired = document.getElementById('allInputIsRequired');

let incorrectEmailOrPass = document.getElementById('incorrectEmailOrPass');
let success = document.getElementById('success');
let allInputIsRequired2 = document.getElementById('allInputIsRequired2');
let errorMessage1 = document.getElementById('errorMessage1');
let errorMessage2 = document.getElementById('errorMessage2');
let errorMessageName = document.getElementById('errorMessageName');
let errorMessageEmail = document.getElementById('errorMessageEmail');


let arrOfEmails = [];




if (localStorage.getItem('listAcount') != null) {
    arrOfEmails = JSON.parse(localStorage.getItem('listAcount'))
}



signUp.addEventListener('click', function () {
    chiled2.classList.remove('d-none');
    reset();
    allInputIsRequired2.classList.add("d-none");
    success.classList.add("d-none");
    chiled1.classList.add('d-none');
});

SingIn.addEventListener('click', function () {
    chiled2.classList.add('d-none')
    reset();
    incorrectEmailOrPass.classList.add("d-none");
    chiled1.classList.remove('d-none');
    inputName.classList.remove("is-valid");
    inputEmail.classList.remove("is-valid");
    inputPass.classList.remove("is-valid");
    inputName.classList.remove("is-invalid");
    inputEmail.classList.remove("is-invalid");
    inputPass.classList.remove("is-invalid");
    errorMessage1.classList.add("d-none");
    errorMessage2.classList.add("d-none");
    errorMessage3.classList.add("d-none");
})

inputName.onkeyup = function () {
    checkForName();
}
inputEmail.onkeyup = function () {
    checkForEmail();
}
inputPass.onkeyup = function () {
    checkForPass();
}



btnSingUp.onclick = function () {
    if (inputName.value == "" || inputEmail.value == "" || inputPass.value == "") {
        allInputIsRequired2.classList.remove("d-none");
    }
    if (checkForName() == true && checkForEmail() == true && checkForPass() == true) {
        addAcounts();
        reset();
        allInputIsRequired2.classList.add("d-none")
        success.classList.remove("d-none");
        inputName.classList.remove("is-valid");
        inputEmail.classList.remove("is-valid");
        inputPass.classList.remove("is-valid");
    } else {
        success.classList.add("d-none");
    };
}



function checkForName() {
    for (var i = 0; i < arrOfEmails.length; i++) {
        var count = 0;
        if (arrOfEmails[i].name == inputName.value) {
            errorMessageName.classList.remove('d-none');
            inputName.classList.add("is-invalid");
            inputName.classList.remove("is-valid");
            btnSingUp.classList.add("disabled");
            return true;
        } else {
            count++;
            errorMessageName.classList.add('d-none');
            inputName.classList.remove("is-invalid");
            inputName.classList.add("is-valid");
            btnSingUp.classList.remove("disabled");
        }
    }

    var RejexName = /^[A-Za-z]{4,20}$/;
    if (RejexName.test(inputName.value)) {
        errorMessage1.classList.add("d-none");
        inputName.classList.remove("is-invalid");
        inputName.classList.add("is-valid");
        return true;
    } else {
        errorMessage1.classList.remove("d-none");
        inputName.classList.add("is-invalid");
        inputName.classList.remove("is-valid");
        return false;
    }

}


function checkForEmail() {
    for (var i = 0; i < arrOfEmails.length; i++) {
        var count = 0;
        if (arrOfEmails[i].email == inputEmail.value) {
            errorMessageEmail.classList.remove('d-none');
            inputEmail.classList.add("is-invalid");
            inputEmail.classList.remove("is-valid");
            btnSingUp.classList.add("disabled");
            return true;
        } else {
            count++;
            errorMessageEmail.classList.add('d-none');
            inputEmail.classList.remove("is-invalid");
            inputEmail.classList.add("is-valid");
            btnSingUp.classList.remove("disabled");
        }
    }



    var RejexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    if (RejexEmail.test(inputEmail.value)) {
        errorMessage2.classList.add("d-none");
        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.add("is-valid");
        return true;
    } else {
        errorMessage2.classList.remove("d-none");
        inputEmail.classList.add("is-invalid");
        inputEmail.classList.remove("is-valid");
        return false;
    }
}

function checkForPass() {
    var RejexPass = /^[A-Z]{1}[a-z0-9]{5,20}$/;
    if (RejexPass.test(inputPass.value)) {
        errorMessage3.classList.add("d-none");
        inputPass.classList.remove("is-invalid");
        inputPass.classList.add("is-valid");
        return true;
    } else {
        errorMessage3.classList.remove("d-none");
        inputPass.classList.add("is-invalid");
        inputPass.classList.remove("is-valid");
        return false;
    }
}


  

function addAcounts() {
    var acount = {
        name: inputName.value,
        email: inputEmail.value,
        pass: inputPass.value,
    }
    arrOfEmails.push(acount);
    localStorage.setItem('listAcount', JSON.stringify(arrOfEmails));
}

function reset() {
    inputName.value = "";
    inputEmail.value = "";
    inputPass.value = "";
    emailInputCheck.value = "";
    passInputCheck.value = "";
}


btnLogin.addEventListener('click', check)
function check() {
    for (var i = 0; i < arrOfEmails.length; i++) {
        if (emailInputCheck.value == arrOfEmails[i].email && passInputCheck.value == arrOfEmails[i].pass) {
            chiled1.classList.add('d-none');
            clientPage.classList.remove('d-none');
            clientPageParent.innerHTML = `wlecome ${arrOfEmails[i].name}`
        }
        else if (i == arrOfEmails.length - 1) {
            incorrectEmailOrPass.classList.remove("d-none");
            allInputIsRequired.classList.add("d-none");

        }
    }
    if (emailInputCheck.value == "" || passInputCheck.value == "") {
        allInputIsRequired.classList.remove("d-none")
        incorrectEmailOrPass.classList.add("d-none");
    }
}

btnLogout.addEventListener('click', function () {
    clientPage.classList.add('d-none');
    chiled1.classList.remove('d-none')
    reset();
    incorrectEmailOrPass.classList.add("d-none");
    allInputIsRequired.classList.add("d-none");
})




// btnSingUp.onclick = function () {
//     var RejexName = /^[a-zA-Z ]+$/;
//     var RejexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (RejexName.test(inputName.value) == true && RejexEmail.test(inputEmail.value) == true) {
//         addAcounts();
//         reset();
//         allInputIsRequired2.classList.add("d-none")
//         success.classList.remove("d-none");

//     } else {
//         allInputIsRequired2.classList.remove("d-none")
//         success.classList.add("d-none");
//     }

// }


// function serch() {
//     for (var i = 0; i < arrOfEmails.length; i++) {
//         var count=0;
//         if (arrOfEmails[i].name == inputName.value) {
//             errorMessageName.classList.remove('d-none');
//             inputName.classList.add("is-invalid");
//             inputName.classList.remove("is-valid");
//             return true;
//         } else {
//             count++;
//             errorMessageName.classList.add('d-none');
//             inputName.classList.remove("is-invalid");
//             inputName.classList.add("is-valid");
//         }
//     }

// }

