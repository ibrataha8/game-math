let nbre = document.querySelector('#sp');
let res = document.querySelector("input[type='text']")
let nbre1
let nbre2
let resi = document.querySelector('#resi');
let score = 0

function change2() {
    nbre1  = Math.floor(Math.random() * 10);
    nbre2  = Math.floor(Math.random() * 10);
    nbre.innerHTML=nbre1+" + "+nbre2

};
function change1() {
    if(res.value == eval(nbre.textContent)){
        resi.innerHTML="Good"
        resi.style.color="green"
        score++
    }
    else{
        resi.innerHTML="Bad"
        resi.style.color="red"

    }

    if(isNaN(res.value)){
        resi.innerHTML="Taper Un Nombre"
        resi.style.color="brown"
        return
    }
    
    change2()
}
function change3() {
    resi.innerHTML="Votre score est :"+score
    resi.style.color="blue"
}
function change4() {
    score=0
    res.value=""
    resi.innerHTML=""
    change2()
}