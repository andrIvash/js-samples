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
export function SliderBase () {}

/** @type {?SlideData} */
SliderBase.prototype.data = null;

SliderBase.prototype.show = function() {};
SliderBase.prototype.remove = function() {};

/**
 * Получение данных
 */
 SliderBase.prototype.getData = function(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        SliderBase.prototype.data = JSON.parse(req.response).data;
        resolve('Success!');
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error('Network Error'));
    };
    req.send();
  });
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
