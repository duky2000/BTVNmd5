import {Component, OnInit} from '@angular/core';

// interface Product{
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }
class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  list: Product[] = []
  id: number = 0;
  name: string = "";
  price: number = 0;
  quantity: number = 0;

  constructor() {
    this.list.push(new Product(1, "ôto", 500000, 5))
    this.list.push(new Product(2, "xemay", 700000, 10))
    this.list.push(new Product(3, "xedap", 600000, 15))
  }

  ngOnInit(): void {
  }

  // createProduct(id: number, name: string, price: number, quantity: number) {
  //   this.list.push({id, name, price, quantity})
  // }


  // editProduct(id: number, name: string, price: number, quantity: number) {
  //   for (let i = 0; i < this.list.length; i++) {
  //     if (this.list[i].id === id) {
  //       this.list[i] = {id, name, price, quantity}
  //     }
  //   }
  // }


  // deleteProduct(id: any) {
  //   this.list = this.list.filter(product => {
  //     return product.id !== id;
  //   })
  // }

  createProduct() {
      this.list.push(new Product(this.id,this.name,this.price,this.quantity))
    this.id = 0;
    this.name = "";
    this.price = 0;
    this.quantity = 0;
    }

  deleteProduct(name: any) {
    for (let i = 0; this.list.length; i++) {
      if (this.list[i].name === name) {
        this.list.splice(i, 1)
        return;
      }
    }
  }
  showEdit(name: any) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].name === name) {
        this.id = this.list[i].id;
        this.name = this.list[i].name;
        this.price = this.list[i].price;
        this.quantity = this.list[i].quantity;
        return;
      }
    }
  }

  editProduct(name: any) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].name === name) {
        this.list[i] = new Product(this.id,this.name, this.price, this.quantity);
        // this.id = 0;
        // this.name = '';
        // this.price = 0;
        // this.price = 0;
        return;
      }
    }
  }

}
