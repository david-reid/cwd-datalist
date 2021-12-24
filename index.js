function alienSelection() {
    let element = document.getElementById("alien");
    let output = document.getElementById("output");
    output.innerText = `${element.value}!`;
    addNewAlien(element.value.trim());
    element.value = "";
}

function addNewAlien(alien) {

    let isAnAlien = false;
    let element = document.getElementById("ben10-aliens");
    let options = document.querySelectorAll("option");
    options.forEach(o => {
        if ( alien == o.value) {
            isAnAlien = true;
        }
    });

    if ( !isAnAlien ) {
        let option = document.createElement("option");
        option.value = alien;
        element.appendChild(option);
    }
}

function omnitrix() {
    let options = document.querySelectorAll("option");
    let output = document.getElementById("output");
    let aliens = [...options].map(o => o.value);
    let number = Math.round(Math.random() * (aliens.length-1))
    let alien = aliens[number];
    output.innerText = `${alien}!`;
}


