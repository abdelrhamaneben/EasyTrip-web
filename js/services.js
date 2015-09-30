var services = {
	defaultImg: 'default.png',
	TableTop : "<table class='table table-hover table-responsive col-md-6'><span class='col-md-offset-2'>20 results Page 1/20</span>  <span class='col-md-offset-6'>Order by: Price / <strong>Distance</strong></span>",
	TableBottom: "</table>",
	data: null,

	//This function build the result table, she need the list of Json service in services.data property
	Build: function () {
		if(this.data != null) {
			var template = this.TableTop;
			for (i in this.data) {
				var item = this.data[i];
			  template += " <tr> <td> <img class='col-md-offset-1'  src='img/";
                    if(item.img == null) {
                    	template += this.defaultImg;
                    }
                    else {
                    	template += item.img;
                    }
                    template += "'/></td> <td><ul><li><h3>" + item.name + "<h3></li><li>" + item.description + "</li><li>" + item.price + " €</li> <li><i class='fa fa-car'></i> " + item.distance + "</li></ul></td><td><input type='button' onclick='services.Feature(" + item.id + ")' class='btn btn-primary btn-lg' value='Détails' /></td></tr>";
			}
			template += this.TableBottom;
			return template;
		}
		else {
			throw "Services Object Function Build : Expected Json data";
		}
	},

	// Call display Details
	Feature: function (idService) {
		var service = this.FindById(idService);
        $.blockUI({ 
            message: $('#details'), 
            css: { top: '5%', left: '20%', width:'55%' }
        }); 
        $('.blockOverlay').attr('title','Click to unblock').click($.unblockUI); 
	},

	FindById: function (idService) {
		if(this.data != null) {
			for (i in this.data) {
				var item = this.data[i];
				if(idService == item.id) {
					return item;
				}
			}
		}
		else {
			throw "Services Object Function Build : Expected Json data";
		}
	}, 

	sortByPrice: function () {
		var sorted = [];
		var max = 0;
		var index = null;
		var nbItem = this.data.length;

		if(this.data != null) {
			while(sorted.length < nbItem) {
				for (var i = 0; i < this.data.length; i++) {
					if(this.data[i] > max) {
						index = i;
					}
				}
				sorted.push(this.data[index]);
				delete this.data[index];
			}
			this.data = sorted;
		}
		else {
			throw "Services Object Function Build : Expected Json data";
		}
	}

}