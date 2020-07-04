export class Product {
    id : number;
    name : string;
    description: string;
    price : number;
    imageUrl :string;

    constructor(id, name, description='', price=0, imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEKVHkKu0aXupFBB4vGoQjGepPTOOGLZ6G18jyS8Aq1ranVHiS&usqp=CAU'){
    this.id=id;
    this.name=name;
    this.description=description;
    this.price=price;
    this.imageUrl=imageUrl;

    


    }

}
