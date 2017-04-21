/**
 * Слайдер в ООП стиле с поддержкой состояний
 */
import {SliderBase} from './slider-base';
import {ActiveSlide} from './activeslide';

export default (function() {
  var slider = new SliderBase();

  slider.getData('data.json').then(function(response) {
    slider.render('body');
    var activeSlide = new ActiveSlide();
    activeSlide.show();
    console.log('slider load');
  }, function(error) {
    console.error("Failed!", error);
  });

})();
