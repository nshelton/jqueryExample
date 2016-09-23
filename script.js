var images = {
    "mer" : "sloth.jpg",
    "pfffft" : "elephant.jpg",
    "caw" : "seagull.jpg",
    "rawr" : "lion.jpg",
    "ribbit" : "frog.jpg"
}

$(function() {
    
    for (key in images) {
        if(images.hasOwnProperty(key)){
            $("#"+key).prepend('<img src="img/' + images[key] +'"/>');
        }
    }



    $("#button1").click(function(){
        $("body").css("background-color","orange");
         $(".animal img").animate({
                left:'250px',
                opacity:'0.5',
                height: '100px',
                width: '150px'
            });

    });
    $("#button2").click(function(){
        var animals = $(".animal");
        console.log(animals);
        console.log(animals.length);
        for (var i = animals.length - 1; i >= 0; i--) {
            console.log(animals[i].id)
            $(animals[i]).append(" says " + animals[i].id);
        }
    });
});

