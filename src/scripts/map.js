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

    const data = await d3.json('data/world-continents.topo.json');
    const continents = topojson.feature(data, data.objects.default);
    g.selectAll('path')
      .data(continents.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('class', 'continent')
      .attr('id', (d, i) => {
        const continentNames = ['europe', 'oceania', 'africa', 'asia', 'north-america', 'south-america'];
        return continentNames[i];
      });
    
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
}

export default map;