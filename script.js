let date = prompt("Kérem írja be az életkorát");
let korhatar = 18;

if (date < korhatar){
    console.log("Sajnos még kiskorú vagy, kérjük látogass vissza miután már elmúltál 18!")
} else if (date == korhatar) {
    console.log("Üdvözöljük a Roussilion borászatnál!")
} else if (date > korhatar) {
    console.log("Üdvözöljük a Roussilion borászatnál!")
}