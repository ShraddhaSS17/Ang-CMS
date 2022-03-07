export class College {
    name: string;
    email: string;
    phoneNumber: number;
    college: string;
    Degree:string;
    
    constructor(name: string, email: string, college: string, phoneNumber: number,Degree:string){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.college = college;
        this.Degree= Degree;
    }
 }

 export class User {
    constructor(){
        
        this.email = '';
        this.password = '';
        this.fullname= '';
    }
    public email;
    public password;
    public fullname;

 }

