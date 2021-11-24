import { Categorie } from './categorie-model';

export class risque{
    id:number;
    evenclenchant:string;
    type:string;
    explmsr:string;
    categorie:Categorie;

    constructor(){
    }
    /*
    get id():number{
        return this._id;
    }

    get evenclenchant():string{
        return this._evenclenchant;
    }
    set evenclenchant(evenclenchant:string){
        this._evenclenchant=evenclenchant;
    }

    get type():string{
        return this._type;
    }
    set type(type:string){
        this._type=type;
    }

    get explmsr():string{
        return this._explmsr;
    }
    set explmsr(explmsr:string){
        this._explmsr=explmsr;
    }

    get categorie():Categorie{
        return this._categorie;
    }
    set categorie(categorie:Categorie){
        this._categorie=categorie;
    }
    */
}