const info = () => {

    
    const world = document.getElementsByClassName("world")[0];
    const europe = document.getElementById("europe");
    const asia = document.getElementById("asia");
    const africa = document.getElementById("africa");
    const northAmerica = document.getElementById("north-america");
    const southAmerica = document.getElementById("south-america");
    const oceania = document.getElementById("oceania");

    europe.addEventListener("mouseover", () => {
        document.querySelector(".europe").style.display = "flex";
        world.style.display = "none";
    });

    europe.addEventListener("mouseout", () => {
        document.querySelector(".europe").style.display = "none";
        world.style.display = "flex";
    });

    asia.addEventListener("mouseover", () => {
        document.querySelector(".asia").style.display = "flex";
        world.style.display = "none";
    });

    asia.addEventListener("mouseout", () => {
        document.querySelector(".asia").style.display = "none";
        world.style.display = "flex";
    });

    africa.addEventListener("mouseover", () => {
        document.querySelector(".africa").style.display = "flex";
        world.style.display = "none";
    });

    africa.addEventListener("mouseout", () => {
        document.querySelector(".africa").style.display = "none";
        world.style.display = "flex";
    });

    northAmerica.addEventListener("mouseover", () => {
        document.querySelector(".north-america").style.display = "flex";
        world.style.display = "none";
    });

    northAmerica.addEventListener("mouseout", () => {
        document.querySelector(".north-america").style.display = "none";
        world.style.display = "flex";
    });

    southAmerica.addEventListener("mouseover", () => {
        document.querySelector(".south-america").style.display = "flex";
        world.style.display = "none";
    });

    southAmerica.addEventListener("mouseout", () => {
        document.querySelector(".south-america").style.display = "none";
        world.style.display = "flex";
    });

    oceania.addEventListener("mouseover", () => {
        document.querySelector(".oceania").style.display = "flex";
        world.style.display = "none";
    });

    oceania.addEventListener("mouseout", () => {
        document.querySelector(".oceania").style.display = "none";
        world.style.display = "flex";
    });
}

export default info;