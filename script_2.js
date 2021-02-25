console.log("********** Factorielle :")


nbr = prompt("Choisi un nombre ?");
Number(nbr);

function factorielle(){
    for (let i = nbr-1; i != 0; i--) {
        // console.log(i);
        nbr = (nbr*i);
        console.log(nbr);
    }
}
factorielle();