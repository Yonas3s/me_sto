let editbutton = document.querySelector('.profile__button_edit');
let popup = document.querySelector(".popup");
let closePopup = document.querySelector(".popup__button_close");
let inputName = document.querySelector(".popup__input-name");
let inputJob = document.querySelector(".popup__input-job");
let placeName = document.querySelector(".profile__person_name");
let placeJob = document.querySelector(".profile__person_job");
let saveForm = document.querySelector(".popup__button_save");
let profile = document.querySelector(".profile");
let container = document.querySelector(".container");
let likeButton = document.querySelector(".card__caption_like-button");

    function putAlike() {
        likeButton.style.setProperty('background-image', 'url("/images/Activelike.svg")')
    }

likeButton.addEventListener('click', putAlike);

    function openPopUp() {
        popup.style.setProperty('visibility', 'visible');
        closePopup.style.setProperty('visibility', 'visible');
        container.style.setProperty('opacity', '0.5');
    }

editbutton.addEventListener('click', openPopUp);

    function closePopUp() {
        popup.style.setProperty('visibility', 'hidden');
        closePopup.style.setProperty('visibility', 'hidden');
        container.style.setProperty('opacity', '1');
    }

closePopup.addEventListener('click', closePopUp);

    function inputNameAndJob() {
        profile.innerHTML = `
            <img class="profile__avatar" src="./images/avatar.jpg" alt="аватар">
            <h1 class="profile__person_name"> ${inputName.value}
            <input type="button" class="editButton"></input>
            </h1>
            <button class="addButton">+</button>
            <p class="profile__person_job">${inputJob.value}</p> 
        `;
        inputName.value = '';
        inputJob.value = '';
        closePopUp();
    }

saveForm.addEventListener('click', inputNameAndJob);
