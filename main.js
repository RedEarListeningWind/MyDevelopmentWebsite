function Icons_css(Icons){

    Icons.style.cssText =

        "transition: all 1.5s ease-in-out 500ms;" +

        "-webkit-transition: all 1.5s ease-in-out 500ms;" +

        "width: 15%;" +

        "height: 15%;" +

        "margin-top: 50%;" +

        "margin-left: 85%;";

    

};

function Spin(Spin_i){

    

    var getDate = Date.now();

    var Angle = 3;

    setInterval(function() {

        Icons = document.getElementById('Icons');

        var getDateNew = Date.now();

        if(getDateNew>(getDate+2100)){

        //alert(Spin_i);

        Icons.style.cssText =

            "width: 15%;" +

            "height: 15%;" +

            "margin-top: 50%;" +

            "margin-left: 85%;" +

            "transform: rotate(" + Angle * (Spin_i%360) + "deg);" +

            "-ms-transform: rotate(" + Angle * (Spin_i%360) + "deg);" + /* IE 9 */

            "-webkit-transform: rotate(" + Angle * (Spin_i%360) + "deg);" + /* Safari and Chrome */

            "-o-transform: rotate(" + Angle * (Spin_i%360) + "deg);" + /* Opera */

            "-moz-transform: rotate(" + Angle * (Spin_i%360) + "deg);"; /* Firefox */

        Spin_i++;

    }

    }, 30);

};

window.onload = function() {

    var Icons = document.getElementById('Icons');

    var Icons_span = document.getElementById('Icons_span');

    //alert(Icons["src"]);

    /*

    alert(img.complete);

    if(Icons[src].complete){

        alert(Icons["src"]);

        

    }else{

        alert(Icons["src"]);

    }

    */

    Icons_css(Icons);

    

    /*

    Icons_span.style.cssText = 

        "width: 15%;" +

        "height: 15%;" +

        "margin-top: 0px;" +

        "margin-left: 0px;";

    */

    area_id['coords'] = (Icons["width"] / 4) + ',' + (Icons["height"] / 4) + ',' + (Icons["width"] / 4);

    var Spin_i = 0;

    

    Spin(Spin_i);

    //

};

