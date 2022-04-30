$(document).ready(function() {

    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "SWEFinal.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    console.log(json);

    $("a").each(function() {
        var currentCounty = this;
        $(this).hover(function(){
            $("#countyName").text("Selected County:" + $(this).attr("title"));
        });
        $(this).click(function(){
            $("#countyTable").text($(this).attr("title"));
        });
    });
});