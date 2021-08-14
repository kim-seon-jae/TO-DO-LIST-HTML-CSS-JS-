let inputTextEl = document.querySelector('.input_text')
let inputBtnEl = document.querySelector('.input_btn')
let modalBtnEl = document.querySelector('#modal_btn')
let modalBtnCloseEl = document.querySelector('#modal_close_btn')
let inputBtnRemoveEl = document.querySelector('.input_btn_remove')
let inputBtnSelectRemoveEl = document.querySelector('.input_btn_select_remove')
let outputUlEl = document.querySelector('.output_ul')

let alarmTimeHour = document.querySelector('#hour')
let alarmTimeMinite = document.querySelector('#minite')
let alarmTimeSecond = document.querySelector('#second')



// let selectDataEl = document.createElement('input')


// 해야할 목록 담아두는 배열
let arr = [];
// checkbox로 선택한거 담아두는 배열
let selectArr = [];

let helpindex = 0;

// 알람 기능






// 추가버튼 누르면 모달창 열리기
inputBtnEl.addEventListener('click',function(){
  if(inputTextEl.value.length === 0){
    alert('값을 입력해 주세요')
    return
  } else {
    document.querySelector('.modal_wrap').style.display = 'block'
    document.querySelector('.black_bg').style.display = 'block'
  }
})
// 모달창 안 닫기버튼 누르면 닫히기
modalBtnCloseEl.addEventListener('click', function() {
  document.querySelector('.modal_wrap').style.display = 'none'
  document.querySelector('.black_bg').style.display = 'none'
})
// 모달창안 확인버튼(todolist 작성하기)
modalBtnEl.addEventListener('click',function () {
  
  if(inputTextEl.value.length === 0){
    alert('값을 입력해 주세요')
    return
  } else if(arr.length >= 0 && arr.includes(inputTextEl.value) === false) {
    // 같은 내용 걸러내기
    
   
    
    


  arr.push(inputTextEl.value)
  
  let div = document.createElement('div') // div 태그 생성
  let outputDataEl = document.createElement('li'); // li 태그 생성
  let selectDataEl = document.createElement('input') // input 태그 생성
  let writingTimeEl = document.createElement('span')

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

  console.log("outputDataEl : ", outputDataEl.textContent)

  let time_alarm = `알람 시간 : ${alarmTimeHour.value}시 ${alarmTimeMinite.value}분 ${alarmTimeSecond.value}초 `
  let currentTime = `입력 시간 : ${new Date().getHours()}시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초`
  // let time = currentTime + "\n" + time_alarm
  let time = time_alarm
  writingTimeEl.className = 'time'
  writingTimeEl.textContent = time
  console.log(currentTime + "\n" + time_alarm)
  div.appendChild(selectDataEl) // div 태그에 input 넣기
  div.appendChild(outputDataEl) // div 태그에 li 넣기
  div.appendChild(writingTimeEl) // div 태그에 span 넣기

  outputUlEl.appendChild(div) // ul 태그에 div 넣기

  // outputUlEl.insertBefore(div,outputUlEl.firstChild)
  console.log("arr : ",arr)
  



  // 알람 기능
  
  let timeSum = 0;

  let hour = Number(alarmTimeHour.value) * 3600
  let minite = Number(alarmTimeMinite.value) * 60
  let second = Number(alarmTimeSecond.value)

  // 알람시간
  timeSum = hour + minite + second 
  // 현재시간
  let currentTimeSum = new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds()
  let alarmTime = (timeSum - currentTimeSum) * 1000 - 1000

  console.log(alarmTime)

  // 알람 소리
  let audio = new Audio('alarmAudio.mp3')

  if(!isNaN(timeSum)) {
    let data = '.'+'hour'+alarmTimeHour.value
    let calender = document.querySelector(data)
    if(alarmTime > 0) {
      setTimeout(function() {
        calender.textContent = alarmTimeHour.value + '시';
        calender.style.backgroundColor = "#FFFEE6";
        audio.play()
      },alarmTime + 1000)
      setTimeout(function() {
        alert(outputDataEl.textContent)
      },alarmTime + 1000)
    } else {
      setTimeout(function() {
        
        calender.textContent = alarmTimeHour.value + '시';
        calender.style.backgroundColor = "#FFFEE6";
        audio.play()
        alert(outputDataEl.textContent)
      },(86400 - (currentTimeSum - timeSum)) * 1000 - 1000)
    }
    // 캘린더에 알람시간 표시하기
  if(alarmTimeHour !== 'none') {    
    calender.textContent = inputTextEl.value
    calender.style.backgroundColor = "#f9f5ad";
  }
  }
  
  console.log("hour : ", hour ,"minite : ", minite, "second : ", second, "sum : ", hour + minite + second)

  console.log(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds())

  console.log(currentTimeSum)
  

  console.log("hour : ", alarmTimeHour.value, "minite : ", alarmTimeMinite.value, "second : ", alarmTimeSecond.value )
  
  // 추가 완료후 모달창 닫기
  document.querySelector('.modal_wrap').style.display = 'none'
  document.querySelector('.black_bg').style.display = 'none'

  } else {
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
    let selectArrLength = selectArr.length
    let newSelectArr = [...selectArr]
    let newArr = [...arr]
    
    for(let i = 0; i<selectArrLength; i++) {
      if(newArr.includes(newSelectArr[i])) {
        let a = document.querySelector(`#${newSelectArr[i]}`)
        a.remove()
        let k1 = newArr.indexOf(newSelectArr[i]) + helpindex
        let k2 = newSelectArr.indexOf(newSelectArr[i]) + helpindex
        arr.splice(k1,1)
        selectArr.splice(k2,1)
        helpindex = helpindex - 1;
      } 
    }
    
  }
})

