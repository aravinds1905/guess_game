let randomNum=Math.floor(Math.random()*100);
let lives=10;
function res(){
    const temp=document.querySelector("#startBox");
    const num=document.querySelector("#startBox");
    let val=parseInt(num.value);
    if(randomNum==val)
    {
        const href="./win.html";
        windown.open(href, "_self");
    }
    else
    {
        lives--;
        const liv=document.querySelector("#liv");
        liv.innerText=`Lives - ${lives}`;
        if(lives==0){
            lives=0;
            const href="./lose.html";
            window.open(href,"_self");
        }
        else if(val<randomNum){
            const res1=document.querySelector("#rem");
            res1.innerText=`Your Guess is Too Low, You Have Remaining ${lives} Lives..!`
        }
        else if(val>randomNum){
            const res1=document.querySelector("#rem");
            res1.innerText=`Your Guess is Too High, You Have Remaining ${lives} Lives..!`
        }
    }
}