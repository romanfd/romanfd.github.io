$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [0, 15000],
    slide: function (event, ui) {
      $("#amount").val("От " + ui.values[0] + " До " + ui.values[1]);
    }
  });
  $("#amount").val("От " + $("#slider-range").slider("values", 0) +
    " До " + $("#slider-range").slider("values", 1));
});
