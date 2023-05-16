class Color{
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    
    rgba(){
        const {r,g,b} = this;
        return `rgba(${this.r},${this.g},${this.b},${this.a})`
    }

    rgb(){
        const {r,g,b} = this;
        return `rgb(${this.r},${this.g},${this.b})`
    }

    hex(){
        const {r,g,b} = this;
        return '#'+((1<<24)+(this.r<<16)+(this.g<<8)+this.b).toString(16).slice(1);
    }
}