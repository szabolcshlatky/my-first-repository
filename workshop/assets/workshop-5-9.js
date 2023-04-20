`use strict`;

let szam = 0;

$(`.fel`).click(() => {
	$(`h2`).text(szam++);
});

$(`.le`).click(() => {
	$(`h2`).text(szam--);
});
