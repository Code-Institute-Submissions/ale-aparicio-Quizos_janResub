function addForm() {
    $('#last-form').clone().find('input').val('').end().appendTo('#extra-question');
};

function removeForm() {
    $('#extra-question .question-form').last().remove();
};

