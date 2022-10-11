import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videojs from 'video.js';

gsap.registerPlugin(ScrollTrigger);

const mainAbout = class MainAbout {
    constructor() {
        this.player;
    }
    openVideoModal() {
        document.querySelector('.video-modal').classList.add('isOpened');
        this.player.play();
    }
    closeVideoModal() {
        document.querySelector('.video-modal').classList.remove('isOpened');
        this.player.pause();
    }
    initVideoOpening() {
        if (!document.querySelector('.main-about-play')) return;
        document.querySelector('.main-about-play').addEventListener('click', () => {this.openVideoModal()});
        document.querySelector('.video-modal').addEventListener('click', () => {this.closeVideoModal()});
        this.player = document.getElementById('player_modal');
        videojs('player_modal', {
            fluid: true,
            controls: false,
            // autoplay: true,
            aspectRatio: '16:7',
            // muted: true,
            poster: 'img/video_preview.png',
            sources: [{
                src: 'videos/pv.mp4',
                type: 'video/mp4'
            }]
        });
    }
    onCircleAnimationEnd() {}
    animateCircle() {
        if (!document.querySelector('.main-about')) return;
        let self = this;
        if (window.innerWidth > 1023) {
            gsap.to('.main-about-circle', {
                scrollTrigger: {
                    trigger: '.trigger-wrapper-about',
                    start: 'top top',
                    end: 'top+=400 top',
                    scrub: 1,
                    // markers: true
                },
                width: () => {
                    return 7200 * 100 / window.innerWidth + 'vw'
                },
                height: () => {
                    return 4900 * 100 / window.innerWidth + 'vw'
                },
                onComplete() {
                    self.onCircleAnimationEnd();
                }
            })
            gsap.to('.main-about-title', {
                scrollTrigger: {
                    trigger: '.trigger-wrapper-about',
                    start: 'top+=600 top',
                    end: 'top+=1000 top',
                    scrub: 1,
                },
                y: () => {
                    return -100 * 100 / window.innerWidth + 'vw'
                },
                color: '#afa3a3'
            })
            gsap.to('.main-about-name', {
                scrollTrigger: {
                    trigger: '.trigger-wrapper-about',
                    start: 'top+=500 top',
                    end: 'top+=900 top',
                    scrub: 1,
                },
                y: () => {
                    return -350 * 100 / window.innerWidth + 'vw'
                },
            })
            gsap.to('.main-about-text', {
                scrollTrigger: {
                    trigger: '.trigger-wrapper-about',
                    start: 'top+=530 top',
                    end: 'top+=930 top',
                    scrub: 1,
                },
                y: () => {
                    return -350 * 100 / window.innerWidth + 'vw'
                },
            })
            gsap.to('.main-about-video-shadow', {
                scrollTrigger: {
                    trigger: '.trigger-wrapper-about',
                    start: 'top+=530 top',
                    end: 'top+=930 top',
                    scrub: 1,
                },
                left: 0,
                top: 0,
            })
            gsap.to('.main-about-video', {
                scrollTrigger: {
                    trigger: '.trigger-wrapper-about',
                    start: 'top+=560 top',
                    end: 'top+=960 top',
                    scrub: 1,
                },
                y: () => {
                    return -350 * 100 / window.innerWidth + 'vw'
                },
            })
            gsap.to('.main-about-advantages', {
                scrollTrigger: {
                    trigger: '.trigger-wrapper-about',
                    start: 'top top',
                    end: 'bottom center',
                    scrub: 1,
                    // markers: true,
                    pin: true,
                    // pinSpacing: false
                },
                right: '100%'
            })
        }
    }
}

export default mainAbout;