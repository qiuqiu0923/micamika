// 依赖配置
require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery", "artTemplate","fly","cookie","load" ], function($,template,fly){
             // 调取ajax；
             $.ajax({
                type : "get",
                url : "/mock/allcake.json",
                dateType : "json",
                success : function(data){
                    var prod = data.res_body.products;
                    // console.log(prod)
                    var html = template("temp",{products:prod});
                    // console.log(html)
                    $(".temp").append(html);
                    // alert("hehe")
                    // console.log($(".temp"))

                }
            });
             $(function(){

             // nav js
             $("#choose_nav").on("click", $('span'), function(e){
                       // var src = e.target;
                    // console.log("hehe")
             });
            $(".first").on("click",function(){
                var a = $(".mock_template");
                a.sort(function(x,y){
                    return x -y;
                })
                console.log(a)
            })
// ...抛物线效果.
        

        $(".temp").on("click",".add_cart",function(e){
                 // console.log("result")
                 var num = 1;    
                var num2 = Number($(".checkd_value").val());
                // $(".checkd_value").val(num2+= num)
                $(".cart span").text(num2 += num - 1);
                var box  = $(this).parents(".mock_template");
                // console.log(box);

                var currentProduct = {
                    img : box.children('.img').attr("src"),
                    prod_name : box.find(".prod_name").text(),
                    prod_price : box.find(".prod_price").text(),
                    prod_info : box.children(".prod_info").text(),
                    price :box.children(".price").text(),
                    amount : 1  
                }
                console.log(currentProduct.img)
                $.cookie.json = true;
                // 先读取已有的购物车 cookie
                var products = $.cookie("products") || [];
                    products.push(currentProduct);
                // 判断已有选购商品中是否当前商品被选购过
                // var index = exist(currentProduct.prod_info, products);
                // if (index !== -1) {
                //     products[index].amount++;
                // } else{
                //     products.push(currentProduct);
                // }

                var coo = $.cookie("products", products , {path:"/" ,expires:10});
                console.log(currentProduct ,coo)
                var flyer = $(`<img src="../imgs/cake_logo.jpg">`),
                  offset = $(".cart_side").offset(),
                  top_ = offset.top - $(window).scrollTop(),
                  left_ =offset.left;  
                   // console.log(flyer)
                flyer.fly({
                  start:{
                    left:e.clientX,
                    top:e.clientY
                  },
                  end:{
                    left:left_,
                    top:top_,
                    width:0,
                    height:0
                  }
                });


            });

            // ........加减del&&add.........
$(".temp").on('click', '.add', function(event) {
   var src =  $(this).parents(".to_cart"),
        num = 1,
        tmp = src.find($(".checkd_value")),
        tmp2 = Number(tmp.val());
         tmp.val(tmp2+=num)
 });
$(".temp").on('click', '.del', function(event) {
   var src =  $(this).parents(".to_cart"),
        num = 1,
        tmp = src.find($(".checkd_value")),
        tmp2 = Number(tmp.val());
        tmp.val(tmp2-=num)       
        if((tmp2 -=num) < 1 ){
            tmp.val(1)
        }    
 });


// 
//     // var src = event.target;
//          num2 += num;
//         $(".checkd_value").val(num2);
//         // src.val() = num;
//     console.log(num2);
//     console.log(num)
//     // console.log(src)

//

             })


        });
	});
// var xhr = new XMLHttpRequest();
//             xhr.onreadystatechange = function(){
//                 if (xhr.readyState == 4 && xhr.status == 200) {
//                     alert("")
// }else{
//     alert("")
// }
//             }
//             xhr.open("get","/mock/allcake.json",true);
//             xhr.send();
