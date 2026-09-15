export type City={id:string;name:string;country:string;center:number[];zoom:number};
export type Review={categories?:('food'|'drinks')[];id:string;name:string;city:string;country:string;score:string;scoreLabel:string;caption:string;date:string;type:string;images:string[];coords:number[]|null;locationNote:string;status:string;source:string;ocr?:string;reason?:string;video?:boolean};
