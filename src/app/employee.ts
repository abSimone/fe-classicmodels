export default class Employee {
public employeeNumber: string;
public lastName: string;
public firstName: string;
public extension: string;
public email: string;
public officeCode: string;
public reportsTo: string;
public jobTitle: string;

constructor(employeeNumber: string, lastName: string, firstName: string, extension: string, email: string, officeCode:
string, reportsTo: string, jobTitle: string){
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
