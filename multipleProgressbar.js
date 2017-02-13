var startColor = '#FF4B2A';
var endColor = '#A41C22';

window.onload = function onLoad() {
  window.index = 0;
  var progressBars =["progress0", "progress1", "progress2","progress3","progress4","progress5","progress6","progress7","progress8","progress9","progress10","progress11","progress12"]
  function createBarProgress(divId){
    var bar = new ProgressBar.Line('#'+divId, {
      strokeWidth: 4,
      color: startColor,
      duration: 1400,
      easing: 'bounce',
      trailColor: '#414141',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '4px'},
      text: {
        style: {
          color: '#FFF',
          position: 'absolute',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        bar.path.setAttribute('stroke', state.color);
      }
    });
    var value = ($('#'+divId).attr('value') / 100);
    bar.animate(value, {
      from: {color: startColor},
      to: {color: endColor}
    });
  }
  for(var i=0;i<progressBars.length;i++){
    createBarProgress(progressBars[i]);
  }
};
