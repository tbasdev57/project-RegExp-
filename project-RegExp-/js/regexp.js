//Controle du Nom
let leBout = document.querySelector('#verifNom')
leBout.addEventListener('click', (e) => {
    let leChamp = document.querySelector('#nom')
    let leMess = document.querySelector("#messNom")
    let reCP = /\d/
    if (leChamp.value.search(reCP) != -1) {
        messKO(leMess)
        leMess.innerHTML = "Le champ n'est pas un nom"

    }
    else {
        messOk(leMess)
        leMess.innerHTML = "Le champ est bien un nom"

    }
})

//Controle du Prénom
let leBout2 = document.querySelector('#verifPrenom')
leBout2.addEventListener('click', (e) => {
    let leChamp = document.querySelector('#prenom')
    let leMess = document.querySelector("#messPrenom")
    let reCP = /\d/
    if (leChamp.value.search(reCP) != -1) {
        messKO(leMess)
        leMess.innerHTML = "Le champ n'est pas un prénom"

    }
    else {
        messOk(leMess)
        leMess.innerHTML = "Le champ est bien un prénom"

    }
})

//Controle du code postal
let leBout3 = document.querySelector('#verifCP')
leBout3.addEventListener('click', (e) => {
    let leChamp = document.querySelector('#codePost')
    let leMess = document.querySelector("#messCP")
    let reCP = /^[0-9][1-9][0-9]{3}$/
    if (leChamp.value.search(reCP) != -1) {
        messOk(leMess)
        leMess.innerHTML = "Le champ est bien un code postal"
    }
    else {
        messKO(leMess)
        leMess.innerHTML = "Le champ n'est pas un code postal"
    }
})

//Controle de la ville
let leBout4 = document.querySelector('#verifVille')
leBout4.addEventListener('click', (e) => {
    let leChamp = document.querySelector('#ville')
    let leMess = document.querySelector("#messVille")
    let reCP = /\d/
    if (leChamp.value.search(reCP) != -1) {
        messKO(leMess)
        leMess.innerHTML = "Le champ n'est pas une ville"

    }
    else {
        messOk(leMess)
        leMess.innerHTML = "Le champ est bien une ville"

    }
})

//Controle du téléphone
let leBout5 = document.querySelector('#verifTel')
leBout5.addEventListener('click', (e) => {
    let leChamp = document.querySelector('#telephone')
    let leMess = document.querySelector("#messTel")
    let reCP = /^[0-9][1-9].[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}$/
    if (leChamp.value.search(reCP) != -1) {
        messOk(leMess)
        leMess.innerHTML = "Le champ est bien un numéro de téléphone"
    }
    else {
        messKO(leMess)
        leMess.innerHTML = "Le champ n'est pas un numéro de téléphone"
    }
})

//Controle de l'email
let leBout6 = document.querySelector('#verifEmail')
leBout6.addEventListener('click', (e) => {
    let leChamp = document.querySelector('#email')
    let leMess = document.querySelector("#messEmail")
    let reCP = /^[\w\-\.]+@[\w\-\.]+$/
    if (leChamp.value.search(reCP) != -1) {
        messOk(leMess)
        leMess.innerHTML = "Le champ est bien un email"
    }
    else {
        messKO(leMess)
        leMess.innerHTML = "Le champ n'est pas un email"
    }
})

//Controle du mot de passe
let leBout7 = document.querySelector('#verifMdp')
leBout7.addEventListener('click', (e) => {
    let leChamp = document.querySelector('#mdp')
    let leMess = document.querySelector("#messMdp")
    let reMin = /[a-z]+/
    if (leChamp.value.search(reMin) != -1) {
        let reMaj = /[A-Z]+/
        if (leChamp.value.search(reMaj) != -1) {
            let reNum = /[0-9]+/
            if (leChamp.value.search(reNum) != -1) {
                // Merci Aymeric
                //    let reSpe = /[\&\é\"\'\(\)\-\è\_\ç\à\=\~\#\{\}\[\]\|\`\\\^\@\¨\$\£\¤\*\µ\ù\%\!\§\:\/\;\.\,\?\<\>\²]+/
                //    if (leChamp.value.search(reSpe) != -1) {
                if (leChamp.value.length > 7) {
                    messOk(leMess)
                    leMess.innerHTML = "Le champ est bien un mdp valide"
                }
                else {
                    badMdp(leMess)
                }
                // }
                // else {
                //     badMdp(leMess)
                // }
            }
            else {
                badMdp(leMess)
            }
        }
        else {
            badMdp(leMess)
        }
    }
    else {
        badMdp(leMess)
    }
})

function badMdp(mess) {
    messKO(mess)
    mess.innerHTML = "Le champ n'est pas un mot de passe valide"

}

function messOk(mess) {
    mess.style.backgroundColor = "green"
    mess.style.color = "lightgreen"
    mess.style.padding = "5px"
    mess.style.margin = "5px"
    mess.style.borderRadius = "3px"
}
function messKO(mess) {
    mess.style.backgroundColor = "darkred"
    mess.style.color = "lightcoral"
    mess.style.padding = "5px"
    mess.style.margin = "5px"
    mess.style.borderRadius = "3px"
}