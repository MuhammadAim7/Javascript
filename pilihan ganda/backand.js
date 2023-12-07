//==========================
//===========DATA=====================
//==========================
const DB_KUIS =[
    {
        question : "apa kepanjangan AG ?" ,   
        answers : ['air gun','aim ganteng','auto ground', 'aim gundul']
        },
    {
        question : "sup di balaik ?" ,   
        answers : ['pus', 'snb', 'ups', 'tumpah']
        },
    {
        question : "polisi itu harus  ?" ,   
        answers : ['Hitam', 'ganteng', 'laki-laki', 'perempuan']
        },
    {
        question : "sinkatan dari MSG ?" ,   
        answers : ['monosodium glukamat', 'makan sayur goreng', 'mie sedap goreng', 'minyak sawit grand']
}

         ]

const CORRECT_ANSWER =[1,3,0,2]

//==========================
//=========== Set Up Pertanyaan ====================
//==========================
let current_q = 0
let score = 0
let save_Answer = []

document.addEventListener("DOMContentLoaded", function(event) {
    setupQuestion()
});

function setupQuestion() {
    document.getElementById('question').innerText = DB_KUIS [current_q] ['question']

    document.getElementById('choiceText0').innerText = DB_KUIS[current_q] ['answers'] [0]
    document.getElementById('choiceText1').innerText = DB_KUIS[current_q] ['answers'] [1]
    document.getElementById('choiceText2').innerText = DB_KUIS[current_q] ['answers'] [2]
    document.getElementById('choiceText3').innerText = DB_KUIS[current_q] ['answers'] [3]
}

function nexQuestion(){
    current_q++

    saveAnswer()

    if (current_q > DB_KUIS.length -1)
    stopKuis()

    setupQuestion()
}


function stopKuis(){
    checkScore()

    alert('Ulangan Selesai! ' + score )
    
    return
}

function saveAnswer(){ 
    const Answer = document.querySelector('input[name="choices"]:checked');
    if (Answer !=null){
        save_Answer.push(parseInt(Answer.getAttribute('data-id')))
        console.log(save_Answer)
    } else {
        save_Answer.push(5)
    }
}

function checkScore(){
    for (i = 0; i < save_Answer.length; i++){
        if (save_Answer[i] == CORRECT_ANSWER[i])

            score +=25
        
    }

}