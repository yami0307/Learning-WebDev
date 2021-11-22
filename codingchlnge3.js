const person1 = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = (this.mass)/(this.height ** 2);
        return this.bmi;
    }
};
const person2 = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = (this.mass)/(this.height ** 2);
        return this.bmi;
    }
};

person1.calcBMI() > person2.calcBMI() ? console.log(`${person1.fullName}'s BMI (${person1.bmi}) is higher than ${person2.fullName}'s (${person2.bmi}) !`) : console.log(`${person2.fullName}'s BMI (${person2.bmi}) is higher than ${person1.fullName}'s (${person1.bmi}) !`)
