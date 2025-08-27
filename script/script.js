document.getElementById("all-cart-div").addEventListener("click", function (e) {
    //console.log(e.target);
    // const heartButton =
    if (e.target.classList.contains("fa-heart")) {
        //console.log("clicked heart");
        const heartIcon = document.getElementById("heart-icon");
        const newHeartIcon = 1 + parseInt(heartIcon.innerText);
        document.getElementById("heart-icon").innerText = newHeartIcon;
        console.log(newHeartIcon);
    }

    //call button, history and coins functionalaty---------->
    //console.log(e.target.children[2].children[1]);
    if (e.target.classList.contains("bg-green-500")) {
        console.log("clicked on call button");
    }
});

//call button, history and coins functionalaty---------->
//document.getElementById();
