const searchButton = document.getElementById('search-button');
const searchForm = document.getElementById('search-form');
const searchContainer = document.querySelector('.search-container');

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    searchContainer.classList.toggle('open');
});

const mascots = [
    { name: 'Kirara', image: 'Assets/Kirara.png' },
    { name: 'Ayaka', image: 'Assets/Ayaka.png' },
    { name: 'March 7th', image: 'Assets/Mitsuki.png' }
];

let currentMascotIndex = 0;

function updateMascot() {
    const mascotImage = document.getElementById('mascotImage');
    const mascotName = document.getElementById('mascotName');

    const newImage = document.createElement('img');
    newImage.src = mascots[(currentMascotIndex + 1) % mascots.length].image;
    newImage.classList.add('enter'); 
    const mascotNameElement = document.getElementById('mascotName');
    document.querySelector('.mascot').insertBefore(newImage, mascotNameElement);

    mascotImage.classList.add('hide');

    mascotName.textContent = mascots[(currentMascotIndex + 1) % mascots.length].name;

    setTimeout(() => {
        newImage.classList.remove('enter');
        newImage.classList.add('show'); 
        mascotImage.remove();
        newImage.id = 'mascotImage'; 
        currentMascotIndex = (currentMascotIndex + 1) % mascots.length; 
    }, 1);
}

document.getElementById('nextButton').addEventListener('click', updateMascot);