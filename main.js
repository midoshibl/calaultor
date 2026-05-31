const calculatorContainer = document.querySelector(".calculator-container");
const displayArea = document.querySelector(".display-area")

calculatorContainer.addEventListener('click', e => {
    if(e.target.matches("button")){
        switch(e.target.textContent){
            case 'C':
                clear();
                break;
            case 'Del':
                deleteOneValue();
                break;
            case "=" :
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);       
        }

    }
} )


function clear() {
    displayArea.textContent = "";
}

function addToDisplayArea(value){
    displayArea.textContent = displayArea.textContent + value ;
}

function deleteOneValue(){
    displayArea.textContent = displayArea.textContent.substring(0 , displayArea.textContent.length - 1)
}
function evaluate() {
    try {
        // هذا السطر يقوم بحساب المعادلة النصية بشكل آمن ومدمج في المتصفح دون الحاجة لـ math.js
        let calculation = new Function(`return ${displayArea.textContent}`)();
        
        displayArea.textContent = calculation;
    } catch(error) {
        displayArea.textContent = "Invalid Operation";
        console.error(error);
    }
}