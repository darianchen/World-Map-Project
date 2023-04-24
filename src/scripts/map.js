import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import hoverTooltip from './hover-tooltip';

async function map() {
    const height = 655;
    const width = 1010;
    const svg = d3.select('.container').append('svg').lower().attr('width', width).attr('height', height).attr('class', 'world-map');
    const g = svg.append('g').attr('class', 'continents');
    const projection = d3.geoMercator().scale(160).translate([505,465]);
    const path = d3.geoPath(projection);

    const data = await d3.json('data/world-continents.topo.json')
    const continents = topojson.feature(data, data.objects.default);
    g.selectAll(path).data(continents.features).enter().append('path').attr('d', path).attr('class', 'continent');

    const continentPaths = document.getElementsByTagName('path');
    continentPaths[0].setAttribute('id', 'europe');
    continentPaths[1].setAttribute('id', 'oceania');
    continentPaths[2].setAttribute('id', 'africa');
    continentPaths[3].setAttribute('id', 'asia');
    continentPaths[4].setAttribute('id', 'north-america');
    continentPaths[5].setAttribute('id', 'south-america');
    hoverTooltip();

    const continentsDOM = document.getElementsByClassName('continents')[0];

    continentsDOM.addEventListener('click', e => {
        const name = e.target.__data__.properties.name;
        const hash = {
            'Asia': 'asia',
            'North America': 'north-america',
            'South America': 'south-america',
            'Europe': 'europe',
            'Africa': 'africa',
            'Oceania': 'oceania'
        }
        const container = document.querySelector('.container');
        const continent = document.querySelector(`.${hash[name]}-container`);
        container.style.display = 'none';
        continent.style.display = 'flex';      
    });

    const aboutModal = document.getElementById('about-modal');
    const countryModal = document.getElementById('country-modal');
    const aboutBtn = document.getElementById('aboutBtn');
    const closeBtns = Array.from(document.getElementsByClassName('closeBtn'));

    aboutBtn.addEventListener('click', () => {
        aboutModal.style.display = 'block';
    });

    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => {
            aboutModal.style.display = 'none';
            countryModal.style.display = 'none';
        })
    }); 

    window.addEventListener('click', (e) => {
        document.querySelector('.currency').innerHTML = 'Currency: ';
        if(e.target === aboutModal) aboutModal.style.display = 'none'

        if(e.target === countryModal) {
            document.querySelector('.currency').innerHTML = 'Currencies: '; 
            countryModal.style.display = 'none'
            clearData();
        }
    })
}

const clearData = () => {
    const dataTags = Array.from(document.getElementsByClassName('data-tag'));
    document.getElementById('flag').src = '#';

    dataTags.forEach(el => { 
        const child = el.firstChild;
        el.innerHTML = '';
        el.appendChild(child); 
    });
}

export default map;