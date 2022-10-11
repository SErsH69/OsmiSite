import {TweenMax, Power1} from 'gsap'

const mainWords = class MainWords {
    constructor({delay, element}) {
        this.x = {
            coordinate: 0,
            position: 'left'
        };
        this.y = {
            coordinate: 0,
            position: 'top'
        };
        this.isAnimated = false;
        this.delay = delay;
        this.element = element;
        this.countPosition()
        this.onInit();
    }
    countPosition() {
        if (!document.querySelector(this.element)) return;

        setTimeout(() => {
            document.addEventListener('mousemove', (event) => {
                this.x.coordinate = event.clientX;
                this.y.coordinate = event.clientY;
                if (this.x.coordinate < window.innerWidth / 2) {
                    this.x.position = 'left'
                } else {
                    this.x.position = 'right'
                }
                if (this.y.coordinate < window.innerheight / 2) {
                    this.y.position = 'top'
                } else {
                    this.y.position = 'bottom'
                }
                
                this.animateElem()
            })
        }, this.delay*1000)
    }
    animateElem() {
        if (!document.querySelector(this.element)) return;
        TweenMax.to(this.element, 1, {
            translateX: -this.x.coordinate + window.innerWidth / 2,
            ease: Power1.Circ,
        });
    }
    onInit() {}
}

export default mainWords;