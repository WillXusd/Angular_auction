import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  newRating: number = 5;//默认新星为5
  newComment: string = "";//默认新评论为空字符串

  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute,
  private productService: ProductService) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params["productId"];

    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductID(productId);
  }
  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);
    //计算新的平均值
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    //let sum2 = 0;
    //  this.comments.forEach(function (index) {
    //    sum2 += index.rating;
    //    return sum2;
    //});
    this.product.rating = sum / this.comments.length;


    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
