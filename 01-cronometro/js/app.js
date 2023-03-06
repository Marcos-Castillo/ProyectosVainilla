
document.querySelector(".btn").addEventListener("click",comenzar);
document.querySelector(".btnReset").addEventListener("click",reiniciar);
let hora = min = seg = 0;
let intervaloId;
let bandera = true;

function mostar(){
    document.querySelector(".seg").innerHTML = (seg<10)?seg="0"+seg:seg;
    document.querySelector(".min").innerHTML = (min<10)?min="0"+(min*1):min;
    document.querySelector(".hora").innerHTML = (hora<10)?hora="0"+(hora*1):hora;
   }

function comenzar(){
    if(bandera){
        intervaloId = setInterval(contar,1000);
        bandera=false;
        document.querySelector(".btn").textContent= "Pausa";
        }
    else{
        clearInterval(intervaloId);
        bandera=true;
        document.querySelector(".btn").textContent= "Comenzar";
        }
}

function reiniciar(){
    let hora = min = seg = 0;
    mostar()
}

function contar(){
    if(seg>=59){
        if(min>=59){
            hora++
            min=0;
        }else{
            min++;
        } 
        seg=0
    }else{
        seg++
    }
    mostar()
}