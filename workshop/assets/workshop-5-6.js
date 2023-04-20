`use strict`;

let names = [`Hlatky`, `Eszter`, `Elizabet`];

names.push(`Pocaklakó`);
names[0] = `Szabolcs`;

names.forEach((name) => {
	$(`.names`).append(`<li class="name">${name}</li>`);
});

$(`.name:first-child`).css(`font-weight`, `bolder`);

let additionalBlock = {
	title: "Beillesztve JavaScripttel",
	text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!",
};

$(`body`).append(
	`<h1>${additionalBlock.title}</h1><p>${additionalBlock.text}</p>`
);
