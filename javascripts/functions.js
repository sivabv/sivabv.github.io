console.log('This would be the main JS file.');
$(document).ready(function(){
$.getJSON( "json/list.json", function( data ) {
  var items = [];
  $.each( data.Models, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val.model_name, val.two, val.model_make_id+ "</li>" ); console.log(items);
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
           
})
