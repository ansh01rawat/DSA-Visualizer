const button = document.getElementById("start-btn");
const boxes = document.querySelectorAll(".array-box");
const result = document.getElementById("result");

button.addEventListener("click", function(){

    const target = Number(document.getElementById("target-input").value);

    let low = 0;
    let high = boxes.length - 1;

    button.disabled = true;
    binarySearchStep(low, high, target);

});
function resetBoxes() {
            for(let i = 0; i < boxes.length; i++){
                boxes[i].style.background = "#4405e4";
            }
}
function greyOut(start, end){
            for(let i = start; i <= end; i++){
                boxes[i].style.background = "#9ca3af";
            }
}
function binarySearchStep(low, high, target){
        if(low > high){
        result.textContent = "target not found"
        button.disabled = false;
        return;}
        resetBoxes();
        let mid = Math.floor((low + high) / 2);
        let midValue = Number(boxes[mid].textContent);
        boxes[low].style.background = "#000000";
        boxes[high].style.background = "#ef4444";
        boxes[mid].style.background = "#facc15";
         setTimeout(() => {

        if(target === midValue){
            result.textContent = "target found";
            boxes[mid].style.background = "hsl(120, 87%, 46%)";
            button.disabled = false;
            return;
            
        }
        else if(target > midValue){
            greyOut(low,mid);
            low = mid + 1;
        }
        else{
            greyOut(mid+1,high);
            high = mid - 1;
        }
        

        binarySearchStep(low, high, target);

    }, 800);

}