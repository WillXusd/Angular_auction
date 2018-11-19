import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //存储展示在页面的商品数据
  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 3.5, "this is my first product", ["电子产品", "硬件设备"]),
      new Product(2, "第2个商品", 2.99, 2.5, "this is my first product", ["图书"]),
      new Product(3, "第3个商品", 3.99, 3.5, "this is my first product", ["电子产品", "硬件设备"]),
      new Product(4, "第4个商品", 4.99, 4.5, "this is my first product", ["电子产品", "硬件设备"]),
      new Product(5, "第5个商品", 5.99, 1.5, "this is my first product", ["电子产品", "硬件设备"]),
      new Product(6, "第6个商品", 6.99, 3.5, "this is my first product", ["电子产品", "硬件设备"])
   ]
  }

}
//需要有一个对象来封装我的产品信息
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,//评分
    public desc: string,//商品描述
    public categories: Array<string>//商品类别
  ) {}
}
