document.addEventListener("DOMContentLoaded", function () {
   const text = document.querySelector('.marquee-text');
   
   if (!text) return; // Якщо елемент не знайдено, не виконуємо код

   let position = window.innerWidth; // Початкова позиція
   let speed = 10;

   function moveText() {
       position -= speed; // Рух вліво
       if (position < -text.offsetWidth) {
           position = window.innerWidth;
       }
       text.style.left = position + "px";
       requestAnimationFrame(moveText);
   }

   moveText();
});

// const container = document.querySelector('.marquee-text');
//     for (let i = 0; i < 5; i++) { // 5 повторень
//         let img = document.createElement('img');
//         img.src = 'your-image.jpg';
//         img.alt = 'Image';
//         container.appendChild(img);
//     }