
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
}

anonymousUserBtn.addEventListener('click', openLoginDetail);
closeLoginDetailBtn.addEventListener('click', closeLoginDetail);

// ----- 🙍‍♂️ Login Button 🙎‍♀️ -----
const loginBtn = document.getElementById('loginBtn');

const login = (e) => {
    e.preventDefault();
    console.log('Logging in...');
}

loginBtn.addEventListener('click', login);


let loggedIn = false;
