const button = document.getElementById("start-btn");

const boxes = document.querySelectorAll(".array-box");

document.getElementById("result").textContent = "";
button.addEventListener("click", function(){

    boxes.forEach(box => {
        box.style.background = "#2563eb";
    });
    let found = false
    
    

            const target = Number(document.getElementById("target-input").value);
            for(let i = 0; i < boxes.length; i++){
                setTimeout(()=>{
                if(found)return;
                
                if(Number(boxes[i].textContent) === target){
                boxes[i].style.background = "green";
               document.getElementById("result").textContent =`Target Found at Index ${i}`;
               found = true;
               
               }else{
                boxes[i].style.background = "orange"
               }}, i*600);
            }
    
            

        })




