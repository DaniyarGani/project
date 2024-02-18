// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       hearts = document.querySelectorAll('.heart'),
//       oneHeart = document.querySelector('.heart');

// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px;'

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// // document.querySelector('.wrapper').append(div);

// // wrapper.prepend(div);
// // wrapper.appendChile(div);

// // hearts[0].before(div);
// // hearts[0].after(div);

// // circles[0].remove();

// // hearts[0].replaceWith(circles[0]);

// // wrapper.insertBefore(div, hearts[0]);
// // wrapper.removeChild(hearts[0]);
// // wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "Hello World!";         

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart');

box.style.cssText = 'background-color: blue; width: 500px;';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
div.classList.add('black');
document.querySelector('.wrapper').appendChild(div);

// div.innerHTML = "<h1>Hello</h1>";

div.textContent = "Hello";  

div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');
