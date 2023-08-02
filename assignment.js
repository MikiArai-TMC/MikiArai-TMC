


function findMyDate(){
  myWeekArray = new Array( "日","月","火","水","木","金","土" );
  myDate = new Date( document.date.year.value, document.date.month.value-1, document.date.day.value );//月は マイナス1 。月は 0月～ 11月
  myWeek = myDate.getDay();
  document.date.myMes.value =  myWeekArray[myWeek] + "曜日生まれ";
}



function selectboxChange() {
  target = document.getElementById("output");

  selindex = document.form5.Select1.selectedIndex;
  switch (selindex) {
    case 1:
      target.innerHTML = "トラ(東)<br/>";
      break;
    case 2:
      target.innerHTML = "ライオン(南東)<br/>";
      break;
    case 3:
      target.innerHTML = "牙のあるゾウ(南)<br/>";
      break;
    case 4:
      target.innerHTML = "牙のない像(北西)<br/>";
      break;
    case 5:
      target.innerHTML = "ねずみ(西)<br/>";
      break;
      case 6:
      target.innerHTML = "モグラ(北)<br/>";
      break;
      case 7:
      target.innerHTML = "龍(南西)<br/>";
      break;
      case 8:
      target.innerHTML = "ガルーダ(北東)<br/>";
      break;     
  }
}




// function getSymbol(insertedDate) {  
//     if (insertedDate === "月曜日") {
//       return "トラ(東)"; 
//     } else if (insertedDate === "火曜日") {
//       return "ライオン(南東)"; 
//     } else if (insertedDate === "水曜日午前") {
//       return "牙のあるゾウ(南)"; 
//     } else if (insertedDate === "水曜日午後") {
//       return "牙のない像(北西)"; 
//     } else if (insertedDate === "木曜日") {
//       return "ねずみ(西)"; 
//     } else if (insertedDate === "金曜日") {
//       return "モグラ(北)"; 
//     } else if (insertedDate === "土曜日") {
//       return "龍(南西)"; 
//     } else if (insertedDate === "日曜日") {
//       return "ガルーダ(北東)"; 
//     } else {
//       return "無効な値"; 
//     }
//   }
  
//   console.log(getSymbol("月曜日"));
  
//   let insertedDate = document.getElementById('date');
//   console.log(insertedDate.value)
//   let msg = document.getElementById('msg');
//   let checkButton = document.getElementById('checkButton');
  
//   function buttonClick() {
//     msg.innerText = 'シンボルは' + getSymbol(insertedDate.value) ;
//   }
  
//   checkButton.addEventListener('click', buttonClick);




