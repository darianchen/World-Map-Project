import * as d3 from "d3";
import * as topojson from "topojson-client";

const continent = () => {

    const continentMeasurements = [
        { 
        "name": "asia",
        "width": 605,
        "height": 638,
        "transwidth": -100,
        "transheight": 590,
        "scale": 225
        },
        {
        "name": "africa",
        "width": 675,
        "height": 637,
        "transwidth": 208,
        "transheight": 330,
        "scale": 465
        },
        {
        "name": "europe",
        "width": 850,
        "height": 630,
        "transwidth": 232,
        "transheight": 980,
        "scale": 545
        },
        {
        "name": "oceania",
        "width": 710,
        "height": 626,
        "transwidth": -860,
        "transheight": 160,
        "scale": 540
        },
        {
        "name": "south-america",
        "width": 365,
        "height": 630,
        "transwidth": 635,
        "transheight": 100,
        "scale": 450
        },
        {
        "name": "north-america",
        "width": 644,
        "height": 636,
        "transwidth": 695,
        "transheight": 665,
        "scale": 232
        }
    ]

    const svg = d3.select(`.${continentMeasurements[5].name}-map`).append('svg').attr('width', continentMeasurements[5].width).attr('height', continentMeasurements[5].height).attr('class', 'countries-svg');
    const g = svg.append('g').attr("class", "na-countries countries").attr("id", continentMeasurements[5].name);
    const projection = d3.geoMercator().scale(continentMeasurements[5].scale).translate([continentMeasurements[5].transwidth, continentMeasurements[5].transheight]);
    const path = d3.geoPath(projection);

    d3.json("data/north-america.topo.json")
    .then(data => {
        const countries = topojson.feature(data, data.objects.continent_North_America_subunits);
        g.selectAll(path).data(countries.features).enter().append('path').attr('class', 'country').attr('d', path).attr("class", "north");
    });

    for(let i = 0; i < 5; i++){
        const svg = d3.select(`.${continentMeasurements[i].name}-map`).append('svg').attr('width', continentMeasurements[i].width).attr('height', continentMeasurements[i].height).attr('class', 'countries-svg');
        const g = svg.append('g').attr("class", "countries").attr("id", continentMeasurements[i].name);
        const projection = d3.geoMercator().scale(continentMeasurements[i].scale).translate([continentMeasurements[i].transwidth, continentMeasurements[i].transheight]);
        const path = d3.geoPath(projection);
        const continent = `data/${continentMeasurements[i].name}.topo.json`;
    
        d3.json(continent)
        .then(data => {
            const countries = topojson.feature(data, data.objects.default);
            g.selectAll(path).data(countries.features).enter().append('path').attr('class', 'country').attr('d', path).attr("class", countries.features[0].properties.continent.toLowerCase());
        })  
    };

    const backBtns = document.getElementsByClassName("backBtn-box");

    for(let i = 0; i < backBtns.length; i++){
        backBtns[i].addEventListener("click", () => {
            backBtns[i].parentNode.style.display = "none";
            document.querySelector(".container").style.display = "flex";
            })
        }
    };

export default continent;