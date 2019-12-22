var $links = $('a');
var $search = $('#input');
var caption = [];

// Create array
$links.each(function(){
    var title = $(this).attr('data-title').toLowerCase();
    caption.push(title);
});

$search.on('keyup', function(){
    var input = $search.val().trim().toLowerCase();
    for (var i = 0; i < caption.length; i++) {
        var x = caption[i].includes(input);
        if(x) {
            $('.gallery').children().eq(i).show();
        } else {
            $('.gallery').children().eq(i).hide();
        } 
    }  
})





