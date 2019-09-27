window.addEventListener('load', function () {
  $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
    console.log('We got the status and its: ' + data.status);
    if (data.status === "OK") {
      $("div#api_status").addClass('available');
    } else {
      $("div#api_status").removeClass('available');
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
