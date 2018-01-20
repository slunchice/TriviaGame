
 

 function submitQuiz() {
    console.log('submitted');


    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
     
                var answerValue = Number(radiosNo[i].value);
            }
        }
        
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }


    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')+ answerScore('q5')+ answerScore('q6'));
    console.log("CalcScore: " + calcScore); 

    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }


    var showScore = "Your Score: " + calcScore +"/" + questionCounter;

    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

$('#submitButton').click(function() {
    $(this).addClass('hide');
});

});

var count = 30;
function countdown() {
    setTimeout(timer,1000)
}
function timer(){
    count--;
    document.getElementById("timer").innerHTML = count;
    if (count == 0) {
        submitQuiz();
        alert('time is up');
    } else {
        countdown();
    }
}
countdown();
document.getElementById("timer").innerHTML = count;
