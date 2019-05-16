$(document).ready(function () {

    var apiBase = "http://statenweb.mockable.io/conversions/";

    $('#CentimeterToInches').on('submit', function(e){
        e.preventDefault();
        var $centimeters = $('#centimeters').val();

        var centimeterstoinches = $("#centimeters-inches").val();
        axios.get(apiBase).then(function(response){
            
                centimeterstoinches = response.data[centimeterstoinches];
                var total = ($centimeters) * (centimeterstoinches);
            
                $("#ResultInInCm").html(total +' centimeters');
            
            });

         });
         
    $('#InchToCentimeters').on('submit', function(e){
        e.preventDefault();
        var $inches = $('#inches').val();
        var inchestocentimeter = $("#inches-centimeters").val();

        axios.get(apiBase).then(function(response){
            inchestocentimeter = response.data[inchestocentimeter];
            var total = ($inches) * (inchestocentimeter);
            $("#ResultInInch").html(total + ' inches');
        });
    });

    
});