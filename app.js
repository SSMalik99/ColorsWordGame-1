// function bodyLoading() {
//     console.log("running");
    
//     allDiv = document.querySelectorAll(".first-div"); //This will return array that's why we can use forEach loop
//     allD = document.getElementsByClassName("first-div");//This will return collection of elements so we prefer for loop
    
    // allDiv.forEach((ele)=>{
    //     console.log(ele);
    // })

    // for (let i = 0; i < allD.length; i++) {
    //     console.log("i'm from AllD")
    //     console.log(allD[i])
    // }

    // allD.forEach((d) => {
    //     console.log("this from allD");
    // })
// }

function thisLoadFun() {
    
}
addEventListener('', thisLoadFun())

document.addEventListener('load', () => {

})

myDiv = document.getElementsByClassName('first-div');


function hideDiv(){

    console.log(event.target)
    event.target.style.display = "none";
    // console.log(ele);
    // myDiv = document.getElementsByClassName('first-div');
    // myDiv = document.querySelectorAll(".first-div");
    // myDiv.forEach(ele => {
    //     ele.style.display = "none";
    // });
    // myDiv.style.display = "none";

}


// myDiv.addEventListener('click', ()=>{
//     myDiv.style.display = "none";
    
// })




function paymentMethod(){
    num = Math.floor(Math.random()*10)
    console.log(num);
    if(num >= 5){
        document.getElementById('payment-msg').innerHTML = `<div class="payment-success">payment is successfully added.</div>`
        // document.getElementsByClassName('payment-failure')[0].innerHTML =""

    }else{
        document.getElementById('payment-msg').innerHTML = `<div class="payment-failure">payment is not added.</div>`;
        // document.getElementsByClassName('payment-success')[0].innerHTML =""
    }
}

// paymentMethod();

document.getElementById("payment-btn").addEventListener('click', paymentMethod);



