`use strict`;

let object = {
	colors: [`orange`, `magenta`, `red`, `brown`, `green`, `blue`, `teal`],
	hasManyColors: true,
};

/* Események és eseményfigyelők */

$(`.click`).click(() => {
	console.log(`Igen, most rámkattintottál`);
});

$(`.secondBtn`).on("click", () => {
	$(`.click`).text(`Igen, most rámkattintottál`);
});

$(`.thirdBtn`).on("click", () => {
	$(`.click`).css(`background-color`, object.colors[1]);
	$(`.secondBtn`).css(`background-color`, object.colors[3]);
	$(`.thirdBtn`).css(`background-color`, object.colors[6]);

	/* Adj új funkciókat az eseményfigyelőidhez */

	let input = document.getElementById("color").value;
	$(`#color`).css(`background-color`, input);

	$(`.thirdBtn`).attr(`disabled="disabled"`);
});
