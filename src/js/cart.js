// 依赖配置
require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery",  "artTemplate","load"], function($ , template){

    $.cookie.json = true;
  // 读取 cookie 中保存的购物车
   var _products = $.cookie("products") || [];
   // var price = _products.price;
   // console.log(price)
  // console.log(_products)
  if(_products.length === 0)
    return;
  // 利用 artTemplate 来渲染模板
  var html = template("temp2", {products: _products});
  // console.log(html)

  $(".temp_cart").html(html);
  // $(".sum_price").text("")



	});
});
