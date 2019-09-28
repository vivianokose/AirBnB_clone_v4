window.addEventListener('load', function () {
  // task 2
  const amenityIds = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityIds[$(this).attr('data-id')];
    }
    $('div.amenities h4').text(Object.values(amenityIds).join(', '));
  });
});
