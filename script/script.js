document.getElementById("all-cart-div").addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-heart")) {
        //console.log("clicked heart");
        const heartIcon = document.getElementById("heart-icon");
        const newHeartIcon = 1 + parseInt(heartIcon.innerText);
        document.getElementById("heart-icon").innerText = newHeartIcon;
        console.log(newHeartIcon);
    }

    //call button, history and coins functionalaty---------->

    if (e.target.classList.contains("bg-green-500")) {
        const totalCoins = parseInt(
            document.getElementById("total-coins-Ihave").innerText
        );
        if (totalCoins < 20) {
            alert(
                "❌ You Have no sufficient coins.You need minimum 20 coins to make a call"
            );
        } else if (totalCoins >= 20) {
            //console.log(e.target.parentNode.parentNode.children[1].children[0]);
            const cartBigTitle =
                e.target.parentNode.parentNode.children[1].children[0]
                    .innerText;
            const allHelplineNumber =
                e.target.parentNode.parentNode.children[1].children[2]
                    .innerText;
            alert("📞calling : " + cartBigTitle + " " + allHelplineNumber);
            const newTotalCoins = totalCoins - 20;
            document.getElementById("total-coins-Ihave").innerText =
                newTotalCoins;

            const assideHistorySection = document.getElementById(
                "asside-history-section"
            );
            const div = document.createElement("div");
            div.innerHTML = `<div
                            class="flex justify-between items-center bg-[#fafafa] shadow-lg px-3 py-2 rounded-lg my-3"
                        >
                            <div>
                                <h1 class="text-sm font-semibold">
                                    ${cartBigTitle}
                                </h1>
                                <p class="text-xs font-semibold">${allHelplineNumber}</p>
                            </div>
                            <div>
                                <p id="newLocalTime">${new Date().toLocaleTimeString()}</p>
                            </div>
                        </div>`;
            assideHistorySection.appendChild(div);
        }
    }

    //console.log(e.target);

    // if (
    //     e.target.classList.contains("my-2") &&
    //     e.target.classList.contains("text-xs")
    // ) {
    //     console.log("you clicked on small title");
    // }
});
