'use strict'


function mySet(){
    myWeekTbl = new Array( "日","月","火","水","木","金","土" );
    myDate = new Date( document.myF.myY.value, document.myF.myM.value-1, document.myF.myD.value );//月は マイナス1 。月は 0月～ 11月
    myWeek = myDate.getDay();
    document.myF.myMes.value =  myWeekTbl[myWeek] + "曜日生まれ";
}



function getSymbol(insertedDate) {  
    if (insertedDate === "月曜日") {
      return "トラ(東)"; 
    } else if (insertedDate === "火曜日") {
      return "ライオン(南東)"; 
    } else if (insertedDate === "水曜日午前") {
      return "牙のあるゾウ(南)"; 
    } else if (insertedDate === "水曜日午後") {
      return "牙のない像(北西)"; 
    } else if (insertedDate === "木曜日") {
      return "ねずみ(西)"; 
    } else if (insertedDate === "金曜日") {
      return "モグラ(北)"; 
    } else if (insertedDate === "土曜日") {
      return "龍(南西)"; 
    } else if (insertedDate === "日曜日") {
      return "ガルーダ(北東)"; 
    } else {
      return "無効な値"; 
    }
  }
  
  console.log(getSymbol("月曜日"));
  
  let insertedDate = document.getElementById('date');
  let msg = document.getElementById('msg');
  let checkButton = document.getElementById('checkButton');
  
  function buttonClick() {
    msg.innerText = 'シンボルは' + getSymbol(insertedDate.value) ;
  }
  
  checkButton.addEventListener('click', buttonClick);




