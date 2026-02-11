const text=["Java Full Stack Developer","Spring Boot Specialist","Creative UI Engineer"];
let i=0,j=0;
const typing=document.querySelector(".typing");

function type(){
  if(j<text[i].length){
    typing.innerHTML+=text[i][j++];
    setTimeout(type,80);
  }else{
    setTimeout(erase,1500);
  }
}

function erase(){
  if(j>0){
    typing.innerHTML=text[i].substring(0,--j);
    setTimeout(erase,50);
  }else{
    i=(i+1)%text.length;
    setTimeout(type,500);
  }
}

type();

const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});
