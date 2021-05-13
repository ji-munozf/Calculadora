function insrt(num) {
    $('.calcu-display').val($('.calcu-display').val() + num)
}

function eql() {
    $('.calcu-display').val(eval($('.calcu-display').val()))
}

function c() {
    $('.calcu-display').val('');
}