redis-doc
=
redis cli 命令的说明手册

####1. 用于记录redis cli命令行学习进度

####2. idea+maven+jetty plugin 热部署配置见pom.xml

####3. js获取ajax url

js获取地址栏参数window.location.href，ajax提交时，地址栏url不变，无法从地址栏url获取参数。
#####3.1 使用pushState修改地址栏url

    window.history.pushState(null,null,url)

#####3.2 js获取参数

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }

#####3.3 页面跳转后再使用pushState将url改成原来的url

>注：replaceState和pushState用法类似，使用replaceState会修改当前的state，浏览器后退有影响。

>另：replaceState和pushState均为html5新增方法