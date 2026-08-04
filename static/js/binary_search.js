const button = document.getElementById("start-btn");
const boxes = document.querySelectorAll(".array-box");
const result = document.getElementById("result");

button.addEventListener("click", function(){

    const target = Number(document.getElementById("target-input").value);

    let low = 0;
    let high = boxes.length - 1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        let midValue = Number(boxes[mid].textContent);

        if(target === midValue){

            result.textContent = "Target Found";

            break;

        }

        else if(target > midValue){

            low = mid + 1;

        }

        else{

            high = mid - 1;

        }

    }

});