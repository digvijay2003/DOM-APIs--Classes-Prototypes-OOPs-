function makecolor(r,g,b){
   this.r = r;
   this.g = g;
   this.b = b;
   /* color.rgb = function (){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`
    };
    color.hex = function (){
        const {r,g,b} = this;
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    };
    return  color;*/
}

// constructor function :-
makecolor.prototype.rgba = function(a=1.0) {
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`
}

makecolor.prototype.rgb = function (){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`
};
makecolor.prototype.hex = function (){
    const {r,g,b} = this;
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
};