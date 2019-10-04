export class Books{
   id:number=0;
   title:string="";
   price:number=0;
   author:string="";
   image:string=""

   constructor(id,title,price,author,image){
       this.id=id;
       this.title=title;
       this.price=price;
       this.author=author;
       this.image=image;
   }
}