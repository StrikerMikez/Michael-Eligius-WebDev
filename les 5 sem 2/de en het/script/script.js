const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let woorden = zin.split(" ");
    for (let i = 0; i < woorden.length; i++) {
        if(woorden[i].localeCompare("de") === 0){
            woorden[i] = "het";
        }
    }
    console.log(woorden.join(" "));
    /*let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    var bewerkteZin = zin.replace("de", "het");
    console.log(bewerkteZin );*/
}
window.addEventListener("load", setup);
