"use strict";
$(document).ready(function(){

    // jQuery methods go here...
    let itemsPhotos = document.getElementsByClassName("good-photo");
    let sliderPhotos = ["garden.jpg", "garden1_.jpg", "garden2.jpg", "flower-garden.jpg", "garden3.jpg"];
    let next_index = 0;
    for (let i = 0; i < itemsPhotos.length; i++) {
        switch (i) {
            case 0:
                itemsPhotos[i].style.backgroundImage = 'url("./images/flower.jpg")';
                break;
            case 1:
                itemsPhotos[i].style.backgroundImage= 'url("./images/rose.jpg")'
                break;
            case 2:
                itemsPhotos[i].style.backgroundImage = 'url("./images/actinidia.jpg")';
                break;
            case 3:
                itemsPhotos[i].style.backgroundImage = 'url("./images/cedr.jpg")';
                break;
            case 4:
                itemsPhotos[i].style.backgroundImage = 'url("./images/vine.jpg")';
                break;
        }
    }
    let image = $("#big-image");
    let firstTime = true;
    let nextCall;
    let disableButtons = false;
    function changeImage(){
        // do some stuff
        
        if (!firstTime) {
            disableButtons = true;
            image.fadeOut(400, function() {
                image.css("background-image",`url("./images/slider/${sliderPhotos[next_index]}`);
                disableButtons = false;
                next_index++;
                if (next_index === sliderPhotos.length)
                    next_index = 0;
                
                nextCall = setTimeout(changeImage, 4000);
            }).fadeIn();
        }
        else {
            firstTime = false;
            next_index++;
            if (next_index === sliderPhotos.length)
                next_index = 0;
            nextCall = setTimeout(changeImage, 4000);
        }        
    }
    changeImage();
    $(".left-column > button").click(function() {
        $(this).next().slideToggle(500);        
    });
    // $(".form-center > form input").after('<div class = "valid"></div>')
    // $(".form-center > form input").is(":invalid") {

    // }
    //$("input").after('<img src = "images/tick.jpg" height = "3vh" width = "3vh">');
    // $(".valid")
    // .css("background-image", 'url("./images/cross.svg")')
    // .css("height","3vh")
    // .css("width", "3vh")
    // .css("background-size", "cover");

    $("#left-arrow").click(function() {
        if (disableButtons)
            return;
        next_index-=2;
        if (next_index < 0)
            next_index = sliderPhotos.length + next_index;
        if (nextCall)
            clearTimeout(nextCall);
        changeImage();
    });
    $("#right-arrow").click(function() {
        //next_index++;
        // if (next_index === sliderPhotos.length)
        //     next_index = 0;
        if (disableButtons)
            return;
        if (nextCall)
            clearTimeout(nextCall);
        changeImage();
    });

    $("#feedback").click(function() {
        $(".overlay").fadeIn();
        $(".form-center").fadeIn("slow");
        $(".form-center").css("display", "flex");
    });

    $(".cross").click(function() {
        $(".overlay").fadeOut();
        $(".form-center").fadeOut();
    });
    // $(".none").on("click", function (event) {
    //     alert((event.target.id));
    // });
    // function showElem(id) {
    //     let elem = document.getElementById(id);
    //     if (elem.style.display ==="" || elem.style.display === "none") {
    //         elem.style.display = "block";
    //         for (let i = 0; i < leftMenuItems.length; i++)
    //             if (leftMenuItems[i] != elem)
    //                 leftMenuItems[i].style.textDecoration = "none";
    //             else
    //                 leftMenuItems[i].style.textDecoration = "underline";
    //     } else {
    //         elem.style.display = "none";
    //     }
    // }

    let paginationElemList = document.getElementById("pagination").getElementsByTagName("button");
    paginationElemList[0].style.fontSize = "25px";
    for (let i = 0; i < paginationElemList.length; i++) {
        let cur_a = paginationElemList[i];
        cur_a.addEventListener("click", function() {
            for (let i = 0; i < paginationElemList.length; i++)
                paginationElemList[i].style.fontSize = "20px";
            cur_a.style.fontSize = "25px";
        });
    }
});
