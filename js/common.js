function inputFieldValue(element){
    const inputFieldValue = document.getElementById(element);
    const inputField = inputFieldValue.value;
    const inputValue = parseInt(inputField);
    
    return inputValue;
    
};

function innerTextValue(element,value){
    const innerText = document.getElementById(element);
    innerText.innerText = value;
};

