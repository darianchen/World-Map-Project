const hoverTooltip = () => {
    const continents = document.getElementsByClassName("continents")[0];

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
}

export default hoverTooltip;