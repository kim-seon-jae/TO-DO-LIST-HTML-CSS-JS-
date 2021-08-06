let inputTextEl = document.querySelector('.input_text')
let inputBtnEl = document.querySelector('.input_btn')
let inputBtnRemoveEl = document.querySelector('.input_btn_remove')

let outputUlEl = document.querySelector('.output_ul')

console.log(inputBtnEl)

let arr = [];
// 해야할 목록 담아두는 배열

inputBtnEl.addEventListener('click',function () {
  arr.push(inputTextEl.value)
  let outputDataEl = document.createElement('li');
  outputDataEl.className='data'
  outputDataEl.textContent=arr[arr.length-1]
  outputUlEl.appendChild(outputDataEl)
})

inputBtnRemoveEl.addEventListener('click',function () {
  arr=[];
  while (outputUlEl.firstChild) {
    outputUlEl.removeChild(outputUlEl.firstChild)
  }
})


