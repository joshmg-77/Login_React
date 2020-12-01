const NewAccount = (e)=>{ 
    e.preventDefault();
    let front = document.querySelector(".front");
    front.style.backfaceVisibility = "hidden";
    front.style.transform = "translate(-50%,-50%) rotateY(180deg)";
    document.querySelector(".back").style.zIndex = 10;
  }
const LogIn = (e)=>{
    e.preventDefault();
    let front=document.querySelector(".front");
    front.style.zIndex = 11;
    front.style.transform = "translate(-50%,-50%) rotateY(0deg)";
  }
export {NewAccount,LogIn};