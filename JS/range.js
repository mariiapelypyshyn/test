$(function () {
    $("#month").ionRangeSlider(
        {
            skin: 'round',
            values: [
              1,3,6,9,12
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


