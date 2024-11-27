function calculateTotal() {
  let unit_price = {
    "45lbs": 50, // Price per 45 lbs plate
    "35lbs": 40, // Price per 35 lbs plate
    "25lbs": 30, // Price per 25 lbs plate
    "10lbs": 15  // Price per 10 lbs plate
  };
  let item_price = {};

  item_price["45lbs"] = ($("#qty_45lbs").val() * unit_price["45lbs"]);
  $("#price_45lbs").val(item_price["45lbs"]);

  item_price["35lbs"] = ($("#qty_35lbs").val() * unit_price["35lbs"]);
  $("#price_35lbs").val(item_price["35lbs"]);

  item_price["25lbs"] = ($("#qty_25lbs").val() * unit_price["25lbs"]);
  $("#price_25lbs").val(item_price["25lbs"]);

  item_price["10lbs"] = ($("#qty_10lbs").val() * unit_price["10lbs"]);
  $("#price_10lbs").val(item_price["10lbs"]);

  let total = item_price["45lbs"] + item_price["35lbs"] + item_price["25lbs"] + item_price["10lbs"];
  $("#total_value").text(total);
}

$(function() {
  $(".qty").on("change keyup", calculateTotal);
});
