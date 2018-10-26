export const newsTimeFormat= (input)=>{
    return input.substr(11,5);
}
export const newsTimeFormatYM= (input)=>{
    if(typeof input !='string') return '';
    var year = new Date().getFullYear();
    var input_time = input.split('-');
    if(input_time[0] == year){
        return input_time[1] + '月' + input_time[2].substr(0,8).replace(' ','日 ');
    }else{
        return input_time[0] + '年' + input_time[1] + '月' + input_time[2].substr(0,8).replace(' ','日 ');
    }
}

// export const shareCardTimeFormatYM = (input) => {
//   if(typeof input !='string') return '';
//   var input_time = input.split('-');
//   var weekDays = ['日','一','二','三','四','五','六'];
//   var day = new Date(Date.parse(input.replace(/-/g, "/"))).getDay();
//   return input_time[0] + '-' + input_time[1] + '-' + input_time[2].substr(0,2) + ' 星期' + weekDays[day];
// }

export const shareCardTimeFormatYM = (input) => {
  if(typeof input !='string') return '';
  var input_time = input.split('-');
  return input_time[0] + '-' + input_time[1] + '-' + input_time[2].substr(0,2) + ' ' + input_time[2].substr(3,5);
}

export const turnText = (content) => {
  if(typeof content !='string') return '';
  var _content = content.replace(/<(?!\/?br\/?.+?>|\/?img.+?>)[^<>]*>/gi,'');
  return _content;
}

export const tagTimeFormat = (input)=>{
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    var day = now.getDate() > 9 ? now.getDate(): '0' + now.getDate();
    var input_time = input.split('-');
    if(input_time[0] == year){
        if(input_time[1] == month){
            if(input_time[2].substr(0,2) == day){
                return '今天';
            }else{
                return input_time[1] + '月' + input_time[2].substr(0,2) + '日';
            }
        }else{
            return input_time[1] + '月' + input_time[2].substr(0,2) + '日';
        }
    }else{
        return input_time[0] + '年' + input_time[1] + '月' + input_time[2].substr(0,2) + '日';
    }
}

export const imagesSwipe = (input)=>{
    console.log(this.$refs.myGallery);

}
