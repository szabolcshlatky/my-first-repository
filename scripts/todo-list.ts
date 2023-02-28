'use strict';

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

const addForm: HTMLFormElement = $$(`.add`) as HTMLFormElement;
const list: HTMLUListElement = $$(`.todos`) as HTMLUListElement;
const search: HTMLInputElement = $$(`.search input`) as HTMLInputElement;

const generateTemplate = (todo: string): void => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

// Save & Load from localStorage API

const saveTodos = (): void => {
  const todos = Array.from(list.children).map(todo => todo.textContent);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodos = (): void => {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.forEach(todo => generateTemplate(todo));
};

// Add todos

addForm.addEventListener(`submit`, (e: Event) => {
  e.preventDefault();
  const todo = (addForm.add as HTMLInputElement).value.trim();

  console.log(todo);

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
    saveTodos();
  }
});

// Delete todos

list.addEventListener(`click`, (e: Event) => {
  if ((e.target as HTMLElement).classList.contains(`delete`)) {
    (e.target as HTMLElement).parentElement?.remove();
    saveTodos();
  }
});

// Searching & filtering todos

const filterTodos = (term: string): void => {
  Array.from(list.children)
    .filter((todo: Element) => !todo.textContent?.toLowerCase().includes(term))
    .forEach((todo: Element) => todo.classList.add(`filtered`));

  Array.from(list.children)
    .filter((todo: Element) => todo.textContent?.toLowerCase().includes(term))
    .forEach((todo: Element) => todo.classList.remove(`filtered`));
};

// Keyup event

search.addEventListener(`keyup`, () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

// Retrieve and generate the saved todo list items on page load

loadTodos();
console.log(localStorage);