`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

const popupBtn = $$(`.popup-btn`);
const popup = $$(`.popup-wrapper`);
const closeX = $$(`.popup-close`);

popupBtn.addEventListener(`click`, () => {
  popup.style.display = `block`;
});

closeX.addEventListener(`click`, () => {
  popup.style.display = `none`;
});

// OPTIONAL way that click anywhere the pop-up will be closed:

popup.addEventListener(`click`, () => {
  popup.style.display = `none`;
});

// CLOCK

const clock = $$(`.clock`);

const tick = () => {
  const rightNow = new Date();
  const h = rightNow.getHours();
  const m = rightNow.getMinutes();
  const s = rightNow.getSeconds();
  
  const htmlCLOCK = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = htmlCLOCK;
};

setInterval(tick, 1000);

// ToDo

  const todosBtn = $$(`.todosBtn`);
  const todosLi = $$$(`.todosLi`);
  const todosUl = $$(`.todoItems`);
  const todoItems = $$$(`.todoItem`);
  
  todosBtn.addEventListener(`click`, () => {
    console.log(`You clicked me`);
    todosUl.innerHTML += `<li>Added with innerHTML</li>`;
  
    const somethingNew = document.createElement(`li`);
    somethingNew.textContent = `Added with document.createElement() .append and .prepend`;
    todosUl.prepend(somethingNew);
  });
  
  todosLi.forEach(todoLi => {
    todoLi.addEventListener(`click`, e => {
      console.log(e);
      console.log(`${todoLi.textContent} clicked `, e.target);
      e.target.style.textDecoration = `line-through`;
    });
  });
  
  todoItems.forEach(item => {
    item.addEventListener(`click`, e => {
      console.log(`event in LI`);
      e.stopPropagation();
      e.target.remove();
    });
  });
  
  todosUl.addEventListener(`click`, e => {
    console.log(`event in UL`);
    console.log(e);
  
    if (e.target.tagName === `LI`) {
      e.target.remove();
    }
  });