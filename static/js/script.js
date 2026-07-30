const button = document.getElementById("start-btn");

const boxes = document.querySelectorAll(".array-box");

button.addEventListener("click", function(){

    boxes.forEach(box => {
        box.style.background = "#2563eb";
    });

    boxes.forEach((box,index)=>{

        setTimeout(()=>{

            if(index>0){
                boxes[index-1].style.background="#2563eb";
            }
            if(index == boxes.length-1){
                box.style.background="green"
            }else{
                box.style.background="orange";
            }

        },index*600);

    });

});