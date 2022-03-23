const setup = () => {
    let woord  = "onoorbaar";
        for(var i = 0; i <= woord.length-3; i++)
        {
          console.log(woord.substring(i, 3+i));
        }
}




window.addEventListener("load", setup);