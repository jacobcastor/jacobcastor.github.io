$(document).ready(function() {

    var json = [
            {
                "county_name": "Alamance",
                "averageRent": "885",
                "indexCrimerate": "2932.0",
                "violentCrimerate": "505.5",
                "propertyCrimeRate": "2426.5"
            },
            {
                "county_name": "Alexander",
                "averageRent": "693",
                "indexCrimerate": "1566.6",
                "violentCrimerate": "156.4",
                "propertyCrimeRate": "1410.2"
            },
            {
                "county_name": "Alleghany",
                "averageRent": "693",
                "indexCrimerate": "330.1",
                "violentCrimerate": "30.9",
                "propertyCrimeRate": "299.1"
            },
            {
                "county_name": "Anson",
                "averageRent": "693",
                "indexCrimerate": "3501.1",
                "violentCrimerate": "751.2",
                "propertyCrimeRate": "2749.8"
            },
            {
                "county_name": "Ashe",
                "averageRent": "693",
                "indexCrimerate": "1349.1",
                "violentCrimerate": "147.5",
                "propertyCrimeRate": "1201.6"
            },
            {
                "county_name": "Avery",
                "averageRent": "789",
                "indexCrimerate": "1074.8",
                "violentCrimerate": "149.4",
                "propertyCrimeRate": "925.4"
            },
            {
                "county_name": "Beaufort",
                "averageRent": "683",
                "indexCrimerate": "4545.1",
                "violentCrimerate": "1040.3",
                "propertyCrimeRate": "3504.7"
            },
            {
                "county_name": "Bertie",
                "averageRent": "693",
                "indexCrimerate": "486",
                "violentCrimerate": "54.6",
                "propertyCrimeRate": "431.4"
            },
            {
                "county_name": "Bladen",
                "averageRent": "693",
                "indexCrimerate": "2521.1",
                "violentCrimerate": "540.2",
                "propertyCrimeRate": "1980.8"
            },
            {
                "county_name": "Brunswick",
                "averageRent": "841",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Buncombe",
                "averageRent": "1279",
                "indexCrimerate": "3371.1",
                "violentCrimerate": "388.2",
                "propertyCrimeRate": "2982.9"
            },
            {
                "county_name": "Burke",
                "averageRent": "693",
                "indexCrimerate": "2185",
                "violentCrimerate": "293.7",
                "propertyCrimeRate": "1891.2"
            },
            {
                "county_name": "Cabarrus",
                "averageRent": "1151",
                "indexCrimerate": "1716",
                "violentCrimerate": "132.7",
                "propertyCrimeRate": "1583.2"
            },
            {
                "county_name": "Caldwell",
                "averageRent": "693",
                "indexCrimerate": "2490.1",
                "violentCrimerate": "148.8",
                "propertyCrimeRate": "2341.3"
            },
            {
                "county_name": "Camden",
                "averageRent": "1091",
                "indexCrimerate": "627.7",
                "violentCrimerate": "123.6",
                "propertyCrimeRate": "504"
            },
            {
                "county_name": "Carteret",
                "averageRent": "846",
                "indexCrimerate": "2252.6",
                "violentCrimerate": "219.8",
                "propertyCrimeRate": "2032.8"
            },
            {
                "county_name": "Caswell",
                "averageRent": "693",
                "indexCrimerate": "592.9",
                "violentCrimerate": "76.8",
                "propertyCrimeRate": "516.1"
            },
            {
                "county_name": "Catawba",
                "averageRent": "693",
                "indexCrimerate": "2761.3",
                "violentCrimerate": "306.7",
                "propertyCrimeRate": "2454.6"
            },
            {
                "county_name": "Chatham",
                "averageRent": "1134",
                "indexCrimerate": "1533.1",
                "violentCrimerate": "250.7",
                "propertyCrimeRate": "1282.4"
            },
            {
                "county_name": "Cherokee",
                "averageRent": "715",
                "indexCrimerate": "4318.5",
                "violentCrimerate": "305.8",
                "propertyCrimeRate": "4012.8"
            },
            {
                "county_name": "Chowan",
                "averageRent": "808",
                "indexCrimerate": "2086.1",
                "violentCrimerate": "466.7",
                "propertyCrimeRate": "1619.4"
            },
            {
                "county_name": "Clay",
                "averageRent": "788",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Cleveland",
                "averageRent": "693",
                "indexCrimerate": "1891.2",
                "violentCrimerate": "342.3",
                "propertyCrimeRate": "1548.8"
            },
            {
                "county_name": "Columbus",
                "averageRent": "693",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Craven",
                "averageRent": "947",
                "indexCrimerate": "2697.8",
                "violentCrimerate": "414.6",
                "propertyCrimeRate": "2283.2"
            },
            {
                "county_name": "Cumberland",
                "averageRent": "869",
                "indexCrimerate": "4208.5",
                "violentCrimerate": "948.9",
                "propertyCrimeRate": "3259.6"
            },
            {
                "county_name": "Currituck",
                "averageRent": "1147",
                "indexCrimerate": "1289.9",
                "violentCrimerate": "252.9",
                "propertyCrimeRate": "1037"
            },
            {
                "county_name": "Dare",
                "averageRent": "976",
                "indexCrimerate": "2231.4",
                "violentCrimerate": "154.3",
                "propertyCrimeRate": "2077.2"
            },
            {
                "county_name": "Davidson",
                "averageRent": "705",
                "indexCrimerate": "1819.6",
                "violentCrimerate": "190.2",
                "propertyCrimeRate": "1629.4"
            },
            {
                "county_name": "Davie",
                "averageRent": "825",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Duplin",
                "averageRent": "699",
                "indexCrimerate": "2359.5",
                "violentCrimerate": "209.9",
                "propertyCrimeRate": "2149.6"
            },
            {
                "county_name": "Durham",
                "averageRent": "1134",
                "indexCrimerate": "4595.1",
                "violentCrimerate": "825.7",
                "propertyCrimeRate": "3769.3"
            },
            {
                "county_name": "Edgecombe",
                "averageRent": "774",
                "indexCrimerate": "2936.6",
                "violentCrimerate": "1118.4",
                "propertyCrimeRate": "1818.3"
            },
            {
                "county_name": "Forsyth",
                "averageRent": "825",
                "indexCrimerate": "4785.6",
                "violentCrimerate": "912.5",
                "propertyCrimeRate": "3873.1"
            },
            {
                "county_name": "Franklin",
                "averageRent": "1200",
                "indexCrimerate": "1238",
                "violentCrimerate": "214.5",
                "propertyCrimeRate": "1023.4"
            },
            {
                "county_name": "Gaston",
                "averageRent": "1151",
                "indexCrimerate": "3140.8",
                "violentCrimerate": "523.5",
                "propertyCrimeRate": "2617.3"
            },
            {
                "county_name": "Gates",
                "averageRent": "743",
                "indexCrimerate": "870",
                "violentCrimerate": "133.8",
                "propertyCrimeRate": "736.2"
            },
            {
                "county_name": "Graham",
                "averageRent": "693",
                "indexCrimerate": "3185.9",
                "violentCrimerate": "343.1",
                "propertyCrimeRate": "2842.8"
            },
            {
                "county_name": "Granville",
                "averageRent": "830",
                "indexCrimerate": "1505.4",
                "violentCrimerate": "278.7",
                "propertyCrimeRate": "1226.7"
            },
            {
                "county_name": "Greene",
                "averageRent": "693",
                "indexCrimerate": "1492",
                "violentCrimerate": "257.4",
                "propertyCrimeRate": "1234.6"
            },
            {
                "county_name": "Guilford",
                "averageRent": "859",
                "indexCrimerate": "3539.6",
                "violentCrimerate": "689.2",
                "propertyCrimeRate": "2850.4"
            },
            {
                "county_name": "Halifax",
                "averageRent": "748",
                "indexCrimerate": "2497.8",
                "violentCrimerate": "521.7",
                "propertyCrimeRate": "1976.1"
            },
            {
                "county_name": "Harnett",
                "averageRent": "790",
                "indexCrimerate": "2293.3",
                "violentCrimerate": "272.3",
                "propertyCrimeRate": "2021"
            },
            {
                "county_name": "Haywood",
                "averageRent": "827",
                "indexCrimerate": "3358.6",
                "violentCrimerate": "242.5",
                "propertyCrimeRate": "3116.1"
            },
            {
                "county_name": "Henderson",
                "averageRent": "1279",
                "indexCrimerate": "1590.9",
                "violentCrimerate": "128.5",
                "propertyCrimeRate": "1462.4"
            },
            {
                "county_name": "Hertford",
                "averageRent": "768",
                "indexCrimerate": "2174.7",
                "violentCrimerate": "318.5",
                "propertyCrimeRate": "1856.2"
            },
            {
                "county_name": "Hoke",
                "averageRent": "731",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Hyde",
                "averageRent": "737",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Iredell",
                "averageRent": "923",
                "indexCrimerate": "1987.2",
                "violentCrimerate": "310.4",
                "propertyCrimeRate": "1676.7"
            },
            {
                "county_name": "Jackson",
                "averageRent": "718",
                "indexCrimerate": "3131.9",
                "violentCrimerate": "265.4",
                "propertyCrimeRate": "2866.5"
            },
            {
                "county_name": "Johnston",
                "averageRent": "1200",
                "indexCrimerate": "1688.6",
                "violentCrimerate": "168.3",
                "propertyCrimeRate": "1520.3"
            },
            {
                "county_name": "Jones",
                "averageRent": "693",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Lee",
                "averageRent": "777",
                "indexCrimerate": "1941.5",
                "violentCrimerate": "127.5",
                "propertyCrimeRate": "1814"
            },
            {
                "county_name": "Lenoir",
                "averageRent": "747",
                "indexCrimerate": "7169.8",
                "violentCrimerate": "1171",
                "propertyCrimeRate": "5998.8"
            },
            {
                "county_name": "Lincoln",
                "averageRent": "843",
                "indexCrimerate": "1949.2",
                "violentCrimerate": "232.4",
                "propertyCrimeRate": "1716.8"
            },
            {
                "county_name": "Macon",
                "averageRent": "759",
                "indexCrimerate": "2112.3",
                "violentCrimerate": "106.7",
                "propertyCrimeRate": "2005.6"
            },
            {
                "county_name": "Madison",
                "averageRent": "1279",
                "indexCrimerate": "964.5",
                "violentCrimerate": "100.8",
                "propertyCrimeRate": "863.7"
            },
            {
                "county_name": "Martin",
                "averageRent": "693",
                "indexCrimerate": "2679",
                "violentCrimerate": "473.3",
                "propertyCrimeRate": "2205.7"
            },
            {
                "county_name": "McDowell",
                "averageRent": "693",
                "indexCrimerate": "2601.1",
                "violentCrimerate": "175.8",
                "propertyCrimeRate": "2425.4"
            },
            {
                "county_name": "Mecklenburg",
                "averageRent": "1151",
                "indexCrimerate": "3950.6",
                "violentCrimerate": "759.6",
                "propertyCrimeRate": "3191"
            },
            {
                "county_name": "Mitchell",
                "averageRent": "693",
                "indexCrimerate": "334",
                "violentCrimerate": "47.7",
                "propertyCrimeRate": "286.3"
            },
            {
                "county_name": "Montgomery",
                "averageRent": "693",
                "indexCrimerate": "2625.9",
                "violentCrimerate": "313.8",
                "propertyCrimeRate": "2312.1"
            },
            {
                "county_name": "Moore",
                "averageRent": "783",
                "indexCrimerate": "1682.7",
                "violentCrimerate": "180",
                "propertyCrimeRate": "1502.7"
            },
            {
                "county_name": "Nash",
                "averageRent": "774",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "New Hanover",
                "averageRent": "1069",
                "indexCrimerate": "2584.9",
                "violentCrimerate": "425.5",
                "propertyCrimeRate": "2159.4"
            },
            {
                "county_name": "Northampton",
                "averageRent": "693",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Onslow",
                "averageRent": "894",
                "indexCrimerate": "1961.7",
                "violentCrimerate": "231.7",
                "propertyCrimeRate": "1730"
            },
            {
                "county_name": "Orange",
                "averageRent": "1134",
                "indexCrimerate": "1832.2",
                "violentCrimerate": "170.1",
                "propertyCrimeRate": "1662.1"
            },
            {
                "county_name": "Pamlico",
                "averageRent": "795",
                "indexCrimerate": "1778.5",
                "violentCrimerate": "210.2",
                "propertyCrimeRate": "1568.3"
            },
            {
                "county_name": "Pasquotank",
                "averageRent": "824",
                "indexCrimerate": "2587.7",
                "violentCrimerate": "417.5",
                "propertyCrimeRate": "2170.2"
            },
            {
                "county_name": "Pender",
                "averageRent": "843",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Perquimans",
                "averageRent": "825",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Person",
                "averageRent": "757",
                "indexCrimerate": "1790.9",
                "violentCrimerate": "329.9",
                "propertyCrimeRate": "1461"
            },
            {
                "county_name": "Pitt",
                "averageRent": "873",
                "indexCrimerate": "2365.3",
                "violentCrimerate": "364.6",
                "propertyCrimeRate": "2000.7"
            },
            {
                "county_name": "Polk",
                "averageRent": "768",
                "indexCrimerate": "1426.7",
                "violentCrimerate": "105.5",
                "propertyCrimeRate": "1321.2"
            },
            {
                "county_name": "Randolph",
                "averageRent": "859",
                "indexCrimerate": "1191.7",
                "violentCrimerate": "86.1",
                "propertyCrimeRate": "1105.6"
            },
            {
                "county_name": "Richmond",
                "averageRent": "693",
                "indexCrimerate": "4439.2",
                "violentCrimerate": "659.6",
                "propertyCrimeRate": "3779.7"
            },
            {
                "county_name": "Robeson",
                "averageRent": "693",
                "indexCrimerate": "4779",
                "violentCrimerate": "1190.3",
                "propertyCrimeRate": "3588.7"
            },
            {
                "county_name": "Rockingham",
                "averageRent": "693",
                "indexCrimerate": "2503.6",
                "violentCrimerate": "363.6",
                "propertyCrimeRate": "2140"
            },
            {
                "county_name": "Rowan",
                "averageRent": "891",
                "indexCrimerate": "2338.9",
                "violentCrimerate": "364",
                "propertyCrimeRate": "1974.9"
            },
            {
                "county_name": "Rutherford",
                "averageRent": "693",
                "indexCrimerate": "2471.8",
                "violentCrimerate": "189.7",
                "propertyCrimeRate": "2282.1"
            },
            {
                "county_name": "Sampson",
                "averageRent": "693",
                "indexCrimerate": "2280.5",
                "violentCrimerate": "371.9",
                "propertyCrimeRate": "1908.6"
            },
            {
                "county_name": "Scotland",
                "averageRent": "693",
                "indexCrimerate": "3447.6",
                "violentCrimerate": "906.5",
                "propertyCrimeRate": "2541.1"
            },
            {
                "county_name": "Stanly",
                "averageRent": "693",
                "indexCrimerate": "2921.2",
                "violentCrimerate": "386.4",
                "propertyCrimeRate": "2534.8"
            },
            {
                "county_name": "Stokes",
                "averageRent": "825",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Surry",
                "averageRent": "693",
                "indexCrimerate": "1698.9",
                "violentCrimerate": "171.1",
                "propertyCrimeRate": "1527.8"
            },
            {
                "county_name": "Swain",
                "averageRent": "693",
                "indexCrimerate": "3694.4",
                "violentCrimerate": "455.7",
                "propertyCrimeRate": "3238.6"
            },
            {
                "county_name": "Transylvania",
                "averageRent": "706",
                "indexCrimerate": "1127.9",
                "violentCrimerate": "141.7",
                "propertyCrimeRate": "986.2"
            },
            {
                "county_name": "Tyrrell",
                "averageRent": "735",
                "indexCrimerate": "768.6",
                "violentCrimerate": "291.5",
                "propertyCrimeRate": "477.1"
            },
            {
                "county_name": "Union",
                "averageRent": "1151",
                "indexCrimerate": "2025.2",
                "violentCrimerate": "264.3",
                "propertyCrimeRate": "1760.8"
            },
            {
                "county_name": "Vance",
                "averageRent": "693",
                "indexCrimerate": "4022.7",
                "violentCrimerate": "1108.1",
                "propertyCrimeRate": "2914.6"
            },
            {
                "county_name": "Wake",
                "averageRent": "1200",
                "indexCrimerate": "1896",
                "violentCrimerate": "262.8",
                "propertyCrimeRate": ""
            },
            {
                "county_name": "Warren",
                "averageRent": "693",
                "indexCrimerate": "1621.3",
                "violentCrimerate": "297.7",
                "propertyCrimeRate": "1323.6"
            },
            {
                "county_name": "Watauga",
                "averageRent": "826",
                "indexCrimerate": "1069.6",
                "violentCrimerate": "91.6",
                "propertyCrimeRate": "978"
            },
            {
                "county_name": "Washington",
                "averageRent": "693",
                "indexCrimerate": "N/A",
                "violentCrimerate": "N/A",
                "propertyCrimeRate": "N/A"
            },
            {
                "county_name": "Wayne",
                "averageRent": "827",
                "indexCrimerate": "2915.9",
                "violentCrimerate": "484.8",
                "propertyCrimeRate": "2431.2"
            },
            {
                "county_name": "Wilkes",
                "averageRent": "693",
                "indexCrimerate": "1840.8",
                "violentCrimerate": "244.4",
                "propertyCrimeRate": "1596.4"
            },
            {
                "county_name": "Wilson",
                "averageRent": "778",
                "indexCrimerate": "2549.1",
                "violentCrimerate": "386.3",
                "propertyCrimeRate": "2162.8"
            },
            {
                "county_name": "Yadkin",
                "averageRent": "825",
                "indexCrimerate": "1897.2",
                "violentCrimerate": "192.7",
                "propertyCrimeRate": "1704.4"
            },
            {
                "county_name": "Yancey",
                "averageRent": "693",
                "indexCrimerate": "1220.2",
                "violentCrimerate": "74.9",
                "propertyCrimeRate": "1145.2"
            }
        ];

    $("a").each(function() {
        var currentCounty = this.attr("title");
        $(this).hover(function(){
            $("#countyName").text("Selected County:" + $(this).attr("title"));
        });
        $(this).click(function(){
            $("#countyTable").text($(this).attr("title"));

            var result = json.find(t=>t.county_name === currentCounty).averageRent;
            alert(result);
        });
    });
});