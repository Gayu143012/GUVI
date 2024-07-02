class Person {
    constructor(name, age, email, phone) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    getPhone() {
        return this.phone;
    }

     // Method to get all details
     getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
    let person = new Person("Gayathri K", 23, "gayu123@gmail.com", "9377477892");
    console.log(person.getName());
    console.log(person.getAge());
    console.log(person.getEmail());
    console.log(person.getPhone());
    console.log(person.getDetails());
