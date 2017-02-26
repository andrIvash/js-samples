/**
 * Слайдер в ООП стиле с поддержкой состояний
 */
import {SliderBase} from './slider-base';
import {Slide} from './slide';

export default (function() {
  var slider = new SliderBase();
  if(slider.data) {
      slider.render('body');
      var slide = new Slide();
      slide.show();
  }
  console.log('slider load'); 
})();
