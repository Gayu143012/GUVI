class UberPrice {
    constructor(pricePerKm, numberOfKm) {
        this._pricePerKm = pricePerKm;
        this._numberOfKm = numberOfKm;
    }

    getPricePerKm() {
        return this._pricePerKm;
    }

    getNumberOfKm() {
        return this._numberOfKm;
    }

     // Method to get all details
     getDetails() {
        return `Price per Km: $${this._pricePerKm} ,Number of Km: ${this._numberOfKm}  `;
    }
    // Method to calculate price
    calculatePrice() {
        return this._pricePerKm * this._numberOfKm;
    }

   
}

let uberPrice = new UberPrice(1.75, 10); // price per km, number of km

console.log(`Price per Km: $${uberPrice.getPricePerKm()}`);
console.log(`Number of Km: ${uberPrice.getNumberOfKm()}`);
console.log(uberPrice.getDetails());

let totalCost = uberPrice.calculatePrice();
console.log(`Total Uber Cost: $${totalCost.toFixed(2)}`);


