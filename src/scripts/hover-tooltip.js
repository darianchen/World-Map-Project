const hoverTooltip = () => {
    const continents = document.getElementsByClassName("continents")[0];
    const countries = document.getElementsByClassName("countries");
    const na = document.querySelector(".na-countries");
    console.log(countries)

    continents.addEventListener("mouseover", e => {
        const name = e.target.__data__.properties.name;
        const domEle = document.getElementById("tooltip");
        const x = (e.clientX + 5) + 'px';
        const y = (e.clientY + 5) + 'px';
        domEle.innerHTML = name;
        domEle.style.top = y;
        domEle.style.left = x;
        domEle.style.opacity = 1;
    });
    
    continents.addEventListener("mouseleave", () => {
        document.getElementById("tooltip").innerHTML = ""; //Change text of tooltip
        document.getElementById("tooltip").style.opacity = 0; //Make visibility 0
    });

    for(let i = 0; i < countries.length; i++){
        countries[i].addEventListener("mouseover", e => {
            const name = e.target.__data__.properties.name;
            const domEle = document.getElementById("tooltip");
            const x = (e.clientX + 5) + 'px';
            const y = (e.clientY + 5) + 'px';
            domEle.innerHTML = name;
            domEle.style.top = y;
            domEle.style.left = x;
            domEle.style.opacity = 1;
        })
    }

    for(let i = 0; i < countries.length; i++){
        countries[i].addEventListener("mouseleave", () => {
            document.getElementById("tooltip").innerHTML = "";
            document.getElementById("tooltip").style.opacity = 0;
        })
    }


    na.addEventListener("mouseover", e => {
        const name = e.target.__data__.properties.geounit;
        const domEle = document.getElementById("tooltip");
        const x = (e.clientX + 5) + 'px';
        const y = (e.clientY + 5) + 'px';
        domEle.innerHTML = name;
        domEle.style.top = y;
        domEle.style.left = x;
        domEle.style.opacity = 1;
    });
    
    na.addEventListener("mouseleave", () => {
        document.getElementById("tooltip").innerHTML = ""; //Change text of tooltip
        document.getElementById("tooltip").style.opacity = 0; //Make visibility 0
    });

    const countryModal = document.getElementById("country-modal");

    for(let i = 0; i < countries.length; i++){ //This part is for the modal
        countries[i].addEventListener("click", e => {
            const countryName = e.target.__data__.properties.name
            const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
            countryModal.style.display = "block";
            document.getElementById("country-name").innerHTML = countryName;

            fetch(finalURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.data = data;

                let currencies = [];
                for(const key in data[0].currencies){
                    if (data[0].currencies.hasOwnProperty(key)){
                        currencies.push(data[0].currencies[key].name);
                    }
                }
                document.getElementById("capital").innerHTML = `Capital: ${data[0].capital[0]}`;
                document.getElementById("flag").src = data[0].flags.svg;
                document.getElementById("population").innerHTML = `Population: ${data[0].population.toLocaleString("en-US")}`;
                document.getElementById("languages").innerHTML = `Languages: ${Object.values(data[0].languages).join(", ")}`;
                document.getElementById("currencies").innerHTML = `Currencies: ${currencies.join(", ")}`;
                document.getElementById("continents").innerHTML = `Continent: ${data[0].continents[0]}`;
                document.getElementById("area").innerHTML = `Area: ${Math.trunc(data[0].area*0.386102)}`;

            });


            


        })
    }



}

export default hoverTooltip;