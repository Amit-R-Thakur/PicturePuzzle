document.addEventListener("DOMContentLoaded", () => {

    CreateSertUp();
    //Function for Create Setup
    function CreateSertUp() {
        let grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        MainDiv = document.createElement("div");
        MainDiv.classList.add("Main")
        SetUPDiv = document.createElement("div");
        SetUPDiv.classList.add("SetupDiv");
        let headerDiv = document.createElement("div");
        let heading = "<h1>Image Puzzle Game</h1>";
        headerDiv.innerHTML = heading;
        headerDiv.classList.add("headerDiv");
        let startbuttonDiv = document.createElement("div");
        let button = "<button id='sGame'>Start Game</button>";
        startbuttonDiv.innerHTML = button;
        startbuttonDiv.classList.add("startbuttonDiv");
        SetUPDiv.appendChild(headerDiv);
        SetUPDiv.appendChild(startbuttonDiv);
        MainDiv.appendChild(SetUPDiv);
        document.querySelector("body").appendChild(MainDiv);
        document.querySelector("#sGame").addEventListener("click", () => {
            Play();


        });

        function Play() {

            startbuttonDiv = document.querySelector(".startbuttonDiv");
            startbuttonDiv.classList.add("none");
            SetUPDiv.style.gridTemplateRows = "10% 1fr 10%";
            let gameDiv = document.createElement("div");
            gameDiv.classList.add("gamediv");
            gameDiv.classList.add("sortable");
            grid.sort(function (a, b) { return 0.5 - Math.random() });
            for (let i = 0; i < grid.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList = `elm${grid[i]} elm`;
                gameDiv.appendChild(newDiv);

            }
            SetUPDiv.appendChild(gameDiv);
            let buttonDiv = document.createElement("div");
            buttonDiv.classList.add("buttonDiv");
            let button1st = document.createElement("div");
            button1st.classList.add("btn");
            let btn1 = "<button id='Reset'>Reset</button>";
            button1st.innerHTML = btn1;
            let button3rd = document.createElement("div");
            button3rd.classList.add("btn");
            let btn3 = "<button id='viewImage'>Full Image</button>"
            button3rd.innerHTML = btn3;
            let button2nd = document.createElement("div");
            button2nd.classList.add("btn");
            let btn2 = "<button id='home'>Home</button>";
            buttonDiv.appendChild(button1st);
            buttonDiv.appendChild(button3rd);
            buttonDiv.appendChild(button2nd);
            button2nd.innerHTML = btn2;
            SetUPDiv.appendChild(buttonDiv);
            document.querySelector("#Reset").addEventListener("click", () => {
                grid.sort(function (a, b) { return 0.5 - Math.random() });
                document.querySelectorAll(".elm").forEach((elem, inx) => {
                    elem.classList = `elm${grid[inx]} elm`;
                });
            });
            document.querySelector("#home").addEventListener("click",()=>{
                window.location.reload();
            });
            document.querySelector("#viewImage").addEventListener("click",()=>{

                document.querySelectorAll(".elm").forEach((elm)=>{
                    elm.classList.add("none");
                });
                gameDiv.style.backgroundImage="url('../image/rockey.jpg')";
                gameDiv.style.backgroundSize="100% 100%";
                document.querySelectorAll(".btn").forEach((elm)=>{
                    elm.classList.add("none");
                });
                buttonDiv.style.gridTemplateColumns="1fr";
                let newDiv=document.createElement("div");
                let tempBtn="<button id='exit'>exit Full Mode</button>";
                newDiv.innerHTML=tempBtn;
                buttonDiv.appendChild(newDiv);
                document.querySelector("#exit").addEventListener("click",()=>{
                    gameDiv.style.removeProperty("background-image");
                    document.querySelectorAll(".elm").forEach((elm)=>{
                        elm.classList.remove("none");
                    });
                    buttonDiv.style.gridTemplateColumns="1fr 1fr 1fr";
                    newDiv.remove();
                    document.querySelectorAll(".btn").forEach((elm)=>{
                        elm.classList.remove("none");
                    });


                    
                })
            })

            $(".sortable").sortable({ connectWith: ".sortable" },
                {

                    update: function (event, ui) {

                        let countRight = 0;
                        document.querySelectorAll(".elm").forEach((elem, index) => {

                            if (`elm${index + 1}` == `${elem.classList[0]}`) {
                                countRight++;


                            }
                            if (countRight == 16) {

                                document.querySelectorAll(".elm").forEach((elm) => {
                                    elm.classList.add("none");

                                });

                                gameDiv.style.gridTemplateColumns = "1fr";
                                gameDiv.style.gridTemplateRows = "1fr";
                                let conDiv = document.createElement("div");
                                conDiv.classList.add("congratulation");
                                let h1 = "<h1>Congratulatations</h1><br><b>You Solved the <br>puzzle</b>";
                                conDiv.innerHTML = h1;
                                gameDiv.appendChild(conDiv);
                                document.querySelectorAll(".btn").forEach((elm) => {
                                    elm.classList.add("none");
                                })
                                buttonDiv.style.gridTemplateColumns = "1fr";
                                buttonDiv.style.gridTemplateRows = "1fr";

                                let newBtn2Div = document.createElement("div");
                                newBtn2Div.classList.add("newdiv");
                                let btn2 = "<button id='btn2'>Home</button>"
                                newBtn2Div.innerHTML = btn2;
                                buttonDiv.appendChild(newBtn2Div);
                                document.querySelector("#btn2").addEventListener("click", () => {
                                    window.location.reload();
                                })


                            }
                        })
                    }
                });




            ///Function For Check puzzle is solved or not
            function checkPuzzle() {
                document.querySelectorAll(".elm").forEach((elem, index) => {
                    if (`.elm${index + 1}` == elem.classList[0]) {
                        return true;
                    }
                    return false;
                })
            }


        }


    }


});