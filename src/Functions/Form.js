
const NextInput=(e,cls)=>{
    let key = e.keyCode;
    return key===13?document.querySelector(`.${cls}`).focus():console.log("no work");
}
 const ShowPassword = (a)=>{
 
    let elePass = document.querySelector(".pass");
    let eleIconPass = document.querySelector(".other");
      if(eleIconPass.classList.contains("fa-lock")){
         elePass.type="text";
         eleIconPass.classList.replace("fa-lock","fa-unlock");
      }else{
         elePass.type="password";
         eleIconPass.classList.replace("fa-unlock","fa-lock");
      }
}
 const Focus = ()=>{
   let svge = document.querySelectorAll(".svg");
    svge[0].classList.add("svgo")
    svge[1].classList.add("svg2")
}
 const Blur = ()=>{
     let svga = document.querySelectorAll(".svg")
     svga[0].classList.remove("svgo")
     svga[1].classList.remove("svg2")
}
export {NextInput,ShowPassword,Focus,Blur}