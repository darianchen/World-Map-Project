const info = () => {

    const europe = document.getElementById("europe");
    const world = document.getElementsByClassName("world")[0];

    europe.addEventListener("mouseover", () => {
        document.getElementById("europe-info").style.display = "block";
        world.style.display = "none";
    });

    europe.addEventListener("mouseout", () => {
        document.getElementById("europe-info").style.display = "none";
        world.style.display = "block";
    });

    const asia = document.getElementById("asia");

    asia.addEventListener("mouseover", () => {
        document.getElementById("asia-info").style.display = "block";
        world.style.display = "none";
    });

    asia.addEventListener("mouseout", () => {
        document.getElementById("asia-info").style.display = "none";
        world.style.display = "block";
    });
    

    const africa = document.getElementById("africa");

    africa.addEventListener("mouseover", () => {
        document.getElementById("africa-info").style.display = "block";
        world.style.display = "none";
    });

    africa.addEventListener("mouseout", () => {
        document.getElementById("africa-info").style.display = "none";
        world.style.display = "block";
    });

    const northAmerica = document.getElementById("north-america");

    northAmerica.addEventListener("mouseover", () => {
        document.getElementById("north-america-info").style.display = "block";
        world.style.display = "none";
    });

    northAmerica.addEventListener("mouseout", () => {
        document.getElementById("north-america-info").style.display = "none";
        world.style.display = "block";
    });

    const southAmerica = document.getElementById("south-america");

    southAmerica.addEventListener("mouseover", () => {
        document.getElementById("south-america-info").style.display = "block";
        world.style.display = "none";
    });

    southAmerica.addEventListener("mouseout", () => {
        document.getElementById("south-america-info").style.display = "none";
        world.style.display = "block";
    });

    const oceania = document.getElementById("oceania");

    oceania.addEventListener("mouseover", () => {
        document.getElementById("oceania-info").style.display = "block";
        world.style.display = "none";
    });

    oceania.addEventListener("mouseout", () => {
        document.getElementById("oceania-info").style.display = "none";
        world.style.display = "block";
    });
}

export default info;