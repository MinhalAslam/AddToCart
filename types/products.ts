import { Slug } from "sanity";

export interface Product {
    _id : string;
    category :string;
    name : string;
    _type : "product";
    image? : {
        assets :{
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description? : string;
    tags: string;
    quantity: number;
    slug : {
        _type : Slug;
        current : string;
    }
    
}