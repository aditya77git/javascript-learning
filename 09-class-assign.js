console.log(`------------ Vechicle Details ------------ `);
console.log('===== Vechicle Maruti Nexa Details =====');

class Car{
     constructor(color, model, manufacturing_year, price){

        this.color = color;
        this.model = model;
        this.manufacturing_year =manufacturing_year;
        this.price = price;
      }
      
        details(){ 
            console.log(`color: ${this.color}, model: ${this.model}, manufacturing_year: ${this.manufacturing_year}, price: ${this.price}`);  
        }
   }
            const one= new Car("Nexa Blue", "Baleno", "2024", "10Lakh");
            one.details();

            console.log('===== Vechicle Hyundai Details =====');
            const two= new Car("Black", "Creta", "2024","18Lakh");
            two.details();

            console.log('===== Vechicle Tata Details =====');
            const three= new Car("White", "Harrier", "2024","22Lakh");
            three.details();

            console.log('===== Vechicle Mahindra Details =====');
            const four= new Car("Red", "Thar Roxx", "2024","26Lakh");
            four.details();

            console.log('===== Vechicle Volkswagen Details =====');
            const five= new Car("Grey", "Virtus", "2024","27Lakh");
            five.details();

            console.log(`------------ College Details ------------ `);
            console.log('===== Y.C.I.S College Details =====');

class clg{
    constructor(city,department,university){
        this.city = city;
        this.department = department;
        this.university = university;
        
    }
        details1(){
            console.log(`City: ${this.city}, department: ${this.department}, university: ${this.university}`);
        }
}
            const six= new clg("Satara", "Science", "Shivaji");
            six.details1();

            console.log('===== DY Patil Details =====');
            const seven= new clg("Kolhapur", "Engineering", "Pune");
            seven.details1();

            console.log('===== Fergusson Details =====');
            const eight= new clg("Pune", "Commerce", "Pune");
            eight.details1();

            console.log('===== JSPM Details =====');
            const nine= new clg("Mumbai", "Law", "Pune");
            nine.details1();






