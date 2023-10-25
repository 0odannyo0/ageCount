const form = document.querySelector('#my-form');
const date = document.querySelector('#date');
const test = document.querySelector('#test');

form.addEventListener('submit', check);

function check(e){
  e.preventDefault();
  console.log('test');
  printResult();
}


function printResult() {

  const DOB = date.value;
  const milliDOB = Date.parse(DOB);
  const milliNow = Date.now();
  const millicount = milliNow - milliDOB;

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  // Math.round是四捨五入小數第一位 大於0.5就會進位 小於0.5就會捨去
  const years = Math.round(millicount/year);
  const months = years * 12;
  const days = years * 365;
  const hours = Math.round(millicount/hour);
  const mins = Math.round(millicount/min);
  const secs = Math.round(millicount/sec);

  const messenge = 'Age in Years：'+ years + 
  '</br>Age in Months：' + months +
  '</br>Age in Days：' + days +
  '</br>Age in Hours：' + hours +
  '</br>Age in minute：' + mins +
  '</br>Age in second：' + secs;

  document.querySelector('#datashow').innerHTML = messenge;
}



  
