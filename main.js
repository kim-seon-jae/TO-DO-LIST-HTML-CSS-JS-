let inputTextEl = document.querySelector('.input_text')
let inputBtnEl = document.querySelector('.input_btn')
let inputBtnRemoveEl = document.querySelector('.input_btn_remove')
let inputBtnSelectRemoveEl = document.querySelector('.input_btn_select_remove')

let outputUlEl = document.querySelector('.output_ul')


// let selectDataEl = document.createElement('input')


// 해야할 목록 담아두는 배열
let arr = [];
// checkbox로 선택한거 담아두는 배열
let selectArr = [];


// todolist 작성하기
inputBtnEl.addEventListener('click',function () {
  if(arr.length >= 0 && arr.includes(inputTextEl.value) === false) {
    // 같은 내용 걸러내기
    arr.push(inputTextEl.value)
  
  let div = document.createElement('div') // div 태그 생성
  let outputDataEl = document.createElement('li'); // li 태그 생성
  let selectDataEl = document.createElement('input') // input 태그 생성

  div.id = inputTextEl.value // div 태그 클래스 값 지정
  
  selectDataEl.className=`checkbox ${inputTextEl.value}`// input 태그 클래스 값 지정
  selectDataEl.setAttribute("type","checkbox") // input 타입 지정
  selectDataEl.setAttribute("value",`${inputTextEl.value}`) // input 속성 값 지정
  
  selectDataEl.addEventListener('change',function () {
    if(selectArr.includes(selectDataEl.value)){
      let k = selectArr.indexOf(selectDataEl.value)
      selectArr.splice(k,1)
      console.log("selectArr : ",selectArr)
    } else {
      selectArr.push(selectDataEl.value)
      console.log("selectArr : ",selectArr)
    }
  })


  outputDataEl.className='data' // li 태그 클래스 지정

  outputDataEl.textContent=arr[arr.length-1] // li 태그 값 넣기
  
  div.appendChild(selectDataEl) // div 태그에 input 넣기
  div.appendChild(outputDataEl) // div 태그에 li 넣기

  outputUlEl.appendChild(div) // ul 태그에 div 넣기

  console.log("arr : ",arr)
  
  
  }
  else {
    alert("동일한 내용이 있습니다.")
  }
})

// 작성한 내용 전체 삭제하기
inputBtnRemoveEl.addEventListener('click',function () {
  arr=[]
  selectArr=[];
  while (outputUlEl.firstChild) {
    outputUlEl.removeChild(outputUlEl.firstChild)
  }
  console.log("selectArr : ",selectArr)
  console.log("arr : ",arr)
})

// 작성한 내용 선택 삭제하기
inputBtnSelectRemoveEl.addEventListener('click',function () {
  if(selectArr.length>=1) {
    for(let i = 0; i<selectArr.length; i++) {
      if(arr.includes(selectArr[i])) {
        let a = document.querySelector(`#${selectArr[i]}`)
        let k1 = arr.indexOf(selectArr[i])
        let k2 = selectArr.indexOf(selectArr[i])
        arr.splice(k1,1)
        selectArr.splice(k2,1)
        a.remove()

        console.log("selectArr : ",selectArr)
        console.log("arr : ",arr)
      }
    }
  }
})

