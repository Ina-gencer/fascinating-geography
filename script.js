const btn = document.querySelector('.btn');
btn.addEventListener('click',  count);
Input.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        count();
    }
})


function count(e) {
    e.preventDefault();

    let points = 0;

    if( document.querySelector('#answerOne').checked) {
        points++;
    }
 if(document.querySelector('#answerTwo').checked) {
        points++;
    }
    if(document.querySelector('#answerThree').checked) {
        points++;
    }
    if(document.querySelector('#answerFour').checked) {
        points++;
    }
    if(document.querySelector('#answerFive').checked) {
        points++;
    }
    if(document.querySelector('#answerSix').checked) {
        points++;
    }
   if(document.querySelector('#answerSeven').checked) {
        points++;
    }
    if(document.querySelector('#answerEight').checked) {
        points++;
    }
    if(document.querySelector('#answerNine').checked) {
        points++;
    }
  if(document.querySelector('#answerTen').checked) {
        points++;
    }
    if(document.querySelector('#answerEleven').checked) {
        points++;
    }
    if(document.querySelector('#answerTwelve').checked) {
        points++;
    }
    if(document.querySelector('#answerThirteen').checked) {
        points++;
    }
     if(document.querySelector('#answerFourteen').checked) {
        points++;
    }
     if(document.querySelector('#answerFifteen').checked) {
        points++;
    }
    document.querySelector('.par').textContent = 'Ваши баллы: '+ points;
   

 if(points < 15) {
    document.querySelector('.list').textContent = 'Узнать правильные ответы';
 }
      

    
}



