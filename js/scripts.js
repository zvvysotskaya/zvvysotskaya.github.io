$(function(){
    $('#b_skills').click(function(){
        $('#page_content').html('<h1>My Skills</h1>');
    });
    $('#b_home').click(function(){

    $("#page_content").html(

        '<div class="container mb-5 mt-5">'+
            '<div class="row">'+
                '<div class="col">'+
                    '<h1 class="text-center text-info font-weight-bold">Hello!</h1>'+
                    '<h2 class="text-center">I am Zhanna</h2>'+
                    '<h5 class="text-center text-dark mb-5">Software / Web developer</h5>'+
                '</div>'+
            '</div><!-- .row -->'+
        '</div><!-- .container -->'+
        '<div class="container">'+
            '<div class="row">'+
                '<div class="col-md-6 p-5">'+
                    '<h2 class="text-center text-info mb-4 font-weight-bold ">Introduction</h2>'+
                    '<p>'+
                        'My passion is coding. I love challenge and constantly looking for how to develop '+
                        ' a high quality code that is thoroughly tested, easy to read, and simpler to maintain.'+
                    '</p>'+
                '</div><!-- .col-md-6 -->'+
                '<div class="col-md-6 p-5">'+
                    '<h2 class="text-center text-info mb-4 font-weight-bold">Programming Interest</h2>'+
                    '<ul class="">'+
                        '<li>'+
                            '<a href="https://en.wikipedia.org/wiki/Representational_state_transfer" class="text-dark">REST</a>'+
                        '</li>'+
                        '<li>Web Development</li>'+
                    '</ul>'+
                '</div><!-- .col-md-6 -->'+
            '</div><!-- .row -->'+
        '</div><!-- .container -->'+
        '<div class="container">'+
            '<p class="text-center mt-5">I have been living in Tampa Bay Area, Florida,  USA</p>'+
            '<p class="text-center">There are some pictures of this wonderful area</p>'+
        '</div>'+
        '<div class="container mt-5">'+
            '<div class="container">'+
                '<div class="row">'+
                '</div><!-- .row -->'+
            '</div><!-- .container -->'+
        '</div><!-- .container -->'
        );

    });
});
