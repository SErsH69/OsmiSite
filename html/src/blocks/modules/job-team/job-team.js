import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobTeam = class jobTeam {
    constructor() {}
    init() {
        if (!document.querySelector(".job_tree_item")) return;
        gsap.utils.toArray(".job_tree_item").forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "bottom-=50 bottom-=50", 
                    end: 'bottom-=50 bottom-=50',
                    // markers: true,
                },
                fillOpacity: 1,
                strokeOpacity: 1,
            })
        });
        // Array.from(document.querySelectorAll('.job_tree_item')).map(item => {
        //     gsap.to(item, {
        //         scrollTrigger: {
        //             trigger: item,
        //             start: "center center", 
        //             end: 'center center',
        //             markers: true,
        //         },
        //         fillOpacity: 1
        //     })
        // })
        gsap.to('.job-team-title', {
            scrollTrigger: {
                trigger: '.job-info',
                start: 'center center',
                end: 'bottom+=1000 center',
                scrub: 1,
            },
            // color: '#121423'
        })
        gsap.to('.job-team-circle', {
            scrollTrigger: {
                trigger: '.job-info',
                start: 'center center',
                end: 'bottom+=1000 center',
                scrub: 1,
                // onUpdate: (item) => {
                //     if (window.innerWidth < 1023) {
                //         if (item.progress > 0.11) {
                //             document.querySelector('.job-team-title').classList.add('colorChanged');
                //         } else {
                //             document.querySelector('.job-team-title').classList.remove('colorChanged');
                //         }
                //     } else {
                //         document.querySelector('.job-team-title').classList.remove('colorChanged');
                //     }
                // },
                // markers: true
            },
            width: () => {
                return 6200 * 100 / window.innerWidth + 'vw'
            },
            height: () => {
                return 4900 * 100 / window.innerWidth + 'vw'
            },
        })
    }
}

export default jobTeam;