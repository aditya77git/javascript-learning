
// Class is the Blueprint or Design or Template
class Student{
    // Data Member
    // Constructor 
    constructor(fullName, city, age, isMarried){
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.isMarried = isMarried;
    }
    // Member Function or methods
    details(){
        console.log(`==== Students ${this.fullName} Details ====== `);        
        console.log(`City: ${this.city}, AGE: ${this.age}, Is Married: ${this.isMarried}`);  
    }
}

const stdElon1 = new Student("Elon Musk", "LA", 22, true);
stdElon1.details();
//console.log(stdElon.fullName);

// console.log(stdElon);

const stdStew1 = new Student("Stew Job", "Pune", 56, false);
// console.log(stdStew);
stdStew1.details();