export class CCustomer {
    customerNumber:number
    customerName:string
    contactLastName:string
    contactFirstName:string
    phone:string
    addressLine1:string
    addressLine2:string
    city:string
    state:string
    postalCode:string
    country:string
    salesRepEmployeeNumber:string
    creditLimit:string

    constructor(customerNumber:number, customerName:string, contactLastName:string, contactFirstName:string,phone:string, addressLine1:string, addressLine2:string, 
        city:string, state:string, postalCode:string, country:string, salesRepEmployeeNumber:string, creditLimit:string){
        this.customerNumber = customerNumber
        this.customerName = customerName
        this.contactFirstName = contactFirstName
        this.contactLastName = contactLastName
        this.phone = phone
        this.addressLine1 = addressLine1
        this.addressLine2 = addressLine2
        this.city = city
        this.state = state
        this.postalCode = postalCode
        this.country = country
        this.salesRepEmployeeNumber = salesRepEmployeeNumber
        this.creditLimit = creditLimit
    }

    
}
