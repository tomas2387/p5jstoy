(function(objects) {
    class Cube {
        constructor() {
            createCanvas(550, 550, WEBGL);
            this.valueX = 200;
            this.valueY = 200;
        }

        update() {
            background(200);
            rotateX(-this.valueY/100);
            rotateY(-this.valueX/100);
            box(200, 200, 200);
        }

        add(x, y) {
            this.valueX+=x;
            this.valueY-=y;
        }
    }

    objects.Cube = Cube;
})(typeof window.objects === 'undefined' ? window.objects = {} : window.objects);
