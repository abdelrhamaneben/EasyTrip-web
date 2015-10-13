var services = {
	defaultImg: 'default.png',
	TableTop : "<table class='table table-hover table-responsive col-md-6'><span class='col-md-offset-2'>Page 1/1</span> </span>",
	TableBottom: "</table>",
	data: null,

	//This function build the result table, it needs the list of Json service in services.data property
	Build: function () {
		if(this.data != null) {
			var template = this.TableTop;
			for (i in this.data) {
				var item = this.data[i];
				console.log(item);
			 	template += " <tr><td> <img class='col-md-offset-1'  src='img/" +item.image +  "'/></td> <td><ul><li><h3>" + item.name + "<h3></li><li>" + item.description + "</li></ul></td><td><input type='button' onclick='services.Feature(" + item.id_service + ")' class='btn btn-primary btn-lg' value='Détails' /></td></tr>";
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
		$('#details #company').html(service.name);
		$('#details #description').html(service.description);
		$('#details #telephone').html(service.contact.phone);
		$('#details #email').html(service.contact.email);
		$('#details #picture').attr('src',"img/" + service.image);
		console.log(service);
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
				if(idService == item.id_service) {
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