export class Product {
    productId: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
    AddedToCart = false;
    ErrorMsgDisplay = false;
    QtyTobeAdded = 0;
    QtyInCart: number;
    ErrorMsg:  string;

    constructor() {
    }
}
