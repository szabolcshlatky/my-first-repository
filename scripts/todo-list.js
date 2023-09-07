"use strict";
var $ = function (id) { return document.getElementById(id); };
var $$ = function (query) { return document.querySelector(query); };
var $$$ = function (jquery) { return document.querySelectorAll(jquery); };
var popupBtn = $$(".popup-btn");
var popup = $$(".popup-wrapper");
var closeX = $$(".popup-close");
popupBtn.addEventListener("click", function () {
    popup.style.display = "block";
});
closeX.addEventListener("click", function () {
    popup.style.display = "none";
});
// OPTIONAL way that click anywhere the pop-up will be closed:
popup.addEventListener("click", function () {
    popup.style.display = "none";
});
// CLOCK
var clock = $$(".clock");
var tick = function () {
    var rightNow = new Date();
    var h = rightNow.getHours();
    var m = rightNow.getMinutes();
    var s = rightNow.getSeconds();
    var htmlCLOCK = "\n    <span>".concat(h, "</span> : \n    <span>").concat(m, "</span> : \n    <span>").concat(s, "</span>\n  ");
    clock.innerHTML = htmlCLOCK;
};
setInterval(tick, 1000);
// ToDo
var todosBtn = $$(".todosBtn");
var todosLi = $$$(".todosLi");
var todosUl = $$(".todoItems");
var todoItems = $$$(".todoItem");
todosBtn.addEventListener("click", function () {
    console.log("You clicked me");
    todosUl.innerHTML += "<li>Added with innerHTML</li>";
    var somethingNew = document.createElement("li");
    somethingNew.textContent = "Added with document.createElement() .append and .prepend";
    todosUl.prepend(somethingNew);
});
todosLi.forEach(function (todoLi) {
    todoLi.addEventListener("click", function (e) {
        console.log(e);
        console.log("".concat(todoLi.textContent, " clicked "), e.target);
        e.target.style.textDecoration = "line-through";
    });
});
todoItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
        console.log("event in LI");
        e.stopPropagation();
        e.target.remove();
    });
});
todosUl.addEventListener("click", function (e) {
    console.log("event in UL");
    console.log(e);
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kby1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRSxJQUFLLE9BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztBQUM5QyxJQUFNLEVBQUUsR0FBRyxVQUFDLEtBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUM7QUFDcEQsSUFBTSxHQUFHLEdBQUcsVUFBQyxNQUFNLElBQUssT0FBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQWpDLENBQWlDLENBQUM7QUFFMUQsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25DLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVsQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ2pDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDO0FBRUgsOERBQThEO0FBRTlELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUTtBQUVSLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FB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