 var mode_result = false;

 // show search form on click btnDisplayFrom
$('#btnDisplayForm').click(function (){
    $('#formRecherche').show(300);
    $('#btnDisplayForm').hide();
});

// display every categories
$.ajax({
   url : 'http://localhost:1337/category', 
   type : 'GET',
   success : function (data) {
    $.each(data,function (i,c) {
        $('#categories').append($('<option>', {
            value: c.id_category,
            text: c.name
        }));
    })
   }
});

$('#categories').change(function (){
    var cat = $('#categories').val();
    $('#activities').html('');
    if(cat != "none") {
        $.ajax({
           url : 'http://localhost:1337/category/' + cat,
           type : 'GET',
           success : function (data) {
            $.each(data.activities, function (i,a) {
                $('#activities').append($('<option>', {
                    value: a.id_activity,
                    text: a.name
                }));
            });
           }
        });
    }
});

// Button research / display result and reduce search bar
$('#btnSearch').click(function() {
    var location = $('#city').val();
    var activities = $('#activities').val();
    if(location && activities) {
    $.ajax({
           url : 'http://localhost:1337/service/search', 
           type : 'GET', 
           data : {'location' : location, 'activities' : activities},
           success : function (data) {
                if(mode_result == false) {
                        $('#top').css('height','70%');
                }
                mode_result = true;
                if(data.length > 0) {
                    services.data = data;
                    var results = services.Build();
                    $('#results').html(results);
                    $('#results').show();
                    window.location.hash = "results";
                }
                else {
                    $('#results').html("<center><h3>Aucun de service trouvé</h3></center>");
                    $('#results').show();
                }
           },
           error : function (data) {
            alert("Oups !!");
           }
        });
    }
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

