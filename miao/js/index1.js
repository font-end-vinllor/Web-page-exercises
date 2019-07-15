var top_fix = document.getElementById("top-fix");
//设置当页面向下滑动，导航栏固定
window.onscroll = function() {
    var scrollheight = document.documentElement.scrollTop ||
        window.pageYOffset || document.body.scrollTop || 0;
    if (scrollheight >= 260) {
        top_fix.className = "header-top fixed clearfix";
    } else {
        top_fix.className = "header-top clearfix";
    }
}

/*   展示七个链接对应的列表 */
var menu = document.getElementById("menu").getElementsByTagName("a");
var item = document.getElementsByClassName("item");

for (var i = 0; i < menu.length; i++) {
    menu[i].onclick = showlist;
}

function showlist() {
    for (var i = 0; i < menu.length; i++) {
        if (this === menu[i]) {
            menu[i].style.color = '#333';
            item[i].classList.remove("none");
        } else {
            item[i].classList.add("none");
            menu[i].style.color = '#0088cc';
        }
    }
}


/**
 * 轮播图部分
 */
var index = 0;
var timer = null;
//获取右侧菜单栏的div
var header_menu = document.getElementById("header_menu");
var menu_divs = header_menu.getElementsByTagName("div");

var header = document.getElementById("header-main");
var banner_img = document.getElementById("banner_img");
var color_arr = ["#5d0b11", "#dae4e5", "#54514b", "#733f3b", "#afa7a5", "#291521"];
//右侧菜单效果
for (var i = 0; i < menu_divs.length; i++) {

    var menu_div = menu_divs[i];
    menu_div.index = i;
    menu_div.onmouseover = function() {
        if (timer != null) clearInterval(timer); //清除计时器
        for (var j = 0; j < menu_divs.length; j++) {
            menu_divs[j].className = "";
        }
        this.className = "menu-active";
        banner_img.style.background = "url('images/banners/banner" + this.index + ".png') no-repeat center center";
        header.style.backgroundColor = color_arr[this.index];

    };
    header_menu.onmouseout = function() {
        timer = setInterval(function() {
            index++;
            if (index >= menu_div.length) {
                index = 0;
            }
            changeImg();
        }, 3000);
    };
}

function changeImg() {
    for (var j = 0; j < menu_divs.length; j++) {
        menu_divs[j].className = "";
    }
    menu_div[index].className = "menu-active";
    banner_img.style.background = "url('images/banners/banner" + menu_div.index + ".png') no-repeat center center";
    header.style.backgroundColor = color_arr[menu_div.index];

}