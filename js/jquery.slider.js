//------------------------------------------------------------------------------插件里面的this不用包
//------------------------------------------------------------------------------this==$('#ul')=>则this.find('ol li')==$('#ul ol li')
//this.find('ol li');==$('#ul').find('ol li')==$('#ul ol li')


$.fn.slider=function(options){//------------------------------------------------传了用你的不传就用默认的

  options.speed=options.speed||2000;//-------------------------------------------不传相当于空json

  options.type=options.type||'swing';

  var _this=this;//-------------------------------------------------------------用变量将this存起来因为this隔了一层就变了
  var $aBtn=this.find('ol li');
  var now=0;
  $aBtn.click(function(){
    now=$(this).index();
    tab();
  });
  function tab(){
    //清空所有的class
    $aBtn.removeClass('active');
    //给当前的添加class
    $aBtn.eq(now).addClass('active');

    _this.find('ul li').stop().fadeOut();
    _this.find('ul li').eq(now).stop().fadeIn();
  }
  function prev(){
    now--;
    if(now==-1) now=_this.find('ul li').length-1;
    tab();
  }
  function next(){
    now++;
    if(now==_this.find('ul li').length){
      now=0;
    }
    tab();
  }
  _this.find('.prev').click(prev);
  _this.find('.next').click(next);
//轮播
  var timer=setInterval(next,4000);
//鼠标移入移出
  _this.hover(function(){
    clearInterval(timer);
  },function(){
    timer=setInterval(next,4000);
  });
}
//插件里面的this不能用包装,它已经是jquery元素所以不用包
//$('#ul li').xxx相当于$('#ul1').find('li').xxx
//先写前面的然后再find一次
//this就是#div1即：this==$('#div1')所以：
//this.find('ol li')==$('#div1').find('ol li')==$('#div1 ol li')
//this.find('ol li')==$('.slider').find('ol li')==$('.slider ol li')
