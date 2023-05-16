class Pet{
    constructor(Name,age){
        console.log('cosntructor called !!!')
        this.Name = Name;
        this.age = age;
    }
    eat(){
        return `${this.Name} is eating`;
    }
}

/// Extend Keyword is used to inherit the properties (Inheritance)
class Dog extends Pet{
    bark(){
        return `WOOFFF!`
    }
}

// Super Keyword is used for copying constructor of Base class's Constructor
class Cat extends Pet{
    constructor(Name,age,live= 8){
        console.log('cosntructor called !!!')
        super(Name,age);
        this.live = live;
    }
    meow(){
        return `MEOOOWWW!`
    }
}