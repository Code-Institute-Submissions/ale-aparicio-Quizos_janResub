function addForm() {
    $('#first-form').clone().find('input').val('').end().appendTo('#extra-question');
};

window.onload=function(){

    function incrementQuestionNum() {
        let questionNum = parseInt(document.getElementById("first-form").value)
        let calculatedQuestionNum = calculateQuestionNum();
        let  = questionNum === calculatedQuestionNum[0];

        let newQuestion = parseInt(document.getElementById("question-num").innerText)
        document.getElementById("question-num").innerText = ++newQuestion;
    }

    if(addForm) {
        incrementQuestionNum()
    } 

    incrementQuestionNum(calculatedQuestionNum[1]);
}