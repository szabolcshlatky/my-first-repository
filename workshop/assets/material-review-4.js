`use strict`;

/* MŰVELETEK */

console.log(4 + 5);
console.log(3 * 5);
console.log((4 - 1) * 2.2);

/* VÁLTOZÓK */

let azEnKorom = 28;

console.log(azEnKorom);
console.log(azEnKorom / 2);
console.log(azEnKorom % 15);

let green_fox_kora = 5;

console.log(green_fox_kora ** 10);

let azEnNevem = `Szabolcs`;

console.log("Üdvözöllek," + ' kedves ' + azEnNevem);
console.log(`${azEnNevem} nem ${green_fox_kora}, hanem ${azEnKorom} éves.`);

/* TÖMBÖK */

let nevek = [`Adam`, `Peter`, 34];

console.log(nevek);

/* FELTÉTELES ELÁGAZÁS */

if (false) { // Boolean érték
  console.log(`A javascript is betöltött.`);
} else if (true) { // Boolean érték
  console.clear();
  console.log(`Ez itt a vége`);
} else {
  console.log(`Igaz volt a feltétel`);
}

if (azEnKorom >= 21) {  // Összehasonlító operátorok: >, <, >=, <=, ==, ===
  console.log(`Már elég idős ahhoz, hogy igyon egy sört.`);
} else if (green_fox_kora > 18) {
  console.log(`A másik is elég idős ahhoz, hogy igyon egy sört.`);
} else {
  console.clear();
}

if (nevek[2] == `34`) {
  console.log(`Mehet`);
}

if (nevek[2] === `34`) {
  console.log(`Nem megy.`);
}

/* DOM - jQuery */

let szovegAzOldalon = $(`h1`).text();
console.log(szovegAzOldalon);

szovegAzOldalon = $(`h1`).text(`Ezt JS-ből változtattuk meg.`);
console.log(szovegAzOldalon);

  /* TARTALOM */

$(`p`).text(`alma`);
$(`li`).html(`<strong>sza</strong>lma`);

  /* OSZTÁLY */

$(`li:last-of-type`).toggleClass(`sarga`);

  /* STÍLUS */

console.log(
  $(`.sarga`).css(`background-color`)
);

$(`.sarga`).css(`background-color`, `magenta`);
$(`li`).css(`color`, `lime`);

  /* FÜGGVÉNY, ESEMÉNY */

$(`#hozzaado`).click(function adjHozzaEgyLit() {
  $(`ul`).append(`<li>ujabb elem</li>`);
});

$(`#torlo`).click(() => {
  $(`li:first-of-type`).remove();
});

/* CIKLUSOK */

for (let i = 0; i < 100; i++) {
  $(`ul`).prepend(`<li>${i}. Nem csalok többet a vizsgán.</li>`);
}

let szinek = [`orange`, `magenta`, `red`, `brown`, `green`, `blue`, `teal`];

szinek.forEach(function (szin) {
  $(`.kontener`).append(`<div class="doboz"></div>`);
  $(`.kontener div:last-of-type`).css(`background-color`, szin);
});