
const cursorAnimation = class CursorAnimation {
    constructor(params = {
        count: 100,
        colors: [
            '#FF4978',
            '#430A66',
        ], 
        radius: 40, 
        speed: 1,
        lifetime: 150,
        element: 'cursor',
    }) {
        this.params = params;
        this.circles = [];
    }
    setCanvasSize() {
        return this.params;
    }
    createCanvas() {        
        return new Promise((resolve, reject) => {
            if (document.getElementById(this.params.element)) {
                resolve({
                    canvas: this.canvas = document.getElementById(this.params.element),
                    ctx: this.canvas ? this.ctx = this.canvas.getContext('2d') : null,
                    width: this.width = this.canvas.width = document.querySelector('.first-frame').clientWidth,
                    height: this.height = this.canvas.height = document.querySelector('.first-frame').clientHeight,
                })
            } else {
                reject(new Error('params.element is not defined'))
            }
            this.gradient = this.ctx.createLinearGradient(0, 0, window.innerWidth, 0);
            for (let i = 0; i < this.params.colors.length; i++) {
                this.gradient.addColorStop(i, this.params.colors[i]);
            }
        })
    }
    updateCanvasSize() {
        return new Promise((resolve, reject) => {
            if (this.canvas && this.ctx) {
                return resolve({
                    width: this.width = this.canvas.width = document.querySelector('.first-frame').clientWidth,
                    height: this.height = this.canvas.height = document.querySelector('.first-frame').clientHeight,
                })
            }
        })
    }
    pushCircleObject(x, y) {
        const circle = {
            x,y,lifetime: this.params.radius, radius: this.params.radius
        }
        this.circles.push(circle)
    }
    animate({x, y}) {
        if (!this.canvas) return;
        this.pushCircleObject(x, y)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.gradient;
        this.ctx.strokeStyle = this.gradient;
        // this.ctx.drawImage(this.params.shape, 0, 0, this.canvas.width, this.canvas.height);
        for (var i = 1; i < this.circles.length; i++) {

            this.circles[i].lifetime -= this.params.speed;
            if (this.circles[i].lifetime <= 0) {
                this.circles.splice(i, 1);
            }
            if (this.circles[i] && this.circles[i + 1]) {
                this.ctx.lineWidth = this.circles[i].radius * 2;
                this.ctx.beginPath();
                this.ctx.moveTo(this.circles[i + 1].x, this.circles[i + 1].y);
                this.ctx.lineTo(this.circles[i].x, this.circles[i].y);
                this.ctx.stroke();
                this.ctx.closePath()
                this.ctx.beginPath();
                this.ctx.arc(this.circles[i].x,this.circles[i].y,this.circles[i].radius, 0, Math.PI * 2);
                this.ctx.closePath()
                this.ctx.fill()
            }
        }
        this.onAnimate();
    }
    init() {
        this.createCanvas().then(() => {
            this.onInit()
        }).catch(error => {
            // console.warn(error)
        });
    }
    onInit() {}
    onAnimate() {}
}

export default cursorAnimation;