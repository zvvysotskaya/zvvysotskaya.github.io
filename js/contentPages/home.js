$(function(){

    $('#b_home').click(function(){
    $('#page_content').html(
        '<div class="container">'+
            '<div class="row p-3 mb-3 mt-5">'+
                '<div class="col-12">'+
                    '<h1 class="text-center text-info font-weight-bold">Hello!</h1>'+
                    '<h2 class="text-center">I am Zhanna</h2>'+
                    '<h5 class="text-center text-dark mb-md-3">Software / Web developer</h5>'+
                '</div>'+
            '</div><!-- .row -->'+
        '</div><!-- .container -->'+
        '<div class="container">'+
            '<div class="row p-3 mb-md-5 mb-2">'+
                '<div class="col-md-6">'+
                    '<h2 class="text-center text-info mb-4 font-weight-bold">Introduction</h2>'+
                    '<p>'+
                        'My passion is coding. I love challenge and constantly looking for how to develop '+
                        ' a high quality code that is thoroughly tested, easy to read, and simpler to maintain.'+
                    '</p>'+
                '</div><!-- .col-md-6 -->'+
                '<div class="col-md-6">'+
                    '<h2 class="text-center text-info mb-4 font-weight-bold">Programming Interest</h2>'+
                    '<ul>'+
                        '<li>'+
                            '<a href="https://en.wikipedia.org/wiki/Representational_state_transfer" class="text-dark">REST</a>'+
                        '</li>'+
                        '<li>Web Development</li>'+
                    '</ul>'+
                '</div><!-- .col-md-6 -->'+
            '</div><!-- .row -->'+
        '</div><!-- .container -->'
        );
        });
});
