window.addEventListener('load', function () {
  $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
    if (data.status === "OK") {
      $("#api_status").addClass('available');
    } else {
      $("#api_status").removeClass('available');
    }
  });
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
