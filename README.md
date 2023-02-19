# I'm the Map!

Live link: https://darianchen.github.io/World-Map-Project/

## Background
I'm the Map is an interactive map that allows users to learn about the nearly 200 countries in the world. Users can view information such as the flag, capital and population associated with each country.  

## Instructions
- Select one of the 6 available continents on the world map.

![World Map](/images/gifs/world_map.gif)

- Next, select one of the countries on the chosen continent to display more information. Use the back button to navigate back to the world map.

![World Map](/images/gifs/select_country.gif)

## Implementation
- The world map is rendered using a TopoJSON file which gets converted into GeoJSON, and then the data is parsed by the D3 library. The same technique is used to generate all individual continent maps as well. 
```javascript
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
            const continentPaths = document.getElementsByTagName("path");
            continentPaths[0].setAttribute("id", "europe");
            continentPaths[1].setAttribute("id", "oceania");
            continentPaths[2].setAttribute("id", "africa");
            continentPaths[3].setAttribute("id", "asia");
            continentPaths[4].setAttribute("id", "north-america");
            continentPaths[5].setAttribute("id", "south-america");
            hoverTooltip()
        });
```
## Technologies, Libraries, APIs
- Webpack: A module bundler that bundles JavaScript files and stylesheets
- D3: A JavaScript library that fetches and parses the JSON files 
- REST Countries: A RESTful API that gets information about countries


## Future Implementation
- Fetch a random photo of each country using another API
- Add Antarctica

## Credits
- https://github.com/topojson/world-atlas - World map
- https://code.highcharts.com/mapdata/ - Maps of all the continents except North America
- https://github.com/deldersveld/topojson/blob/master/continents/north-america.json - North America map

