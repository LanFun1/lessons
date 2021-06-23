'use strict';

let collections = document.querySelector('.books'),
  elems = document.querySelectorAll('.book');

elems[0].remove();
elems[1].remove();
elems[2].remove();
elems[3].remove();
elems[4].remove();
elems[5].remove();

collections.append(elems[1]);
collections.append(elems[0]);
collections.append(elems[4]);
collections.append(elems[3]);
collections.append(elems[5]);
collections.append(elems[2]);

let book3 = document.getElementsByTagName('a');
console.log('book3: ', book3);
book3[2].textContent = "Книга 3. this и Прототипы Объектов";

let adv = document.querySelector('.adv');
adv.remove();

let body = document.getElementsByTagName("body");
document.body.style.backgroundImage = "url('image/adv.jpg')";

let chapters = document.querySelectorAll('.book');
let chapter2 = chapters[1].querySelectorAll('li');
chapter2[9].after(chapter2[2]);
chapter2[8].after(chapter2[7]);
chapter2[8].after(chapter2[4]);
chapter2[4].after(chapter2[5]);
let chapter5 = chapters[4].querySelectorAll('li');
chapter5[1].after(chapter5[9]);
chapter5[9].after(chapter5[3]);
chapter5[9].after(chapter5[3]);
chapter5[4].after(chapter5[2]);
chapter5[2].after(chapter5[6]);
chapter5[6].after(chapter5[7]);
let chapter6 = chapters[5].querySelectorAll('li');
console.log('chapter6: ', chapter6);
let chapterClone = chapter6[1];
chapterClone.textContent = "Глава 8: За пределами ES6";
chapter6[8].after(chapter6[1]);