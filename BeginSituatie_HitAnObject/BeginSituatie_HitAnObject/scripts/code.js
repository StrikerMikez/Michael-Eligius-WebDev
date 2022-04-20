const setup = () => {
    let global = {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
        };
    
    let klikobject = document.getElementsByTagName("img")[0];

    const bomAlert = () => {
        window.alert("Game over");
    }

    const verplaats = () => {
        klikobject.style.position = 'relative';
        klikobject.style.top = Math.abs(Math.random() * 800 - 48) + 'px';
        klikobject.style.left = Math.abs(Math.random() * 600 - 48) + 'px';
    }
    
    const vervang = () => {
        randomIndex = Math.round(Math.random() * 4);
        klikobject.src = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
    }

    const playGame = () => {
        verplaats();
        vervang();
    }

    klikobject.addEventListener("click", playGame);
}


window.addEventListener("load", setup);