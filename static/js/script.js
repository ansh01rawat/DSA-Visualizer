const button = document.getElementById("start-btn");

const boxes = document.querySelectorAll(".array-box");

const result = document.getElementById("result")
button.addEventListener("click", function(){
    result.textContent = "";
    boxes.forEach(box => {
        box.style.background = "#2563eb";
    });
    
    let found = false
    
    
            button.disabled = true;
            const target = Number(document.getElementById("target-input").value);
            for(let i = 0; i < boxes.length; i++){
                setTimeout(()=>{
                if(found)return;
                if (i > 0) {
                boxes[i - 1].style.background = "#2563eb";
                }
                if(Number(boxes[i].textContent) === target){
                boxes[i].style.background = "#22c55e";
                result.textContent =`Target Found at Index ${i}`;
                found = true;
               
               }else{
                boxes[i].style.background = "#f97316"
               }}, i*600);
            }
            setTimeout(() => {

            if(!found){
            result.textContent =
            "Target Not Found";
            }button.disabled = false;

            }, boxes.length * 600);
            

        })




