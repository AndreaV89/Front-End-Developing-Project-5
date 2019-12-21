var $links = $('a');
var $search = $('#input');
var caption = [];

$links.each(function(){
    caption.push({
        element: this,
        text: this.title.trim().toLowerCase()
    });
});

for(var i=0; i < caption.length; i++) {
    console.log(caption[i])
}
