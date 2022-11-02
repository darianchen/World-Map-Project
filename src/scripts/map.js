import * as d3 from "d3";
import * as topojson from "topojson-client";

const map = () => {
    const height = 600;
    const width = 1000;

    const svg = d3.select('.container').append('svg').lower().attr('width', width).attr('height', height);
    const g = svg.append('g')
    const projection = d3.geoMercator().scale(150).translate([width/2.3, height/1.5]);
    const path = d3.geoPath(projection);
    
    d3.json("data/world-continents.topo.json")
        .then(data => {
            const continents = topojson.feature(data, data.objects.default);
            g.selectAll(path).data(continents.features).enter().append('path').attr('class', 'continent').attr('d', path);  
        });
}

export default map;
