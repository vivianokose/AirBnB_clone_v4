window.addEventListener('load', function () {
  let amenityIds = {};
  $("input[type=checkbox]").click(function () {
    if ($(this).prop("checked")) {
      amenityIds[$(this).attr("data-id")] = $(this).attr("data-name");
    } else if (!$(this).prop("checked")) {
      delete amenityIds[$(this).attr("data-id")];
    }
    $('div.amenities h4').text(Object.values(amenityIds).join(', '));
  });
});
