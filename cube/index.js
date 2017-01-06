(function(window) {
  let cube;
  window.setup = function setup() {
    cube = new window.objects.Cube();
  };

  window.draw = function draw() {
    cube.update();
  };

  window.mouseDragged = function mouseDragged(e) {
    cube.add(e.movementX, e.movementY);
  };
})(window);
