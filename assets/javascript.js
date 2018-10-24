$(document).ready(function() {
    var answerU= [];
   
    var Friends = [
        {
        question: "What is the name of Joey's agent?",
        choise:["Gloria","Estelle","Gisella"],
        image:[],
        correctAnswer: "Estelle"
    },
    {
        question: "What do Monica and Rachel do to get their apartment back?",
        choise:["Offer footbal tickets", "Paint the walls purple", "Kiss"],
        image:[], 
        correctAnswer: "Kiss"
    },
    {
        question: "What color is the couch in Central Perk?",
        choise:["Orange","Red","Blue"],
        image:[], 
        correctAnswer: "Orange"
    },
    {
        question: "What is the name of Ross's monkey?",
        choise:["Manuel","Maddox","Marcel"],
        image:[], 
        correctAnswer: "Marcel"
    },
    {
        question: "They don't know that we know that they know we know. Who said it?",
        choise:["Rachel","Joey","Phoebe"],
        image:[], 
        correctAnswer: "Phoebe"
    }
];
       
     for (var x = 0 ; x <Friends.length; x++)  
     {
        var questionDiv = $("<div>");
        questionDiv.html(Friends[x].question)
        console.log(Friends[x].question)
        console.log(questionDiv)
        $("#questions").append(questionDiv);   
        for (var i = 0; i < 3; i++) 
             {
                
                var answerBtn = $("<button>");
                answerBtn.addClass("answer-button-color answer-button");
                answerBtn.val(Friends[x].choise[i]);
                // answerBtm.attr("data-answer",Friends[0].correctAnswer);
                answerBtn.text(Friends[x].choise[i]);
                $("#questions").append(answerBtn);   
                 
             }
        
    }
                var i = 0;
                $(".answer-button").on("click", function() {
               // console.log($(this).val());  
                answerU.push(($(this).val()));
                console.log(i);
                //console.log(answerU)
                // for(var i = 0 ; i < Friends.length; i++)
                // {
                    if (Friends[i].correctAnswer == answerU[i])
                    {
                        
                        $("#answer").html( "the answer is right");
                        //count++;
                        //console.log(answerU[i]);
                        //console.log("you did right");
                        i=i+1;
                        //console.log("go to the next question ");
                    }
                    else{
                        //console.log(Friends[i].correctAnswer);
                        $("#answer").html("WRONG, the answer is: " + Friends[i].correctAnswer);
                        i=i+1;
                    }
                   
            //    }
                
            });
                
});
    
   
