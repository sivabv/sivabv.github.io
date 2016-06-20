console.log('This would be the main JS file.');
$(document).ready(function(){

var url = 'json/list.json?callback=?';

// Get data from jsFiddle
$.getJSON( url, function(data) {

    // Loop throught the "list" array in the data
    $.each(data.list, function(i, listElement){
        // Put the title of each list element on the page
        $('body').append(listElement.title + '<br>');
    })
});
           
})