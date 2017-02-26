/**
 * Класс слайд
 */
import {SliderBase} from './slider-base';
/**
* @constructor
* @extends {SliderBase}
*/
export function Slide () {

   this._activeSlide = 0;
   this.container = document.querySelector(this.container);
   this.title = this.container.querySelector('.slide__title');

  this._nextButton = this.container.querySelector('.slide__btn_next');
  this._prevButton = this.container.querySelector('.slide__btn_prev');
  this._onChangeSlide = this._onChangeSlide.bind(this);
  this._nextButton.addEventListener('click', this._onChangeSlide);
  this._prevButton.addEventListener('click', this._onChangeSlide);
}

Slide.prototype = Object.create(SliderBase.prototype);
Slide.prototype.constructor = Slide;

/**
* добавляем слайд
*/
Slide.prototype.show = function() {
  //this.element.classList.remove('hidden');
  this.title.textContent = this.data[this._activeSlide].title;
};

/**
* удаляем слайд
*/
Slide.prototype.hide = function() {
  //this.element.classList.add('hidden');
  this._nextButton.removeEventListener('click', _onChangeSlide);
  this._prevButton.removeEventListener('click', _onChangeSlide);
};
/**
 * Обработчики нажатия на кнопку
 * @param {event} evt
 */
 Slide.prototype._onChangeSlide = function(evt) {
   var target = evt.target;
   if(target.dataset.direction === 'next') {
      if(this._activeSlide < this.data.length - 1){
          this._activeSlide++;
      } else {
        this._activeSlide = 0;
      }
   }
   if(target.dataset.direction === 'prev') {
      if(this._activeSlide > 0){
          this._activeSlide--;
      } else {
        this._activeSlide = this.data.length -1;
      }
   }
   this.show();
 };
