const dotsLayer1 = document.getElementById('dotsLayer1');
const dotsLayer2 = document.getElementById('dotsLayer2');
const dotsLayer3 = document.getElementById('dotsLayer3');

const content = document.getElementById('content');
const url = document.getElementById('url');

function dots(posX, posY, id, layer) {
    let dot = document.createElement('div');
    dot.id = `dot${id}`
    dot.style = 'width: 5px;' +
        'height: 5px;' +
        'background-color: black;' +
        'position: absolute;' +
        'border-radius: 100%;';

    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    if(layer === 1)
        dotsLayer1.append(dot)

    if(layer === 2)
        dotsLayer2.append(dot)

    if(layer === 3)
        dotsLayer3.append(dot)
}

function createDots() {
    for(let j = 0; j <= 3; j++) {
        for (let i = 0; i < 25; i++) {

            let posY = Math.ceil((Math.random() * screen.availHeight) * 1.5);
            let posX = Math.ceil((Math.random() * screen.availWidth) * 1.5);

            dots(posX, posY, i, j)
        }
    }
}

createDots()

const layer1 = dotsLayer1.querySelectorAll('div');
const layer2 = dotsLayer2.querySelectorAll('div');
const layer3 = dotsLayer3.querySelectorAll('div');

window.addEventListener('mousemove', ev => {

    layer1.forEach((el) => {

        if(ev.movementX > 0) {
            let left = el.offsetLeft;
            left = left + 1;
            el.style.left = left + 'px';
        }
        if(ev.movementX < 0) {
            let left = el.offsetLeft;
            left = left - 1;
            el.style.left = left + 'px';
        }
        if(ev.movementY > 0) {
            let top = el.offsetTop;
            top = top + 1;
            el.style.top = top + 'px';
        }
        if(ev.movementY < 0) {
            let top = el.offsetTop;
            top = top - 1;
            el.style.top = top + 'px';
        }

    })

    layer2.forEach((el) => {

        if(ev.movementX > 0) {
            let left = el.offsetLeft;
            left = left + 2;
            el.style.left = left + 'px';
        }
        if(ev.movementX < 0) {
            let left = el.offsetLeft;
            left = left - 2;
            el.style.left = left + 'px';
        }
        if(ev.movementY > 0) {
            let top = el.offsetTop;
            top = top + 2;
            el.style.top = top + 'px';
        }
        if(ev.movementY < 0) {
            let top = el.offsetTop;
            top = top - 2;
            el.style.top = top + 'px';
        }

    })

    layer3.forEach((el) => {

        if(ev.movementX > 0) {
            let left = el.offsetLeft;
            left = left + 3;
            el.style.left = left + 'px';
        }
        if(ev.movementX < 0) {
            let left = el.offsetLeft;
            left = left - 3;
            el.style.left = left + 'px';
        }
        if(ev.movementY > 0) {
            let top = el.offsetTop;
            top = top + 3;
            el.style.top = top + 'px';
        }
        if(ev.movementY < 0) {
            let top = el.offsetTop;
            top = top - 3;
            el.style.top = top + 'px';
        }

    })

})

content.addEventListener('mouseover', ev => {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    url.style.color = `rgb(${r}, ${g}, ${b})`;
})