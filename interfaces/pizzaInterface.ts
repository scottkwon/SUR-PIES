export interface BasePizza {
    name: String,
    toppings: Array<string>
}
  
export interface Pizza extends BasePizza {
    id: number;
}