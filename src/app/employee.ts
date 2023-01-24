export default class Employee {
public employeeNumber: number;
public lastName: string;
public firstName: string;
public extension: string;
public email: string;
public officeCode: number;
public reportsTo: number;
public jobTitle: string;

constructor(employeeNumber: number, lastName: string, firstName: string, extension: string, email: string, officeCode:
number, reportsTo: number, jobTitle: string){
this.employeeNumber = employeeNumber;
this.lastName = lastName;
this.firstName = firstName;
this.extension = extension;
this.email = email;
this.officeCode = officeCode;
this.reportsTo = reportsTo;
this.jobTitle = jobTitle;
}




// public getNomeCompleto(): string {
// return `${this.nome} ${this.cognome}`;
// }
}
