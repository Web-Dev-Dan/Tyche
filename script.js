'use strict';

// ----- 💬 Notifications 💬 -----
const mainContainer = document.getElementById('mainContainer');
const updatesContainer = document.getElementById('updates');
const closeUpdatesBtn = document.getElementById('closeUpdatesBtn');

const closeUpdatesContainer = () => {
    updatesContainer.remove();
}

closeUpdatesBtn.addEventListener('click', closeUpdatesContainer);


// ----- 🙍‍♂️ User Button 🙎‍♀️ -----
const anonymousUserBtn = document.getElementById('anonymousUserBtn');
const loginDetail = document.getElementById('loginDetail');
const closeLoginDetailBtn = document.getElementById('closeLoginDetailBtn');

const openLoginDetail = () => {
    mainContainer.classList.add('element-hidden');
    loginDetail.classList.remove('element-hidden');
}

const closeLoginDetail = () => {
    mainContainer.classList.remove('element-hidden');
    loginDetail.classList.add('element-hidden');

    loginDetailHeader.textContent = 'Sign In';
    loginPage.classList.remove('element-hidden');
    createAccountPage.classList.add('element-hidden');
}

anonymousUserBtn.addEventListener('click', openLoginDetail);
closeLoginDetailBtn.addEventListener('click', closeLoginDetail);



// ----- 🛠 Create Account Toggle 🛠 -----
const loginDetailHeader = document.getElementById('loginDetailHeader');
const openCreateAccountBtn = document.getElementById('openCreateAccountBtn');
const openLoginBtn = document.getElementById('openLoginBtn');
const loginPage = document.getElementById('loginPage');
const createAccountPage = document.getElementById('createAccountPage');

const openCreateAccount = (e) => {
    e.preventDefault();

    loginDetailHeader.textContent = 'Create an Account';
    loginPage.classList.add('element-hidden');
    createAccountPage.classList.remove('element-hidden');
}

const openLoginPage = (e) => {
    e.preventDefault();

    loginDetailHeader.textContent = 'Sign In';
    loginPage.classList.remove('element-hidden');
    createAccountPage.classList.add('element-hidden');
}

openCreateAccountBtn.addEventListener('click', openCreateAccount);
openLoginBtn.addEventListener('click', openLoginPage);

// ----- 🛠 Create Account Button 🛠 -----
const createAccountBtn = document.getElementById('createAccountBtn');
const createAccountInput__name = document.getElementById('createAccountInput__name');
const createAccountInput__password = document.getElementById('createAccountInput__password');

const createAccount = (e) => {
    e.preventDefault();

    if (createAccountInput__name.value && createAccountInput__password.value) {
        console.log('New account created...');

        createAccountInput__name.value = '';
        createAccountInput__password = '';
    }
}

createAccountBtn.addEventListener('click', createAccount);





// ----- 👀 USER LOGIN DETAILS 👀 -----
let userAccounts = [
    {
        username: 'User',
        password: 'password'
    }
];

let loggedIn = false;

// ----- 🙍‍♂️ Login Button 🙎‍♀️ -----
const loginBtn = document.getElementById('loginBtn');
const userNameLoginInput = document.getElementById('userNameLoginInput');
const passwordLoginInput = document.getElementById('passwordLoginInput');

const login = (e) => {
    e.preventDefault();

    if (userNameLoginInput.value && passwordLoginInput.value) {
        loggedIn = true;
        console.log('Logging in...');
        closeLoginDetail();
        checkLoggedInStatus();

        userNameLoginInput.value = '';
        passwordLoginInput.value = '';
    }
}

loginBtn.addEventListener('click', login);


// Check if user is logged in:
const checkLoggedInStatus = () => {
    const userBtn = document.getElementById('userBtn');
    const likedItemsBtn = document.getElementById('likedItemsBtn');
    const userBasketBtn = document.getElementById('userBasketBtn');

    if (loggedIn) {
        console.log('Logged in...');

        anonymousUserBtn.classList.add('element-hidden');
        userBtn.classList.remove('element-hidden');
        likedItemsBtn.classList.remove('element-hidden');
        userBasketBtn.classList.remove('element-hidden');
    } else {
        console.log('Not logged in...');

        anonymousUserBtn.classList.remove('element-hidden');
        userBtn.classList.add('element-hidden');
        likedItemsBtn.classList.add('element-hidden');
        userBasketBtn.classList.add('element-hidden');
    }
}

checkLoggedInStatus();
