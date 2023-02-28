`use strict`;

$("#fox-1").text("Macrotis");
$("#fox-2").css("border-color", "purple");
$("h1").css("background", "yellow");

let color = `purple`;
let number = 10;
let word = `cool`;

$(`.north`).css(`background-color`, color);

if (number > 100) {
  $(`.east`).text(`wow, de nagy szám`);
} else {
  $(`.east`).text(`ez csak egy közönséges szám`);
}

if (word === `cool`) {
  $(`.south`).text(`A DOM Ereje`);
} else {
  $(`.west`).text(`A DOM Ereje`);
}

/* Események és eseményfigyelők */

$(`.click`).click(() => {
  console.log(`Igen, most rámkattintottál`);
});

$(`.secondBtn`).on('click', () => {
  $(`.click`).text(`Igen, most rámkattintottál`);
});

$(`.thirdBtn`).on('click', () => {
  $(`.click`).css(`background-color`, object.colors[1]);
  $(`.secondBtn`).css(`background-color`, object.colors[3]);
  $(`.thirdBtn`).css(`background-color`, object.colors[6]);

/* Adj új funkciókat az eseményfigyelőidhez */

  let input = document.getElementById("color").value;
  $(`#color`).css(`background-color`, input);

  $(`.thirdBtn`).attr(`disabled="disabled"`);

});

/* Számláló */