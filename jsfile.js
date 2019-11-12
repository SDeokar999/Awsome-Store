<html>
<head>
    <title>Awsome Store</title>
</head>
<link rel="stylesheet" href="phone.css">
<body>
<div id="container">
    <div id="upper">
        <div id="upperleft"><img src="storeimage.jpg" height="25x" width="25px"> AwsomeStore</div>
        <div id="upperright">Addcart</div>
    </div>
    <div id="middle">
        <div id="middleleft">
            <div class="middlelefts1" id="p">Filters</div>
            <div class="middlelefts">Internal Memory</div>
            <div class="internalsize">
                <form>
                    <input type="checkbox" onclick="handleFilterClick('inter',2)">2GB<br>
                    <input type="checkbox" onclick="handleFilterClick('inter',3)">3G<br>
                    <input type="checkbox" onclick="handleFilterClick('inter',4)">4GB<br>

                </form>
            </div>
            <div class="middlelefts">Ram</div>
            <div class="internalsize">
                <form>
                    <input type="checkbox" id="16GB" onclick="handleFilterClick('ram',16)">16GB<br>
                    <input type="checkbox" id="32GB" onclick="handleFilterClick('ram',32)">32GB<br>
                    <input type="checkbox" id="64GB" onclick="handleFilterClick('ram',64)">64GB<br>
                </form>
            </div>
            <div class="middlelefts">Screen size</div>
            <div class="internalsize">
                <form>
                    <input type="checkbox">5.2'<br>
                    <input type="checkbox">5.9'<br>
                    <input type="checkbox">6'<br>
                </form>
            </div>
            <div class="middlelefts" id="ap">Price</div>
            <div class="internalsize">
                <form>
                    <input type="checkbox" id="demo1" onclick="">below 10000 <br>
                    <input type="checkbox" id="demo2" onclick="">10001 to 15000<br>
                    <input type="checkbox" id="demo3" onclick="">15001 to 20000<br>
                    <input type="checkbox" id="demo4" onclick="">20001 to 30000<br>
                </form>
            </div>
        </div>
        <div id="middleright">
            <div>

                <div id="div1">

                </div>
            </div>
        </div>
    </div>
    <div id="bottom">@Copyright</div>
</div>
<script>
    var x = [{inter: "2", name: "Redmi7", prices: "9999", ram: "16", photo: "mobile store.jpg"},
        {inter: "2", name: "oppo8 ", prices: "8995", ram: "32", src: "mobile store.jpg"},
        {inter: "2", name: "Vivo x", prices: "7998", ram: "64", src: "mobile store.jpg"},
        {inter: "3", name: "iphone x", prices: "21000", ram: "16", src: "mobile store.jpg"},
        {inter: "3", name: "samsung x", prices: "19000", ram: "32", src: "mobile store.jpg"},
        {inter: "3", name: "Redmi 6", prices: "15000", ram: "64", src: "mobile store.jpg"},
        {inter: "4", name: "Realme 7", prices: "12000", ram: "16", src: "mobile store.jpg"},
        {inter: "4", name: "oppo x", prices: "17000", ram: "32", src: "mobile store.jpg"},
        {inter: "4", name: "oppo x", prices: "17000", ram: "64", photo: 'Redmi.jpg'}]

    var aFilterData = {inter: [], ram: []};
    for (var y = 0; y < x.length; y++) {
        myFunctionx(y);
    }

    function myFunctionx(z) {
        var para = document.createElement("div")
        var para1 = document.createElement("div")
        var para2 = document.createElement("div")
        var para3 = document.createElement("div")
        var para4 = document.createElement("div")
        var para5 = document.createElement("div")
        para.appendChild(para1)
        para1.appendChild(para2)
        para1.appendChild(para3)
        para1.appendChild(para4)
        para1.appendChild(para5)
        para1.classList.add('mobilebox')
        para2.classList.add('inter')
        para3.classList.add('mobilename')
        para4.classList.add('prices')
        para5.classList.add('ram')

        var node = document.createTextNode(x[z].name)
        para3.appendChild(node)
        var node = document.createTextNode(x[z].prices + "/-")
        para4.appendChild(node)
        var node = document.createTextNode(x[z].ram + " RAM")
        para5.appendChild(node)
        var node = document.createTextNode(x[z].inter + " Internal ")
        para2.appendChild(node)
        var div2 = document.getElementById("div1")
        div2.appendChild(para);
    }

    function filterNewData() {
        document.getElementById("div1").innerHTML = "";
        for (var d in aFilterData) {
            var filterableValues = aFilterData[d]
            for (var w = 0; w < filterableValues.length; w++) {
                for (var y = 0; y < x.length; y++) {

                    if ((x[y][d] == filterableValues[w])) {
                        myFunctionx(y);
                    }
                }
            }
        }
    }

    function handleFilterClick(filterType, filterData) {
        if (filterType == "ram") {
            aFilterData["ram"].push(filterData);

            {
                filterNewData();
            }
        } else if (filterType == "inter") {
            aFilterData["inter"].push(filterData);
            {
                filterNewData();
            }
        }

    }

    // function handleFilterClicks(filterData){

    //         aFilterDtata["inter"].push(filterData)

    //         filterInternalMemory();

    // }
    // function filterInternalMemory(){
    //         document.getElementById("div1").innerHTML="";
    //         for(var d=0;d<x.length;d++){
    //                 if(x[d].inter==aFilterDtata["inter"][0]||x[d].inter==aFilterDtata["inter"][1]
    //                 ||x[d].inter==aFilterDtata["inter"][2]||
    //                 x[d].inter==aFilterDtata["inter"][3])
    //                 myFunctionx(d)
    //         }
    // }


</script>
</body>
</html>


