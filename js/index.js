//设为首页
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        }catch(e){
            alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
        }
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}
//收藏本站
function AddFavorite(title, url) {

    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
function IsPC() {
    var flag = true;
    var winWidth = 0;
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    if(winWidth <= 480){
        console.log(winWidth);
        flag = false;
    }
    return flag;
}
function IsPCTurn() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
var is_pc = true;

window.onload = function () {
    is_pc = IsPCTurn();
    if(IsPC()){
        $("#PC").css("display","block");
        $("#MB").css("display","none");
    }else{
        $("#PC").css("display","none");
        $("#MB").css("display","block");
    }
};
window.onresize = function(){
    if(IsPC()){
        $("#PC").css("display","block");
        $("#MB").css("display","none");
    }else{
        $("#PC").css("display","none");
        $("#MB").css("display","block");
    }
    if(IsPCTurn() !== is_pc)
        location.reload();
};