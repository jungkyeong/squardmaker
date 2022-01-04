// 드래그 담당

const PositionLine= document.querySelector(".PositionLine");
    const player= document.querySelector(".player");
    const position= document.querySelector(".position");

    let dragged;

    document.addEventListener("drag",(event)=>{

    },false);

    document.addEventListener("dragstart",(event)=>{
    dragged = event.target;
    //투명도 
    event.target.style.opacity = 0.5;
    },false);

    document.addEventListener("dragend", (event)=>{
    //투명도 리셋
    event.target.style.opacity = "";
    }, false);

    document.addEventListener("dragover", (event)=> {
    // 드롭 허용
    event.preventDefault();
    }, false);

    document.addEventListener("dragenter",(event)=>{
        if(event.target.className=="position"){
            event.target.style.background= "yellowgreen";
        }
    });
    
    document.addEventListener("dragleave", (event)=>{
        if(event.target.className=="position"){
            event.target.style.background= "";
        }
    },false);

    document.addEventListener("drop", (event)=> {
        event.preventDefault();
        if (event.target.className == "position") {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
        }
      }, false);


