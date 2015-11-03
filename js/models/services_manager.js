var services_manager = {
 build : function () {
 	$('#c-part').html('');
 	$.each(this.data, function(i, item) {
 		console.log(item);
 		$('#c-part').append($("<div class=\"card\">"
           + " <div class=\"thumbnail\">"
           + "<div class=\"caption\">"
           + "<h3>" + item.name + "</h3>"
           + "<p>" + item.description + "</p>"
           + "<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a></p>"
           + "</div>"
           + "</div>"
           + "</div>"));
 		});
 },
 load : function (rectangle,activities) {
   /* $.ajax({
              method: "POST",
              url: "http://localhost:1337/service/search",
              async : false,
              data : {
                'rectangle' : rectangle,
                'activities' : activities
              },
              success : function (data) {
                if(data){
                    this.data = data;
                    this.build(this.data);
                }
              },
              error : function () {
                alert("Impossible d'accéder au serveur EasyTrip");
              }
            });*/
    this.build(this.data);
 }
 ,
 // Temporal data
 data : [
    {
        "activity": {
            "name": "Swimming",
            "description": "Swimming",
            "id_activity": 1
        },
        "contact": {
            "name_first": "kevin",
            "name_last": "once",
            "phone": "0678543567",
            "email": "kevin.once@cgi.com",
            "id_contact": 1
        },
        "latitude" : 50.6232523,
        "longitude" : 3.144265099999984,
        "name": "stella plage",
        "description": "stella plage",
        "image": "stella.jpg",
        "id_service": 1
    },
    {
        "activity": {
            "name": "Swimming",
            "description": "Swimming",
            "id_activity": 1
        },
        "contact": {
            "name_first": "abdelrhamane",
            "name_last": "benhammou",
            "phone": "0745543567",
            "email": "abdelrhamane.benhammou@erdf-grdf.fr",
            "id_contact": 2
        },
        "latitude" : 50.6232523,
        "longitude" : 3.144265099999984,
        "name": "hardelot plage",
        "description": "hardelot plage",
        "image": "hardelot.jpg",
        "id_service": 2
    },
    {
        "activity": {
            "name": "jetski",
            "description": "jetski",
            "id_activity": 2
        },
        "contact": {
            "name_first": "abdelrhamane",
            "name_last": "benhammou",
            "phone": "0745543567",
            "email": "abdelrhamane.benhammou@erdf-grdf.fr",
            "id_contact": 2
        },
        "latitude" : 50.6232523,
        "longitude" : 3.144265099999984,
        "name": "Le touquet",
        "description": "Le touquet",
        "image": "touquet.jpg",
        "id_service": 3
    },
    {
        "activity": {
            "name": "ski",
            "description": "ski",
            "id_activity": 4
        },
        "contact": {
            "name_first": "anis",
            "name_last": "tello",
            "phone": "0645342234",
            "email": "anis.tello@decathlon.com",
            "id_contact": 3
        },
        "latitude" : 50.6232523,
        "longitude" : 3.144265099999984,
        "name": "Noeux-les-Mines ski",
        "description": "Noeux-les-Mines sur piste artificielle",
        "image": "ski.jpg",
        "id_service": 4
    },
    {
        "activity": {
            "name": "public places",
            "description": "public places",
            "id_activity": 7
        },
        "contact": {
            "name_first": "anis",
            "name_last": "tello",
            "phone": "0645342234",
            "email": "anis.tello@decathlon.com",
            "id_contact": 3
        },
        "latitude" : 50.6232523,
        "longitude" : 3.144265099999984,
        "name": "Befroi de lille",
        "description": "Grand Befroi de lille",
        "image": "beffroi.jpg",
        "id_service": 5
    },
    {
        "activity": {
            "name": "public places",
            "description": "public places",
            "id_activity": 7
        },
        "contact": {
            "name_first": "kevin",
            "name_last": "once",
            "phone": "0678543567",
            "email": "kevin.once@cgi.com",
            "id_contact": 1
        },
        "latitude" : 50.6232523,
        "longitude" : 3.144265099999984,
        "name": "Musée de l'Hospice Comtesse - Lille",
        "description": "Musée de l'Hospice Comtesse - Lille",
        "image": "comtesse.jpg",
        "id_service": 6
    },
    {
        "activity": {
            "name": "public places",
            "description": "public places",
            "id_activity": 7
        },
        "contact": {
            "name_first": "kevin",
            "name_last": "once",
            "phone": "0678543567",
            "email": "kevin.once@cgi.com",
            "id_contact": 1
        },
        "latitude" : 50.6232523,
        "longitude" : 3.144265099999984,
        "name": "Maison natale Charles de Gaulle - Lille",
        "description": "Maison natale Charles de Gaulle - Lille",
        "image": "charles.jpg",
        "id_service": 7
    },
    {
        "activity": {
            "name": "public places",
            "description": "public places",
            "id_activity": 7
        },
        "contact": {
            "name_first": "abdelrhamane",
            "name_last": "benhammou",
            "phone": "0745543567",
            "email": "abdelrhamane.benhammou@erdf-grdf.fr",
            "id_contact": 2
        },
        "latitude" : 50.6242523,
        "longitude" : 3.144165099999984,
        "name": "Musée des Canonniers Sédentaires de Lille",
        "description": "Musée des Canonniers Sédentaires de Lille",
        "image": "canon.jpg",
        "id_service": 8
    },
    {
        "activity": {
            "name": "public places",
            "description": "public places",
            "id_activity": 7
        },
        "contact": {
            "name_first": "abdelrhamane",
            "name_last": "benhammou",
            "phone": "0745543567",
            "email": "abdelrhamane.benhammou@erdf-grdf.fr",
            "id_contact": 2
        },
        "latitude" : 50.6332523,
        "longitude" : 3.144275099999984,
        "name": "Musée des Moulins - Villeneuve d'Ascq",
        "description": "Musée des Moulins - Villeneuve d'Ascq",
        "image": "moulin.jpg",
        "id_service": 9
    },
    {
        "activity": {
            "name": "public places",
            "description": "public places",
            "id_activity": 7
        },
        "contact": {
            "name_first": "anis",
            "name_last": "tello",
            "phone": "0645342234",
            "email": "anis.tello@decathlon.com",
            "id_contact": 3
        },
        "latitude" : 50.6222523,
        "longitude" : 3.145265099999984,
        "name": "Musée de la poupée et du jouet ancien - Wambrechies",
        "description": "Musée de la poupée et du jouet ancien - Wambrechies",
        "image": "poupee.jpg",
        "id_service": 10
    }
]
};
