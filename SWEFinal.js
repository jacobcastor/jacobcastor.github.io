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

    $("a").each(function() {
        var currentCounty = this;
        $(this).hover(function(){
            $("#countyName").text("Selected County:" + $(this).attr("title"));
        });
        $(this).click(function(){
            $("#countyTable").text($(this).attr("title"));

            $.each(json.counties.county_name, function(i, v) {
                if (v.county_name == currentCounty) {
                    alert(v.averageRent);
                    return;
                }
            });
        });
    });
});