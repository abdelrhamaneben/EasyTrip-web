var mode_result = false;
// show search form on click btnDisplayFrom
$('#btnDisplayForm').click(function (){
    $('#formRecherche').show(300);
    $('#btnDisplayForm').hide();
    $('#btnHideFilter').hide();
    $('#btnDisplayFilter').show();
    $('#filterOptions').hide();
});

// show filters form on click btnDisplayFilter
$('#btnDisplayFilter').click(function (){                        
    $('#btnHideFilter').show();
    $('#btnDisplayFilter').hide();
    $('#filterOptions').show();
});

// show filters form on click btnDisplayFilter
$('#btnHideFilter').click(function (){                        
    $('#btnDisplayFilter').show();
    $('#btnHideFilter').hide();
    $('#filterOptions').hide();
});

// Button research / display result and reduce search bar
$('#btnSearch').click(function() {
    if(mode_result == false) {
        $('#top').css('height','70%');
    }
    mode_result = true;
    services.data = serviceJson.services;
    var results = services.Build();
     $('#results').html(results);
    $('#results').show();
    window.location.hash = "results";
});

// Slider de la durée
$('.nstSlider').nstSlider({ "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) { 
        if(leftValue == 0) {
             $(this).parent().find('.leftLabel').text(30 + " Mins");
        }
        else {
             $(this).parent().find('.leftLabel').text(leftValue + " Heures");
        }
    }   
});