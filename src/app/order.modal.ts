import {Books} from "./book.modal"
export class Order{
    name:string="";
    line1:string="";
    line2:string="";
    city:string="";
    state:string="";
    content:Books[]=[];
    credit:string="";

    constructor(name,line1,line2,city,state,credit){
        this.name=name;
        this.line1=line1;
        this.line2=line2;
        this.city=city;
        this.state=state;
        this.credit=credit;
    }
}