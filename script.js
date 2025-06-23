
// document.querySelectorAll(".js-input-button")
//     .forEach((ele)=> {
//         // ele.addEventListener('click', () => {
//         //     console.log(ele.innerText);
//         // });
//         console.log(ele);
//     });

// learning query selector
// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((ele)=> {
//     console.log(ele)
// });

function inputget(val) {
    document.querySelector('.dis').value = val + document.querySelector('.dis').value;
}

function inputgetc() {
    document.querySelector('.dis').value = "";
}

function calc() {
    var userinp = document.querySelector('.dis').value;
    var res = eval(userinp);
    document.querySelector('.dis').value = res;
}