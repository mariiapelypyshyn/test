$(function () {
    $("#month").ionRangeSlider(
        {
            skin: 'round',
            values: [
              '1 month','3 month','6 month','9 month','12 month'
          ],
            from: 1,
            grid: true,
            postfix: ' month',
 
        }
   ); 
})

$(function () {
    $("#currency").ionRangeSlider(
      { skin: 'round',
    min: 300,
    max: 15000,
            from: 2000,
            grid: true,
    postfix: ' €',
 
        }
   ); 
})


