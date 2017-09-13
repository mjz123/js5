/**
 * Created by hasee on 2017/9/11.
 */
// function loadXMLDoc() {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         xmlhttp = new ActiveXObject("Microsoft.XML");
//     }
//
//     xmlhttp.open("GET", "", true);
//     xmlhttp.send();
//
//     xmlhttp.onreadystatechange=function () {
//         if(xmlhttp.readyState==4 && xmlhttp.status==200){
//
//         }
//     }
// }

$(function () {
   $(".login").click(function () {
       var x = $(".name").val();
       var y = $(".password").val();

       if ( x == "" || y == "" ){
           $("#msg").text("请输入用户名或密码");
       } else {
           $.post("/carrots-admin-ajax/a/login",
           {
               "name":x,
               "pwd":y
           },
           function (data) {
               // console.log(data);
              var obj = JSON.parse(data);
              if (obj.message == "success"){
                  window.location.href="http://dev.admin.carrots.ptteng.com/#/login";
              } else {
                  $("#msg").text(obj.message);
              }
           })}
   })
});
