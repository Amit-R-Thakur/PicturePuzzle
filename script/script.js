document.addEventListener("DOMContentLoaded",()=>{
    let grid=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        CreateSertUp();
//Function for Create Setup
function CreateSertUp()
{
    MainDiv=document.createElement("div");
    MainDiv.classList.add("Main")
    SetUPDiv=document.createElement("div");
    SetUPDiv.classList.add("SetupDiv");
    let headerDiv=document.createElement("div");
    let heading="<h1>Image Puzzle Game</h1>";
    headerDiv.innerHTML=heading;
    headerDiv.classList.add("headerDiv");
    let startbuttonDiv=document.createElement("div");
    let button="<button id='sGame'>Start Game</button>";
    startbuttonDiv.innerHTML=button;
    startbuttonDiv.classList.add("startbuttonDiv");
    SetUPDiv.appendChild(headerDiv);
    SetUPDiv.appendChild(startbuttonDiv);
    MainDiv.appendChild(SetUPDiv);
    document.querySelector("body").appendChild(MainDiv);
    document.querySelector("#sGame").addEventListener("click",()=>{

        startbuttonDiv=document.querySelector(".startbuttonDiv");
        startbuttonDiv.classList.add("none");
        SetUPDiv.style.gridTemplateRows="10% 1fr 10%";
        let gameDiv=document.createElement("div");
        gameDiv.classList.add("gamediv");
        for(let i=0;i<16;i++)
        {
            let newDiv=document.createElement("div");
            newDiv.classList=`elm${i+1} elm`;
            gameDiv.appendChild(newDiv);
        }
        SetUPDiv.appendChild(gameDiv);
        let buttonDiv=document.createElement("div");
        buttonDiv.classList.add("buttonDiv");
        let button1st=document.createElement("div");
        let btn1="<button id='Reset'>reset</button>";
        button1st.innerHTML=btn1;
        let button2nd=document.createElement("div");
        let btn2="<button id='home'>Home</button>";
        buttonDiv.appendChild(button1st);
        buttonDiv.appendChild(button2nd);
        button2nd.innerHTML=btn2;
        SetUPDiv.appendChild(buttonDiv);
        

    });
   
   
}
    

});