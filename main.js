'use strict';


// Удалил рекламу

const deletAds = document;
deletAds.querySelector('.ads').remove();


const item = document.querySelectorAll('.item');

// Выставляю карточки по порядку

document.querySelector('.items').prepend(
    item[1], item[2], item[3], item[0]);

const itemTitle = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');

// Заголовки сделали по карточкам

propsList[1].before(itemTitle[3]);
propsList[4].before(itemTitle[4]);
propsList[5].before(itemTitle[0]);

propsList[4].replaceWith(propsList[2]);
itemTitle[1].after(propsList[4]);

// Берем два элемента из списка 9 и 10
const propsItem = propsList[5].querySelectorAll('li:nth-child(n + 9)');
console.log(propsItem);
// Делаем перебор item и в карточку №2[1] в конец списка закидываем 9 и 10.
propsItem.forEach(item => propsList[1].append(item));

// Перемещаем 4 пункт из одной карточки в другую
const propsItemFour = document.querySelector('.props__item_four');
propsList[3].querySelector('li:nth-child(4)').prepend(propsItemFour);
console.log(propsItemFour);

// Создаем несуществующий заголовок в карточке
itemTitle[1].remove(); // Удаляем заголовок
const itemTitleNew = document.createElement('h2'); // Создаем тег H2
const text = document.createTextNode(
    'This и прототипы объектов'); // Создаем текст
itemTitleNew.prepend(text); // в Н2 помещаем текст
propsList[4].prepend(itemTitleNew); // Помещаем в карточку

