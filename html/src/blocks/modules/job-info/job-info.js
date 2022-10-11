import Glide from '@glidejs/glide'

const jobInfo = class jobInfo {
    constructor() {
        this.index = 0;
        this.interval = null;
    }
    changeSlide(index) {
        document.querySelectorAll('.job-info-title').forEach(item => {
            item.classList.remove('isActive');
        })
        document.querySelectorAll('.job-info-item').forEach(item => {
            item.classList.remove('isActive');
        })
        document.querySelector('.job-info-right').style.height = document.querySelector(`.job-info-item[data-target-id="${index}"]`).offsetHeight + 'px';
        document.querySelector(`.job-info-title[data-item-id="${index}"]`).classList.add('isActive')
        document.querySelector(`.job-info-item[data-target-id="${index}"]`).classList.add('isActive')

        // document.querySelector('.job-info-title.isActive').style.height = document.querySelector(`.job-info-title[data-item-id="${index}"]`).offsetHeight + 'px';
    }
    changeIndex(event) {
        if (event.target.className != 'job-info-title') return;
        this.changeSlide(event.target.dataset.itemId)
    }
    sliderInterval() {
        this.interval = setInterval(() => {
            var index = this.index++;
            if (!document.querySelector(`.job-info-title[data-item-id="${++index}"]`) && !document.querySelector(`.job-info-item[data-target-id="${++index}"]`)) {
                this.index = 0;
            }
            this.changeSlide(this.index)        
        }, 5000);
    }
    init() {
        if (!document.querySelector('.job-info')) return;
        this.changeSlide(this.index);
        this.sliderInterval();
        document.addEventListener('click', (event) => {
            this.changeIndex(event);
            clearInterval(this.interval);
        })
    }
}

export default jobInfo;