import gsap from 'gsap';
import interact from 'interactjs';
import $ from 'jquery';
const mainCarousel = class MainCarousel {
    constructor() {}
    onCarouselChange() {}
    init() {
        var self = this;
        var carousel = document.querySelector('.main-carousel-carousel');
        if (!carousel) return;
        var cells = carousel.querySelectorAll('.main-carousel-cell');
        var cellCount; // cellCount set from cells-range input value
        var selectedIndex = 0;
        var cellWidth = carousel.offsetWidth;
        var cellHeight = carousel.offsetHeight;
        var isHorizontal = true;
        var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        var radius, theta;

        var maxTitlesHeight = Math.max.apply(null, $(".main-carousel__text-item_titles .title").map(function ()
        {
            return $(this).height();
        }).get());
        var maxTextsHeight = Math.max.apply(null, $(".main-carousel__text-item_texts .text").map(function ()
        {
            return $(this).height();
        }).get());


        function rotateCarousel() {
            
            self.onCarouselChange();
            var angle = theta * selectedIndex * -1;
            $(`.main-carousel__text-item_gifts .badge`).css({
                'transform': `translateY(-50%) translateX(50%) rotate(${angle}deg)`
            })
            $(`.main-carousel__text-item_gifts .badge`).text(Math.round(360 / cellCount * (selectedIndex % cellCount)));
            $(`.main-carousel__grades .from`).text(Math.round(360 / cellCount * (selectedIndex % cellCount)));
            if (Math.round(360 / cellCount * (selectedIndex % cellCount)) < 0) {
                $(`.main-carousel__grades .from`).text(Math.round(360 / cellCount * (selectedIndex % cellCount)) * -1 );
            }
            $(`.main-carousel__text-item_gifts .left__in`).css({
                'transform': `rotate(${angle * -1}deg)`
            })
            carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
                rotateFn + '(' + angle + 'deg)';
            var cells = carousel.querySelectorAll('.main-carousel-cell');
            document.querySelectorAll(`.main-carousel__text-item_titles .title`).forEach(item => {
                item.classList.remove('isActive');
            })
            if (document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${(selectedIndex % cellCount) + 1}"]`)) {
                document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${(selectedIndex % cellCount) + 1}"]`).classList.add('isActive');
            }
            gsap.to(document.querySelectorAll(`.main-carousel__text-item_titles`), {
                height: maxTitlesHeight
            }) 
            document.querySelectorAll(`.main-carousel__text-item_texts .text`).forEach(item => {
                item.classList.remove('isActive');
            })
            if (document.querySelector(`.main-carousel__text-item_texts .text[data-text-id="${(selectedIndex % cellCount) + 1}"]`)) {
                document.querySelector(`.main-carousel__text-item_texts .text[data-text-id="${(selectedIndex % cellCount) + 1}"]`).classList.add('isActive');
            }
            gsap.to(document.querySelectorAll(`.main-carousel__text-item_texts`), {
                height: maxTextsHeight
            })
            // $(`.main-carousel__text-item_gifts .gift`).each(function() {
            //     $(this).hide('fast');
            // }) 
            // $(`.main-carousel__text-item_gifts .gift[data-gift-id="${(selectedIndex+1) % +cellCount}"]`).show('fast');
            // document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${selectedIndex}"]`).classList.add('isActive');
        }

        var prevButton = document.querySelector('.previous-button');
        prevButton.addEventListener( 'click', function() {
            selectedIndex--;
            rotateCarousel();
            clearInterval(interval);
        });

        var nextButton = document.querySelector('.next-button');
        nextButton.addEventListener( 'click', function() {
            selectedIndex++;
            rotateCarousel();
            clearInterval(interval);
        });

        var cellsRange = document.querySelector('.cells-range');
        cellsRange.addEventListener( 'change', changeCarousel );
        cellsRange.addEventListener( 'input', changeCarousel );



        function changeCarousel() {
        cellCount = cellsRange.value;
        theta = 360 / cellCount;
        var cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
        for ( var i=0; i < cells.length; i++ ) {
            var cell = cells[i];
            if ( i < cellCount ) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
            } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
            }
        }

        rotateCarousel();
        }

        var orientationRadios = document.querySelectorAll('input[name="orientation"]');
        ( function() {
        for ( var i=0; i < orientationRadios.length; i++ ) {
            var radio = orientationRadios[i];
            radio.addEventListener( 'change', onOrientationChange );
        }
        })();

        function onOrientationChange() {
        var checkedRadio = document.querySelector('input[name="orientation"]:checked');
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        changeCarousel();
        }
        function chooseElem(index) {
            if (selectedIndex == index) return;
            selectedIndex = index;
            rotateCarousel();
        }

        document.addEventListener('click', function(event) {
            if (event.target.dataset.cellIndex) {
                chooseElem(event.target.dataset.cellIndex - 1);
                clearInterval(interval);
            }
        });
        var interval = setInterval(function () {
            selectedIndex++;
            rotateCarousel();
        }, 5000);

        // set initials
        onOrientationChange();
        let starCoord = 0;
        
        if (window.innerWidth <= 1023) {
            interact('.main-carousel').draggable({
                origin: 'self',
                inertia: true,
                listeners: {
                    move (event) {}
                }
            }).on('dragstart', (event) => {
                starCoord = event.clientX;
            }).on('dragend', (event) => {
                if (starCoord > event.clientX) {
                    selectedIndex++;
                    rotateCarousel();
                    clearInterval(interval);
                } else {
                    selectedIndex--;
                    rotateCarousel();
                    clearInterval(interval);
                }
            })
        }

    }
}


export default mainCarousel;