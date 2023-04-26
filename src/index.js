import continent from "./scripts/continent";
import worldMap from "./scripts/map"

document.addEventListener("DOMContentLoaded", () => {
    worldMap();
    continent();

    const aboutModal = document.getElementById('about-modal');
    const countryModal = document.getElementById('country-modal');
    const aboutBtn = document.getElementById('aboutBtn');
    const closeBtns = Array.from(document.getElementsByClassName('closeBtn'));

    aboutBtn.addEventListener('click', () => {
        aboutModal.style.display = 'block';
    })

    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => {
            aboutModal.style.display = 'none';
            countryModal.style.display = 'none';
        })
    })

    window.addEventListener('click', (e) => {
        document.querySelector('.currency').innerHTML = 'Currency: ';
        if(e.target === aboutModal) aboutModal.style.display = 'none'

        if(e.target === countryModal) {
            document.querySelector('.currency').innerHTML = 'Currencies: '; 
            countryModal.style.display = 'none'
            clearData();
        }
    })
});

function clearData() {
    const dataTags = Array.from(document.getElementsByClassName('data-tag'));
    document.getElementById('flag').src = '#';

    dataTags.forEach(el => { 
        const child = el.firstChild;
        el.innerHTML = '';
        el.appendChild(child); 
    });
}