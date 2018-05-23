// 依赖配置
require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery", "artTemplate","fly","load" ], function($,template,fly){
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

            // .................
var num = 1;    
var num2 = Number($(".checkd_value").val());
console.log(num2);
console.log(num)
// $(".temp").on('click', '.add', function(event) {
//     // var src = event.target;
//          num2 += num;
//         $(".checkd_value").val(num2);
//         // src.val() = num;
//     console.log(num2);
//     console.log(num)
//     // console.log(src)

// });

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
