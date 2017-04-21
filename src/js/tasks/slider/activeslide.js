/**
 * Класс слайд
 */
import {SliderBase} from './slider-base';
/**
* @constructor
* @extends {SliderBase}
*/
export function ActiveSlide () {

  this._activeSlide = 0;
  this.container = document.querySelector(this.container);
  this.title = this.container.querySelector('.slide__title');
  this.img = this.container.querySelector('.slide__img');

  this._nextButton = this.container.querySelector('.slide__btn_next');
  this._prevButton = this.container.querySelector('.slide__btn_prev');
  this._onChangeSlide = this._onChangeSlide.bind(this);
  this._nextButton.addEventListener('click', this._onChangeSlide);
  this._prevButton.addEventListener('click', this._onChangeSlide);
}

ActiveSlide.prototype = Object.create(SliderBase.prototype);
ActiveSlide.prototype.constructor = ActiveSlide;

/**
* добавляем данные в активный элемент
*/
ActiveSlide.prototype.show = function() {
  //this.element.classList.remove('hidden');
  this.title.textContent = this.data[this._activeSlide].title;
  this._imgLoad(this.img);

};

/**
* удаляем активный элемент и обработчики
*/
ActiveSlide.prototype.remove = function() {
  this._nextButton.removeEventListener('click', _onChangeSlide);
  this._prevButton.removeEventListener('click', _onChangeSlide);
};
/**
 * Загрузка картинки
 * @param {element} img
 */
 ActiveSlide.prototype._imgLoad = function(img) {
   var imgLoadTimeout = setTimeout(function() {
     img.src = '';
     img.classList.remove('no-photo');
   }, 5000);
   img.onload = function() {
     img.classList.remove('load-photo');
     clearTimeout(imgLoadTimeout);
   };
   img.src = this.data[this._activeSlide].img[0];
 };
/**
 * Обработчики нажатия на кнопку
 * @param {event} evt
 */
 ActiveSlide.prototype._onChangeSlide = function(evt) {
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
// TODO: 1. Огрнаничить количество кликов по кнопкам
// TODO: 2. Через промисы оформить пока не отобразится слайд не запускать новое событие
//
