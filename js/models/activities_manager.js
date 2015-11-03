/**
*	Manage the list of activities
*/
var activities_manager = {

	// initialize the list and add lister on <li>
	init: function (data) {
		for(var i = 0;i < data.length;i++) {
			$('#list_activities').append(
				$('<li>' +  data[i].name + '</li>')
					.attr('data-id',data[i].id_activity)
					.addClass('list-group-item')
			);
		}

		$('#list_activities li').click(function () {
			$(this).toggleClass('active');
			activities_manager.clickOnActivity($(this).attr('data-id'));
		});
	},
	// a définir
	getActivities: function () {
		var list =[];
		$('#list_activities li').each(function (i, item ) {
			if($(item).hasClass('active')) {
				list.push($(item).attr('data-id'));
			}
		});
		return list;
	},
	// get the list of activities and init the Html list
	load : function () {
		$.ajax({
              method: "GET",
              url: "http://localhost:1337/category/1",
              async : false,
              success : function (data) {
                if(data.activities){
                    this.init(data.activities);
                }
              },
              error : function () {
                alert("Impossible d'accéder au serveur EasyTrip");
              }
            });
	},
	// to define, call to add action on click on <li>
	clickOnActivity : function (id) { }
};