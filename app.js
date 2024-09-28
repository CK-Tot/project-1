const bodyEL = document.querySelector("body");

bodyEL.addEventListener("mousemove", (event) =>{
   const xPosition = event.offsetX;
   const yPosition = event.offsetY;
   const spanEL = document.createElement("span");
   spanEL.style.left = xPosition + "px";
   spanEL.style.top = yPosition + 'px';
   bodyEL.appendChild(spanEL);
   const size = Math.random() * 100 ;
   spanEL.style.width = size + "px";
   spanEL.style.height = size + "px";
   setTimeout(() => {
    spanEL.remove()
   }, 3000);
})