console.log("---- bankSBI object ---- ");
let bank = {
    bankName: "SBI",
    accountNumber: "335387194036",
    ifscCode: "SBIN0008321",
    accountType: "Saving Account"
};
console.log(typeof bank);
console.log(bank);


console.log('=====bankLocation Object=====')
let loc={
    street:"Satara Road",
    city:"Satara",
    pin:"415002"
};
console.log(typeof loc);
console.log(loc);


console.log('=====clone bankSbi and bankLocation objects=====')
console.log(typeof bank);
console.log(bank);
console.log(typeof loc);
console.log(loc);


console.log('=====rateOfIntrest Objects=====')
let rate={
    homeLoanIntrest:"8.50%",
    personalLoanIntresst:"10.80%",
    dueIntrest:"11%"

}
console.log(typeof rate);
console.log(rate);

console.log('=====The Bank Details Is=====')
let details={
    bankName:"SBI",
    acholderName:"Aditya",
    acNo:"35983871940",
    ifscCode: "SBIN0008321",
    street:"Satara Road",
    pin:"415002"
    
}
console.log(typeof details);
console.log(details);

console.log(`======== Traversing Object ============`);
for (const key in details){
    if (Object.prototype.hasOwnProperty.call(details, key)) {
        const element = details[key];
        console.log( `${key} =  ${element}`);
    }
}
 for (const key in rate){
        if (Object.prototype.hasOwnProperty.call(rate, key)) {
            const element = rate[key];
            console.log( `${key} =  ${element}`);
        }   
    }  





