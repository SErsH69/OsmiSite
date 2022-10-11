import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger);



const mainWeb = class Mainweb {
    constructor({element, trigger}) {
        this.element = element;
        this.trigger = trigger;
        if (document.querySelector('.web-slider')) {
            this.slider = new Glide('.web-slider', {
                type: 'carousel',
                startAt: 1,
                perView: 1,
                gap: 0,
            });
        }
    }
    mobileSlider() {
        if (!this.slider) return;
        if (window.innerWidth < 1023) {
            this.slider.mount();
        } else {
            this.slider.destroy();
        }
    }
    animateElement() {
        this.mobileSlider();
        if (!document.querySelector('.web-right-image')) return;
        gsap.utils.toArray(".web-right-image").forEach((item, i) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top center", 
                end: 'bottom bottom',
                // scrub: 4,
                // markers: true,
                // pin: true, 
                // pinSpacing: false,
                // snap: 1,
                onUpdate: (item) => {
                    if (item.progress > 0) {
                        if (document.querySelector(`.web-subtitles`)) {
                            document.querySelectorAll(`.web-subtitle`).forEach(item => {
                                item.classList.remove('isActive');
                            })
                            document.querySelector(`.web-subtitle[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        }
                        if (document.querySelector(`.web-titles`)) {
                            document.querySelectorAll(`.web-title`).forEach(item => {
                                item.classList.remove('isActive');
                            })
                            document.querySelector(`.web-title[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        }
                        if (document.querySelector(`.web-texts`)) {
                            document.querySelectorAll(`.web-text`).forEach(item => {
                                item.classList.remove('isActive');
                            })
                            document.querySelector(`.web-text[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        }
                        if (document.querySelector(`.web-buttons`)) {
                            document.querySelectorAll(`.web-button`).forEach(item => {
                                item.classList.remove('isActive');
                            })
                            document.querySelector(`.web-button[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        }
                    }
                }
            });
        });
        gsap.to('.web-data-in', {
            scrollTrigger: {
                trigger: '.web-data',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: true,
                pinSpacing: false
                // markers: true
            },
            x: 0,
        })
    }
}
export default mainWeb;