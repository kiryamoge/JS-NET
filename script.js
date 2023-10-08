// Задание 1
// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5

let counting = 1;
const interval = setInterval(() =>{
  console.log(`Сообщение номер ${counting}`);
  if (counting === 5){
    clearInterval(interval);
  }
  counting++;
}, 2000);


// Задание 2
// Сделать виджет - цифровые часы, оформить по желанию.
// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.

  const time = setInterval(() =>{
    const nowTime = new Date().toLocaleTimeString();
    const timeHtml = document.getElementById('time');
    timeHtml.textContent = nowTime;
}, 1000);


// Задание 3
// По данному url расположена задача:
// https://jsonplaceholder.typicode.com/todos/1
// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.

const urlDiv = document.querySelector('.url')
let xhrone = new XMLHttpRequest();

xhrone.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhrone.send();

xhrone.onload = function() {
  const task = JSON.parse(xhrone.response)
  urlDiv.textContent = task.title;
  console.log(task.title);
};

// Задание 4
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

const ul = document.querySelector('ul')

let xhrtwo = new XMLHttpRequest();

xhrtwo.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhrtwo.send();

xhrtwo.onload = function () {
  const list = JSON.parse(xhrtwo.response)
  list.forEach((item, element) => {
      if (element < 20) {
        ul.insertAdjacentHTML('afterbegin', `
        <li>${item.title}</li>
        `);
      }
  })
};