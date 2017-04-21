/**
 * Класс галерея
 */
import {SliderBase} from './slider-base';

/**
* @constructor
* @extends {SliderBase}
*/
export function Gallery () {
  /**
   * @type{element}
   */
  this.element = document.querySelector('.gallery');
  /**
   * @type{?SlideData}
   */
  this._data = null;
  /**
   * @type{element}
   */
  this._closeButton = this.element.querySelector('.gallery__close');
  /**
   * @param{Object}
   */
  this._onCloseClick = this._onCloseClick.bind(this);
}

/**
* показываем галерею
*/
Gallery.prototype.show = function() {
  this.element.classList.remove('hidden');
  this._closeButton.addEventListener('click', this._onCloseClick);
};

/**
* удаляем галерею
*/
Gallery.prototype.remove = function() {
  this.element.classList.add('hidden');
  this._closeButton.removeEventListener('click', this._onCloseClick);
};
/**
 * Обработчик клика по крестику
 * @private
 */
 Gallery.prototype._onCloseClick = function() {
   this.hide();
 };
