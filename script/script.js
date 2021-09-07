document.addEventListener("DOMContentLoaded", () => {



    let imageList=["https://images.pexels.com/photos/4595295/pexels-photo-4595295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                   "https://www.ancienthistorylists.com/wp-content/uploads/2016/10/Krishna.jpg",
                   "https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/1/hindu-god-lord-radha-krishna-magdalena-walulik.jpg",
                   "https://d3pc1xvrcw35tl.cloudfront.net/ln/images/686x514/modi-15-august-202008467516_20200893493.jpg",
                   "https://www.transindiatravels.com/wp-content/uploads/the-red-fort-delhi.jpg",
                   "https://www.travelogyindia.com/blog/wp-content/uploads/2014/02/delhi.jpg",
                   "https://static-blog.treebo.com/blog/wp-content/uploads/2018/06/Tamilnadu-min.jpg",
                   "https://www.holidify.com/blog/wp-content/uploads/2014/06/hampi.jpg",
                   "https://cdn.cdnparenting.com/articles/2019/03/07114255/1143490766-H.jpg",
                   "https://static.toiimg.com/photo/59524388.cms",
                   "https://www.planetware.com/wpimages/2019/08/india-mumbai-top-attractions-visit-gateway-to-india.jpg",
                   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-168504892-1568303467.png?crop=0.754xw:0.911xh;0.191xw,0.0454xh&resize=640:*",
                   "https://photorator.com/photos/images/majestic-tiger--27360.jpg",
                   "https://marshallspetzone.com/blog/wp-content/uploads/2017/01/6.jpg",
                   "https://en.bcdn.biz/Images/2016/9/7/539a336a-023f-4f9b-936b-cb3e2b4a5aa0.jpg",
                   "https://editorial.pxcrush.net/carsales/general/editorial/porsche-cayenne-s-711.jpg?width=1024&height=683",
                   "https://blog.gaadikey.com/wp-content/uploads/2016/05/Maruti-Swift-Exterior-Photo-1.jpg",
                   "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
                   "https://www.bikes4sale.in/pictures/default/svm-prana-grand/svm-prana-grand-pic-11.jpg",
                   "https://img.indianautosblog.com/resize/750x-/2019/06/29/ktm-rc125-review-still-shots-front-left-quarter-44eb.jpg",
                   "../image/rockey.jpg"
                  ]

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
           let background=randomImage(imageList);
            for (let i = 0; i < grid.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList = `elm${grid[i]} elm`;
                newDiv.style.backgroundImage=`url(${background})`;
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
                background=randomImage(imageList);
                
                grid.sort(function (a, b) { return 0.5 - Math.random() });
                document.querySelectorAll(".elm").forEach((elem, inx) => {
                    elem.classList = `elm${grid[inx]} elm`;
                    elem.style.backgroundImage=`url(${background})`;
                });
            });
            document.querySelector("#home").addEventListener("click",()=>{
                window.location.reload();
            });
            document.querySelector("#viewImage").addEventListener("click",()=>{

                document.querySelectorAll(".elm").forEach((elm)=>{
                    elm.classList.add("none");
                });
                gameDiv.style.backgroundImage=`url(${background})`;
                gameDiv.style.backgroundSize="100% 100%";
                gameDiv.style.backgroundRepeat="no-repeat";
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

            //Function for random Image.................
            function randomImage(arr)
            {
                let ran=Math.floor(Math.random()*arr.length);
                return arr[ran];
            }


        }


    }


});