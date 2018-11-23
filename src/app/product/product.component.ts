import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
//import 'rxjx/Rx';
import { map, filter, scan, publishReplay, refCount, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  //存储展示在页面的商品数据
  private products: Product[];
  private imgUrl = 'http://placehold.it/320x150';

  private keyword: string;
  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .subscribe(
      value=>this.keyword = value
    )
  }

  ngOnInit() {

    this.products = this.productService.getProducts();
  }

}
