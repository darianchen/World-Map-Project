import * as d3 from "d3";
import * as topojson from "topojson-client";
import worldMap from "./map";

const continent = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    const continentMeasurements = [
        { 
        "name": "asia",
        "width": 577,
        "height": 610,
        "transwidth": -100,
        "transheight": 563,
        "scale": 215
        },
        {
        "name": "africa",
        "width": 625,
        "height": 583,
        "transwidth": 192,
        "transheight": 301,
        "scale": 430
        },
        {
        "name": "europe",
        "width": 794,
        "height": 589,
        "transwidth": 220,
        "transheight": 915,
        "scale": 510
        },
        {
        "name": "oceania",
        "width": 710,
        "height": 582,
        "transwidth": -860,
        "transheight": 120,
        "scale": 500
        },
        {
        "name": "south-america",
        "width": 351.3,
        "height": 604,
        "transwidth": 605,
        "transheight": 94,
        "scale": 430
        },
        {
        "name": "north-america",
        "width": 560,
        "height": 553,
        "transwidth": 600,
        "transheight": 575,
        "scale": 200
        }
    ]

    const svg = d3.select(`.${continentMeasurements[5].name}-map`).append('svg').attr('width', continentMeasurements[5].width).attr('height', continentMeasurements[5].height).attr('class', 'countries-svg');
    const g = svg.append('g').attr("class", "na-countries countries").attr("id", continentMeasurements[5].name);
    const projection = d3.geoMercator().scale(continentMeasurements[5].scale).translate([continentMeasurements[5].transwidth, continentMeasurements[5].transheight]);
    const path = d3.geoPath(projection);

    d3.json("data/north-america.topo.json")
    .then(data => {
        const countries = topojson.feature(data, data.objects.continent_North_America_subunits);
        g.selectAll(path).data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);
    }) 



    for(let i = 0; i < 5; i++){
        const svg = d3.select(`.${continentMeasurements[i].name}-map`).append('svg').attr('width', continentMeasurements[i].width).attr('height', continentMeasurements[i].height).attr('class', 'countries-svg');
        const g = svg.append('g').attr("class", "countries").attr("id", continentMeasurements[i].name);
        const projection = d3.geoMercator().scale(continentMeasurements[i].scale).translate([continentMeasurements[i].transwidth, continentMeasurements[i].transheight]);
        const path = d3.geoPath(projection);
        const continent = `data/${continentMeasurements[i].name}.topo.json`;
    
        d3.json(continent)
        .then(data => {
            const countries = topojson.feature(data, data.objects.default);
            g.selectAll(path).data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);
        })            
    };

    const backBtns = document.getElementsByClassName("backBtn-box");

    for(let i = 0; i < backBtns.length; i++){
        backBtns[i].addEventListener("click", () => {
            backBtns[i].parentNode.parentNode.style.display = "none";
            document.querySelector(".container").style.display = "flex";
            })
        }
    }

    


export default continent;