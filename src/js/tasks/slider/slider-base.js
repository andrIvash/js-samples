/**
 * Данные для слайдера
 * @enum{string}
 */
  var SlideData = {
     title: '',
     img: [],
     desc: '',
     skills: []
  };


/**
 * Базовый класс слайдера
 * @constructor
 */
export function SliderBase () {
  this._getData();
}

/** @type {?SlideData} */
SliderBase.prototype.data = null;
/** @type {Node=} */

SliderBase.prototype.show = function() {};
SliderBase.prototype.remove = function() {};

/**
 * Получение данных
 */
  SliderBase.prototype._getData = function() {
    console.log('get data');
    SliderBase.prototype.data = [
      {
        title: 'one',
        img: ['one.jpg'],
        desc: 'one slide',
        skills: ['one']
      },
      {
        title: 'two',
        img: ['two.jpg'],
        desc: 'two slide',
        skills: ['two']
      },
      {
        title: 'three',
        img: ['three.jpg'],
        desc: 'three slide',
        skills: ['three']
      }
    ];
  };

/**
 * Создание слайдера из шаблона
 * @param {Node=} container
 */
  SliderBase.prototype.render = function(container) {
    SliderBase.prototype.container = container;
    container = document.querySelector(container);
    var fragment = document.createDocumentFragment();
    var template = document.querySelector('#slider-template');
    var element = null;
    if('content' in template) {
      element = template.content.children[0].cloneNode(true);
    } else {
      element = template.children[0].cloneNode(true);
    }
    fragment.appendChild(element);
    container.appendChild(fragment);
    console.log('render');
  };
