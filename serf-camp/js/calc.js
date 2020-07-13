$('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div><div class="quantity-button quantity-up">+</div></div>').insertAfter('.quantity input');
$('.quantity').each(function () {
  let spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max'),
    oldValue, newValue;

  btnUp.click(function () {
    oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      newValue = oldValue;
    } else {
      newValue = oldValue + 1;
    }
    spinner.find("input").val(newValue);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      newValue = oldValue;
    } else {
      newValue = oldValue - 1;
    }
    spinner.find("input").val(newValue);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', () => {
  let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
  $('.summ').html('$' + summ);
})