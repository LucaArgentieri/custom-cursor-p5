import p5 from "p5";

interface options {
    background?: Boolean;
    backgroundColor?: String;
    cursor?: Boolean;
    size?: { width?: Number; height?: Number };
    colorAtClick?: Boolean;
    clickedColor?: String;
    fill?: Boolean;
    fillColor?: String;
    stroke?: Boolean;
    strokeColor?: String;
    strokeWeight?: Number;
    shape?: String;
    ease?: Boolean;
    easeValue?: Number;
}

export const customCursor = (options?: options) => {
    const customCursorArea: Array<HTMLElement> = Array.from(document.querySelectorAll("[custom-cursor-area]"));

    customCursorArea.forEach((area: HTMLElement) => {
        const sketch = new customCursorCanvas(area, options);
        sketch.init();
    });
};

class customCursorCanvas {
    area: HTMLElement;
    options?: options;
    easingVariables: {
        x: number;
        y: number;
        easing: any;
        dx: number;
        dy: number;
    };

    constructor(area: HTMLElement, options?: options) {
        this.area = area;
        this.options = options;
        this.easingVariables = {
            x: 1,
            y: 1,
            easing: this.options?.easeValue,
            dx: 0,
            dy: 0
        }
    }

    init() {
        this.sketch(new p5(this.sketch), this.area);
    }

    sketch(p: any, area: HTMLElement) {


        p.setup = () => {
            //Append canvas to custom-cursor-area element
            let cnv = p.createCanvas(area.offsetWidth, area.offsetHeight);
            cnv.parent(area);

            //Cursor config
            !this.options?.cursor && p.noCursor();
        };

        p.draw = () => {
            //Background config
            !this.options?.background && p.clear();
            this.options?.background && p.background(this.options.backgroundColor || "#ffffff");

            //Fill config
            this.options?.fill ? p.fill(this.options?.fillColor || "#000000") : p.noFill();

            //Stroke config
            this.options?.stroke ? p.stroke(this.options.strokeColor || "#ffffff") : p.noStroke();
            p.strokeWeight(this.options?.strokeWeight || 0);

            //Click config
            if (this.options?.colorAtClick) {
                if (p.mouseIsPressed) {
                    p.fill(this.options.clickedColor || "#ED225D");
                }
            }


            //Easing
            this.easingVariables.dx = p.mouseX - this.easingVariables.x;
            this.easingVariables.x += this.easingVariables.dx * this.easingVariables.easing;

            this.easingVariables.dy = p.mouseY - this.easingVariables.y;
            this.easingVariables.y += this.easingVariables.dy * this.easingVariables.easing;


            //Shape
            // p.triangle(
            //     this.options?.ease ? this.easingVariables.x : p.mouseX,
            //     this.options?.ease ? this.easingVariables.y : p.mouseY,
            //     this.options?.size?.width,
            //     this.options?.size?.height
            // );

            this.createShape(p, this.options?.shape)





        };

        //Resize
        p.windowResized = () => {
            p.resizeCanvas(p.width, p.height);
        };


    }

    createShape(p, shape) {
        switch (shape) {
            case 'ellipse':
                this.createEllipse(p)
                break;
            case 'rect':
                this.createRect(p)
                break;
            case 'point':
                this.createPoint(p)
                break;

            default:
                this.createPoint(p)
                break;
        }

    }

    createEllipse(p) {
        p.ellipse(
            this.options?.ease ? this.easingVariables.x : p.mouseX,
            this.options?.ease ? this.easingVariables.y : p.mouseY,
            this.options?.size?.width,
            this.options?.size?.height
        );
    }

    createRect(p) {
        p.rect(
            this.options?.ease ? this.easingVariables.x : p.mouseX,
            this.options?.ease ? this.easingVariables.y : p.mouseY,
            this.options?.size?.width,
            this.options?.size?.height
        );
    }

    createPoint(p) {
        p.point(
            this.options?.ease ? this.easingVariables.x : p.mouseX,
            this.options?.ease ? this.easingVariables.y : p.mouseY,
            this.options?.size?.width,
            this.options?.size?.height
        );
    }
}

