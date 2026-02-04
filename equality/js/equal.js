function checkEquality(){
    const str1 =document.getElementById("str1").value;
    const str2 =document.getElementById("str2").value;
    const msg = document.getElementById("msg");


    if (str1 === str2){
        msg.textContent = "The two strings are equal"
    } 
    else{
        msg.textContent = "The strings are not equal"
    }
}

function computeLengthSum(){
    const str1 =document.getElementById("str1").value;
    const str2 =document.getElementById("str2").value;
    const msg = document.getElementById("msg");

    const totalLength = str1.length + str2.length;
    msg.textContent = "The sum of the length is: " + totalLength;
}


document.getElementById("check-button").addEventListener("click",checkEquality);
document.getElementById("length-button").addEventListener("click",computeLengthSum);