$(function() {
    
    $("#button1").click(function(){
        $("body").css("background-color","orange");
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
