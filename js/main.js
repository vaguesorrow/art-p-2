document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.main');
    const section2 = document.querySelector('.draw');
    const btn1 = document.querySelector('.button-3-f2-1');

    btn1.addEventListener('click', function () {
        section1.style.display = 'none';
        section2.style.display = 'block';
        section2.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.main');
    const section2 = document.querySelector('.draw');
    const btn2 = document.querySelector('.button-draw-2');

    btn2.addEventListener('click', function () {
        section2.style.display = 'none';
        section1.style.display = 'block';
        section1.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.main');
    const section3 = document.querySelector('.device');
    const btn1 = document.querySelector('.button-4-f1');

    btn1.addEventListener('click', function () {
        section1.style.display = 'none';
        section3.style.display = 'block';
        section3.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.querySelector('.main');
    const section3 = document.querySelector('.device');
    const btn2 = document.querySelector('.button-device');

    btn2.addEventListener('click', function () {
        section3.style.display = 'none';
        section1.style.display = 'block';
        section1.classList.add('fullscreen');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let draggableElements = document.querySelectorAll(".drag");
  
    draggableElements.forEach(function (element) {
      let isDragging = false;  
      let offsetX, offsetY;    
      element.addEventListener("mousedown", function (event) {
        isDragging = true;    
  
        offsetX = event.clientX - element.getBoundingClientRect().left;
       
        offsetY = event.clientY - element.getBoundingClientRect().top;
       
        function onMouseMove(event) {
          if (isDragging) {
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;
  
            element.style.left = x + "px";
            element.style.top = y + "px";
          }
        }
  
        function onMouseUp() {
          isDragging = false; 
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }
  
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector(".canva");
    const ctx = canvas.getContext('2d');

    let drawing = false; // Флаг для отслеживания состояния рисования
    let lastX, lastY; // Последние координаты

    ctx.strokeStyle = '#9900FF'; // Цвет линии
    ctx.lineWidth = 3; // Толщина линии
    ctx.lineCap = 'round';
    ctx.globalCompositeOperation = 'source-over';

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;

        // Получаем координаты мыши относительно канваса
        lastX = e.clientX - canvas.getBoundingClientRect().left;
        lastY = e.clientY - canvas.getBoundingClientRect().top;

        ctx.beginPath(); // Начинаем новый путь
        ctx.moveTo(lastX, lastY); // Перемещаемся в начальную точку

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    // Обработчик перемещения мыши
    function mouseMoveHandler(e) {
        if (!drawing) return; // Если не рисуем, выходим

        // Получаем текущие координаты мыши относительно канваса
        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;

        ctx.lineTo(x, y); // Рисуем линию до текущей позиции
        ctx.stroke(); // Отображаем линию

        lastX = x; // Обновляем последние координаты
        lastY = y;
    }

    // Окончание рисования
    function mouseUpHandler() {
        drawing = false; // Останавливаем рисование
        ctx.closePath(); // Закрываем путь
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
});
