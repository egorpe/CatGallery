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

$(function() {
    var table = $("#theTable tbody");
    $.each(items, function(idx, elem){
        table.append("<tr><td><img src='images/"+elem.path+"' width='30'></td><td>"+elem.title+"</td><td>"+elem.type+"</td></tr>");
    });
    var thumbnails = $('<ul></ul>').attr('id', 'theThumbnails').insertAfter('#theTable').hide();
    $.each(items, function(idx, elem){
        thumbnails.append("<li class='thumbnail'><img src='images/"+elem.path+"' width='210'>"+elem.title+"</li>");
    });
    $('#changeView').click();
});

$('#changeView').click(function() {
    $('#theTable, #theThumbnails').toggle();
    $(this).toggleClass('gridView listView');
});