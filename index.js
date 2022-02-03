const text = "Bienvenidos a Dimesion";
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%&~';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

var iteraciones = 25;
function animacion(){
    setTimeout(()=>{
        document.querySelector('p').innerHTML = makeid(text.length);
        iteraciones--;
        if(iteraciones == 0)
            document.querySelector('p').innerHTML = text;
        else
            animacion();
    },50);
}

animacion();