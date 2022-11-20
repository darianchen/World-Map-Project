
import * as d3 from "d3";
import * as topojson from "topojson-client";
import hoverTooltip from "./hover-tooltip";
import info from "./info";

const map = () => {
    const height = 600;
    const width = 925;

    const svg = d3.select('.container').append('svg').lower().attr('width', width).attr('height', height);
    const g = svg.append('g').attr("class", "continents");
    const projection = d3.geoMercator().scale(150).translate([width/2.3, height/1.5]);
    const path = d3.geoPath(projection);
    
    d3.json("data/world-continents.topo.json")
        .then(data => {
            const continents = topojson.feature(data, data.objects.default);
            g.selectAll(path).data(continents.features).enter().append('path').attr('d', path).attr('class', "continent");
        })
        .then(() => {
            document.getElementsByTagName("path")[0].setAttribute("id", "europe");
            document.getElementsByTagName("path")[1].setAttribute("id", "oceania");
            document.getElementsByTagName("path")[2].setAttribute("id", "africa");
            document.getElementsByTagName("path")[3].setAttribute("id", "asia");
            document.getElementsByTagName("path")[4].setAttribute("id", "north-america");
            document.getElementsByTagName("path")[5].setAttribute("id", "south-america");
        })
        .then( 
            info
        ).then(
            hoverTooltip
        )

        const continents = document.getElementsByClassName("continents")[0];


        continents.addEventListener("click", e => {
            const name = e.target.__data__.properties.name;
            const svg = document.getElementsByTagName("svg")[0];
            const container = document.querySelector(".container");
            svg.style.display = "none";
            container.style.display = "none";      
        });
        
}

export default map;
