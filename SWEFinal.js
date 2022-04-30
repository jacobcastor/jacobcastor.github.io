$(document).ready(function() {
    $("a").each(function() {
        $(this).hover(function(){
            $("#countyName").text("Selected County:" + $(this).attr("title"));
        });
        $(this).click(function(){
            $("#countyTable").text($(this).attr("title"));

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

            $.each(json.counties.county_name, function(i, v) {
                if (v.county_name == this) {
                    alert(v.averageRent);
                    return;
                }
            });
        });
    });
});