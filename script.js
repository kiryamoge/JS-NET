// Задание 1
// 1. Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые другие).
// Добавить эти объекты в массив shops.
// В итоге должен получиться массив объектов типа:
// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
// 2. С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']


function shop(title, address){
    this.title = title;
    this.address = address;
  }
  const green = new shop('Green', 'ул. Петра Мстиславца 11, Минск');
  const proStore = new shop('ProStore', 'пр-т Дзержинского, 126, Минск');
  const shops = [green, proStore];
  const arrayAddress = shops.map(({address}) => address);
  console.log(arrayAddress);


  
// Задание 2
// Напишите асинхронную функцию, которая получает список пользователей с сервера jsonplaceholder. Выведите список пользователей на страницу.
// В задании используйте синтаксис async-await и предусмотрите обработку ошибок.


const url = 'https://jsonplaceholder.typicode.com/users';
const ul = document.querySelector('ul');
const fnUl = async () => {
  try {
    const response = await fetch(url);
    const fnUl = await response.json();
    fnUl.forEach((item) => {
      ul.insertAdjacentHTML('beforeend', `<li>${item.name}</li>`);
    });
  } catch (error){
    console.error(error.message);
  }
};
fnUl();


