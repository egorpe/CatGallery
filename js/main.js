var items = [
    {
        "path": "persian.jpg",
        "title" : "Persian",
        "type"  : "Cat"
    },
    {
        "path": "bombay.jpg",
        "title" : "Bombay",
        "type"  : "Cat"
    },
    {
        "path": "thai.jpg",
        "title" : "Thai",
        "type"  : "Cat"
    },
    {
        "path": "akita.jpg",
        "title" : "Akita",
        "type"  : "Dog"
    },
    {
        "path": "chow-chow.jpg",
        "title" : "Chow Chow",
        "type"  : "Dog"
    },
    {
        "path": "terrier.jpg",
        "title" : "Terrier",
        "type"  : "Dog"
    },
    {
        "path": "lorikeet.jpg",
        "title" : "Lorikeet",
        "type"  : "Bird"
    },
    {
        "path": "yucatan.jpg",
        "title" : "Yucatan",
        "type"  : "Bird"
    },
    {
        "path": "finch.jpg",
        "title" : "Finch",
        "type"  : "Bird"
    }

]

function filter(searchTerm) {
    var data = [];
    $.each(items, function(idx, elem) {
        if (elem.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            data.push(elem);
        }
    });
    return data;
}

function fillData() {
    var data = filter($("#search").val());
    var table = $("#theTable tbody");
    table.empty();
    $.each(data, function(idx, elem){
        table.append("<tr><td class='pictureCell'><img src='images/"+elem.path+"' width='30'></td><td>"+elem.title+"</td><td>"+elem.type+"</td></tr>");
    });
    var thumbnails = $("#theThumbnails");
    thumbnails.empty();
    $.each(data, function(idx, elem){
        thumbnails.append("<li class='thumbnailBox'><div class='thumbnail'><img src='images/"+elem.path+"'></div><div class='thumbnailTitle'>"+elem.title+"</div></li>");
    });
}

$("#searchBtn").click(function() { fillData(); });

$("#search").keyup(function (e) {
    if (e.keyCode == 13) {
        fillData();
    }
});

$(function() {
    $("#theThumbnails").hide();
    $("#changeView").click();
});

$("#changeView").click(function() {
    fillData();
    $('#theTable, #theThumbnails').toggle();
    $(this).toggleClass('gridView listView');
});