function processLowerIENavigate()
{
   var isIE = document.all ? 1 : 0;
   if (isIE == 1)
   {
       if(navigator.userAgent.indexOf("MSIE7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0)
       {  
    //  var doc=document; 
           var link=document_createElement_x_x_x("link");
           link.setAttribute("rel", "stylesheet");
           link.setAttribute("type", "text/css");
           link.setAttribute("id", "size-stylesheet");
           link.setAttribute("href", "");
  
           var heads = document.getElementsByTagName_r("head");
           if(heads.length)
               heads[0].a(link);
           else
               document.documentElement.a(link);

           document.write("");
           document.write("");
  
       }
   } 
}
var lowerIE8 = processLowerIENavigate();
// media_screen.js文件内容如下，直接从网上copy：
function adjustStyle(width) {
    width = parseInt(width);
    if (width < 902) {
//alert("<900");
//alert(width);
        $("#size-stylesheet").attr("href", "navigateLowerIE8.css");
    } else {
      // alert(">900");
  //alert(width);
       $("#size-stylesheet").attr("href", ""); 
    }
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});