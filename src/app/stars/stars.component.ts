import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
    

  //将父组件的属性传递给子组件,外部可以控制的
  @Input()
  private rating: number = 0;
  //子组件属性影响父组件
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();


  private stars: boolean[];

  @Input()
  private readonly: boolean = true;//判断星星是否可以更改，true为只读状态

  constructor() { }

  ngOnInit() {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
  }
  }
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);//发射新的rating值
    }

  }
}
