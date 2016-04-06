function cli(){
    $(".list-group-item").bind('click', function () {
        var dir = $(".dir").html();
        var name = $(this).text().toLowerCase();
        $("#cli-man").load("./" + dir + "/" + name + ".html");
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
        $(this).focusout();
    })
}