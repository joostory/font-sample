(function() {
  var selector = document.getElementById('font-selector');
  var sample = document.getElementById('font-sample');

  selector.onchange = function(e) {
    sample.style.fontFamily = e.target.value;
  }
})();