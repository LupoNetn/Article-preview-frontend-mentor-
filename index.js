const shareButton1 = document.querySelector('.share-button1');
const shareButton2 = document.querySelector('.share-button2');
const mainFlex = document.getElementById('flex-1');
const screenWidth = window.innerWidth;
const hidden = document.querySelector('.hidden');




shareButton1.addEventListener('click', function () {
    hidden.classList.add('popup');
    mainFlex.classList.add('hidden')

});



shareButton2.addEventListener('click', function () {
    hidden.classList.remove('popup');
    mainFlex.classList.remove('hidden')

});


if (screenWidth >= 768) {
    shareButton1.addEventListener('click', function () {
        hidden.classList.add('popup');
        mainFlex.classList.remove('hidden');

    });
}


