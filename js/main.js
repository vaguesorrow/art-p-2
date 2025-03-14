//экран рисование

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

//экран девайс

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

//экран 5 перетаскивание

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

//рисование

  document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector(".canva");
    const ctx = canvas.getContext('2d');

    let drawing = false; 
    let lastX, lastY; 

    ctx.strokeStyle = '#9900FF'; 
    ctx.lineWidth = 3; 
    ctx.lineCap = 'round';
    ctx.globalCompositeOperation = 'source-over';

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;

        lastX = e.clientX - canvas.getBoundingClientRect().left;
        lastY = e.clientY - canvas.getBoundingClientRect().top;

        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    function mouseMoveHandler(e) {
        if (!drawing) return; 

        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;

        ctx.lineTo(x, y); 
        ctx.stroke(); 

        lastX = x; 
        lastY = y;
    }

    function mouseUpHandler() {
        drawing = false; 
        ctx.closePath();
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
});

//второй экран

//кнопка1
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-1');
    const btn = document.querySelector('.button-2-1');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-1');
    const btn = document.querySelector('.button-skill-1');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});


//кнопка2
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-2');
    const btn = document.querySelector('.button-2-2');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-2');
    const btn = document.querySelector('.button-skill-2');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});


//кнопка3
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-3');
    const btn = document.querySelector('.button-2-3');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-3');
    const btn = document.querySelector('.button-skill-3');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка4
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-4');
    const btn = document.querySelector('.button-2-4');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-4');
    const btn = document.querySelector('.button-skill-4');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка5
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-5');
    const btn = document.querySelector('.button-2-5');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-5');
    const btn = document.querySelector('.button-skill-5');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка6
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-6');
    const btn = document.querySelector('.button-2-6');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-6');
    const btn = document.querySelector('.button-skill-6');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка7
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-7');
    const btn = document.querySelector('.button-2-7');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-7');
    const btn = document.querySelector('.button-skill-7');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка8
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-8');
    const btn = document.querySelector('.button-2-8');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-8');
    const btn = document.querySelector('.button-skill-8');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка9
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-9');
    const btn = document.querySelector('.button-2-9');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-9');
    const btn = document.querySelector('.button-skill-9');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка10
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-10');
    const btn = document.querySelector('.button-2-10');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.skill-10');
    const btn = document.querySelector('.button-skill-10');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка вопрос1
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-1');
    const btn = document.querySelector('.button-2-11');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-1');
    const btn = document.querySelector('.button-question-1');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка вопрос2
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-2');
    const btn = document.querySelector('.button-3-f1-1');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-2');
    const btn = document.querySelector('.button-question-2');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка вопрос3
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-3');
    const btn = document.querySelector('.button-5-f2');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-3');
    const btn = document.querySelector('.button-question-3');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//кнопка вопрос4
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-4');
    const btn = document.querySelector('.button-draw-1');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-4');
    const btn = document.querySelector('.button-question-4');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});

//рисование2

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector(".canva-3");
    const ctx = canvas.getContext('2d');

    let drawing = false; 
    let lastX, lastY; 
    let currentColor = 'red';

    const colorButtons = document.querySelectorAll('.color-button');

    colorButtons.forEach(div => {
        div.addEventListener('click', () => {
            // Получаем цвет кнопки (убедимся, что он в нужном формате)
            const color = window.getComputedStyle(div).backgroundColor;
            setColor(color);
        });
    });


    function setColor(color) {
        currentColor = color; 
        ctx.strokeStyle = currentColor;
    }

    ctx.lineWidth = 3; 
    ctx.lineCap = 'round';
    ctx.globalCompositeOperation = 'source-over';

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;

        lastX = e.clientX - canvas.getBoundingClientRect().left;
        lastY = e.clientY - canvas.getBoundingClientRect().top;

        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    function mouseMoveHandler(e) {
        if (!drawing) return; 

        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;

        ctx.lineTo(x, y); 
        ctx.stroke(); 

        lastX = x; 
        lastY = y;
    }

    function mouseUpHandler() {
        drawing = false; 
        ctx.closePath();
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
});

//смена картинки
    document.addEventListener('DOMContentLoaded', function() {
        const img = document.querySelector('.device-img');
         let currentImage = '.../img/device-2.svg'
    
        img.addEventListener('click', function() {
            if (currentImage === '.../img/device-1.svg') {
                img.src = '.../img/device-2.svg'; 
                currentImage = '.../img/device-2.svg';
            } else if (currentImage === '.../img/device-2.svg') {
                img.src = '.../img/device-3.svg'; 
                currentImage = '.../img/device-3.svg';
            } else {
                img.src = '.../img/device-1.svg'; 
                currentImage = '.../img/device-1.svg';
            }
        });
    });

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-5');
    const btn = document.querySelector('.button-device-1');

    btn.addEventListener('click', function () {
        section.style.display = 'block';
        section.classList.add('fullscreen');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.question-5');
    const btn = document.querySelector('.button-question-5');

    btn.addEventListener('click', function () {
        section.style.display = 'none';
    });
});