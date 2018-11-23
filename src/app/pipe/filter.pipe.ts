import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //第一个 传的值，第二个字段是要过滤的字段是哪个,第三个参数是用户输入的字段
  transform(list: any[], filterField: string, keyword: string): any {

    if (!filterField || !keyword) {
      return list;
    }
    return list.filter(item => {
      let fiedlValue = item[filterField];
      return fiedlValue.indexOf(keyword) >= 0;
    })
    return null;
  }

}
