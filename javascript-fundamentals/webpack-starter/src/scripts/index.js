import $ from 'jquery';

$("#MyDiv > p").on('mouseenter mouseleave mouseup', function(event){
    $(this).toggleClass('Highlight');
    $(this).css('cursor', 'pointer');
    if (event.type == 'mouseup'){
        $(this).text('X: ' + event.pageX + 'Y: ' + event.pageY);
    }
});

$("#btnToClick").click(function(){
    $("#MyDiv").load('../load.html', function(res, status, xhr){
        console.log(status);
        if (status == "error"){
            $("#MyDiv").append(res);
        }
    });
});