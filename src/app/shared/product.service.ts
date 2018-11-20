import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "this is my first product", ["电子产品", "硬件设备"]),
    new Product(2, "第2个商品", 2.99, 2.5, "this is my first product", ["图书"]),
    new Product(3, "第3个商品", 3.99, 3.5, "this is my first product", ["电子产品", "硬件设备"]),
    new Product(4, "第4个商品", 4.99, 4.5, "this is my first product", ["电子产品", "硬件设备"]),
    new Product(5, "第5个商品", 5.99, 1.5, "this is my first product", ["电子产品", "硬件设备"]),
    new Product(6, "第6个商品", 6.99, 3.5, "this is my first product", ["电子产品", "硬件设备"])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2018-02-02 22:22:22", "will", 3, "nice!"),
    new Comment(2, 1, "2018-02-03 21:22:22", "aison", 3, "good!"),
    new Comment(3, 1, "2018-02-04 20:22:22", "richard", 3, "bad!"),
    new Comment(4, 2, "2018-02-05 22:22:22", "sennia", 3, "why!"),
  ]

  constructor() { }
  getProducts():Product[] {
    return this.products;
  }
  //根据商品ID找到商品返回
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductID(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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
  ) { }
}

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }

}
