var tabs = document.getElementById("tabs").getElementsByTagName("li");

var lists = document.getElementById("lists").getElementsByTagName("ul");


var list_nav = document.getElementById("list-nav");

window.onscroll = function() {
    var scrollheight = document.documentElement.scrollTop ||
        window.pageYOffset || document.body.scrollTop || 0;
    if (scrollheight >= 260) {
        list_nav.className = "seckill-nav seckill-navfixed"
    } else {
        list_nav.className = "seckill-nav";
    }
}


for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}

function showlist() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this) {
            tabs[i].className = "active";
            lists[i].className = "active clearfix";
        } else {
            tabs[i].className = "";
            lists[i].className = "";
        }
    }
}