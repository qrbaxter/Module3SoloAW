
let homeCount=0
let guestCount=0
let homePts=document.getElementById("home-pts")
let guestPts=document.getElementById("guest-pts")

function homeAddOne() {
    homeCount+=1
    homePts.textContent=homeCount
}

function homeAddTwo() {
    homeCount+=2
    homePts.textContent=homeCount
}

function homeAddThree() {
    homeCount+=3
    homePts.textContent=homeCount
}

function guestAddOne() {
    guestCount+=1
    guestPts.textContent=guestCount
}

function guestAddTwo() {
    guestCount+=2
    guestPts.textContent=guestCount
}

function guestAddThree() {
    guestCount+=3
    guestPts.textContent=guestCount
}

