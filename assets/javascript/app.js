$('#start').on('click', function () {
    results.start()
})


var questions = [{
    question: "Direwolf, known as the runt of the litter is",
    answer: ["Ghost", "Joffrey", "Grey Wind", "Summer"],
    correctAnswer: "Ghost",
}, {
    question: "Which name is given to the bastards of The Reach",
    answer: ["Snow", "Flowers", "Stark", "Maester"],
    correctAnswer: "Flowers",
}, {
    question: "King Robert Baratheon says 'In my dreams, I kill him every night.',whom is the king referring",
    answer: ["Lollys Stokeworth", "John Snow", "Jaime Lannister", "Rhaegar Targaryen"],
    correctAnswer: "Rhaegar Targaryen",
}];


var results = {
    correct: 0,
    incorrect: 0,
    tiktok: 25,
    
    clock: function () {
        results.tiktok--;
        $('#tiktok').html(results.tiktok);
        if (results.tiktok <= 0) {
            console.log("No more time");
            results.end();
        }
    },
    start: function () {
        timer = setInterval(results.clock, 1000);
        $('#subwrapper').prepend('<h2>You have : <span id="tiktok">25</span></span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            var h2 = $('<h2>');
            h2.text(questions[i].question);
            $('#subwrapper').append(h2);
            var answersBox = questions[i].answer;
            for (var j = 0; j < answersBox.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value=' " + answersBox[j] + "'>" + answersBox[j]);
            }
        }

    },
    end: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if($(this).val()==questions[0].correctAnswer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if($(this).val()==questions[1].correctAnswer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if($(this).val()==questions[2].correctAnswer) {
               results.correct++;
            } else {
               results.incorrect++;
            }
        });

        this.scoreCard();
    },
        scoreCard: function(){
            clearInterval(results.clock);
            $('#subwrapper h2').remove();
            $('#subwrapper').html("<h2>You're done</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
       
        }
}