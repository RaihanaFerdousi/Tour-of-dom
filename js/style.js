const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.PaddingLeft = '7px';
    section.style.backgroundColor = 'lightPink';
    section.style.textAlign = 'center';
    section.style.width = '400px';
}

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');
