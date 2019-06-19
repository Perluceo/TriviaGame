
var questions =  [{
    question: "Direwolf, known as the runt of the litter is",
    answer: ["Ghost", "Joffrey","Grey Wind","Summer"],
    correctAnswer: "Ghost",
}, {
    question: "Which name is given to the bastards of The Reach",
    answer: ["Snow","Flowers","Stark","Maester"],
    correctAnswer: "Flowers",
}, {
    question: "King Robert Baratheon says 'In my dreams, I kill him every night.',whom is the king referring",
    answer: ["Lollys Stokeworth", "John Snow","Jaime Lannister","Rhaegar Targaryen"],
    correctAnswer: "Rhaegar Targaryen",
}, {
    question: "Who said 'I always hated crossbows.  Take to long to load",
    answer: ["Rodrik Cassel", "Robb Stark","Yoren","Jory Cassel"],
    correctAnswer: "Yoren",
}
];

$('#start').on('click', function(){
    $('#start').remove();
    for(var i=0; i<questions.length; i++){
        var h2 = $('<h2>');
        h2.text(questions[i].question);
        $('#subwrapper').append(h2);
              

        var answersBox = questions[i].answer;
        for(var j=0; j<answersBox.length; j++) {
            $("#subwrapper").append("<input type='radio' name='question-"+i+"' value=' "+answersBox[j]+"'>"+answersBox[j]);
        }
    } 

  

})
