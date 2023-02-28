'use strict';
var $ = function (id) { return document.getElementById(id); };
var $$ = function (query) { return document.querySelector(query); };
var $$$ = function (jquery) { return document.querySelectorAll(jquery); };
var addForm = $$(".add");
var list = $$(".todos");
var search = $$(".search input");
var generateTemplate = function (todo) {
    var html = "\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n      <span>".concat(todo, "</span>\n      <i class=\"far fa-trash-alt delete\"></i>\n    </li>\n  ");
    list.innerHTML += html;
};
// Save & Load from localStorage API
var saveTodos = function () {
    var todos = Array.from(list.children).map(function (todo) { return todo.textContent; });
    localStorage.setItem('todos', JSON.stringify(todos));
};
var loadTodos = function () {
    var todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.forEach(function (todo) { return generateTemplate(todo); });
};
// Add todos
addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var todo = addForm.add.value.trim();
    console.log(todo);
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
        saveTodos();
    }
});
// Delete todos
list.addEventListener("click", function (e) {
    var _a;
    if (e.target.classList.contains("delete")) {
        (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        saveTodos();
    }
});
// Searching & filtering todos
var filterTodos = function (term) {
    Array.from(list.children)
        .filter(function (todo) { var _a; return !((_a = todo.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(term)); })
        .forEach(function (todo) { return todo.classList.add("filtered"); });
    Array.from(list.children)
        .filter(function (todo) { var _a; return (_a = todo.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(term); })
        .forEach(function (todo) { return todo.classList.remove("filtered"); });
};
// Keyup event
search.addEventListener("keyup", function () {
    var term = search.value.trim().toLowerCase();
    filterTodos(term);
});
// Retrieve and generate the saved todo list items on page load
loadTodos();
console.log(localStorage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kby1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRSxJQUFLLE9BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztBQUM5QyxJQUFNLEVBQUUsR0FBRyxVQUFDLEtBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUM7QUFDcEQsSUFBTSxHQUFHLEdBQUcsVUFBQyxNQUFNLElBQUssT0FBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQWpDLENBQWlDLENBQUM7QUFFMUQsSUFBTSxPQUFPLEdBQW9CLEVBQUUsQ0FBQyxNQUFNLENBQW9CLENBQUM7QUFDL0QsSUFBTSxJQUFJLEdBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQXFCLENBQUM7QUFDaEUsSUFBTSxNQUFNLEdBQXFCLEVBQUUsQ0FBQyxlQUFlLENBQXFCLENBQUM7QUFFekUsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLElBQVk7SUFDcEMsSUFBTSxJQUFJLEdBQUcsOEdBRUQsSUFBSSw0RUFHZixDQUFDO0lBRUYsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsb0NBQW9DO0FBRXBDLElBQU0sU0FBUyxHQUFHO0lBQ2hCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUN0RSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdkQs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