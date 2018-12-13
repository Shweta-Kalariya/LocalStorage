const inputKey = document.getElementById('inputkey');
const inputValue = document.getElementById('inputvalue');
const btnInsert = document.getElementById('btnInsert');
const lsOutput = document.getElementById('lsOutput');
btnInsert.onclick = function(){
    if(typeof (Storage) !== undefined){
        if(inputKey.value.trim() !== '' && inputValue.value.trim() !== ''){
            localStorage.setItem(inputKey.value, inputValue.value);
            lsOutput.innerHTML = key +' :: '+ value;
        }else{
            console.log("You are required to enter both Key and Value");
        }
        
    }else{
        console.log('Your browser doesn\'t support Storage');
    }
};


