 var _index5 = 0;
 $("#four_flash .but_right").click(function() {
     _index5++;
     var len = $("#four_flash .othermore ul li").length;
     //   if (_index5 + 5 > len) {
     //   $("#four_flash .othermore ul").stop().append($("#four_flash ul.mobile").html());
     //  }
     $("#four_flash .othermore ul").stop().animate({
         left: -_index5 * 326
     }, 1000);
 });


 $("#four_flash .but_left").click(function() {
     if (_index5 == 0) {
         $("#four_flash ul.mobile").prepend($("#four_flash ul.mobile").html());
         $("#four_flash ul.mobile").css("left", "-1380px");
         _index5 = 6
     }
     _index5--;
     $("#four_flash .othermore ul.mobile").stop().animate({
         left: -_index5 * 326
     }, 1000);
 });
 $("#four_flash .but_right").click(
     function() {
         $("#four_flash .but_left").removeClass("visi");
     }
 );
 var mobile = document.getElementById("mobile").getElementsByTagName("li");
 var filmbox = document.getElementById("filmbox").getElementsByTagName("table");
 for (var i = 0; i < mobile.length; i++) {
     mobile[i].onclick = showlist;
 }

 function showlist() {
     for (var i = 0; i < mobile.length; i++) {
         if (mobile[i] === this) {
             mobile[i].classList.add("curr");
             filmbox[i].classList.remove("none");
         } else {
             mobile[i].classList.remove("curr");
             filmbox[i].classList.add("none");
         }
     }
 }

 var radio = document.getElementById("featureFilter").getElementsByTagName("i");
 for (var j = 0; j < radio.length; j++) {
     radio[j].onclick = selectIco;

 }

 function selectIco() {
     for (var j = 0; j < radio.length; j++) {
         if (radio[j] === this) {
             if (radio[j].getAttribute("class") == "ico_radio ico") {
                 radio[j].classList.remove("ico");
             } else if (radio[j].getAttribute("class") == "ico_radio") {
                 radio[j].classList.add("ico");
             }
         }
     }
 }