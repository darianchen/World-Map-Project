import * as d3 from "d3";
import * as topojson from "topojson-client";
import hoverTooltip from "./hover-tooltip";

const map = () => {
    const height = 655;
    const width = 1010;

    const svg = d3.select('.container').append('svg').lower().attr('width', width).attr('height', height).attr("class", "world-map");
    const g = svg.append('g').attr("class", "continents");
    const projection = d3.geoMercator().scale(160).translate([505,465]);
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
            hoverTooltip
        )

        const continents = document.getElementsByClassName("continents")[0];


        continents.addEventListener("click", e => {
            const name = e.target.__data__.properties.name;
            const keys = {
                "Asia": "asia",
                "North America": "north-america",
                "South America": "south-america",
                "Europe": "europe",
                "Africa": "africa",
                "Oceania": "oceania"
            }
            const container = document.querySelector(".container");
            const continent = document.querySelector(`.${keys[name]}-container`);
            container.style.display = "none";
            continent.style.display = "flex";      
        });

        const modal = document.getElementById("about-modal");
        const countryModal = document.getElementById("country-modal");
        const aboutBtn = document.getElementById("aboutBtn");
        const closeBtns = document.getElementsByClassName("closeBtn");

        aboutBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        for(let i = 0; i < closeBtns.length; i++){
            closeBtns[i].addEventListener("click", () => {
                modal.style.display = "none";
                clearData();
                countryModal.style.display = "none";
            })
        };

        window.addEventListener("click", (e) => {
            document.querySelector(".currency").innerHTML = "Currency: ";
            if(e.target === modal) modal.style.display = "none"

            if(e.target === countryModal) {
                document.querySelector(".currency").innerHTML = "Currencies: "; 
                countryModal.style.display = "none"
                clearData();
            }
        })

        const clearData = () => {
            const dataTags = document.getElementsByClassName("data-tag")
            for(let i = 0; i < dataTags.length; i++){
                const child = dataTags[i].firstChild;
                dataTags[i].innerHTML = "";
                dataTags[i].appendChild(child);
            }
        }
}

export default map;
