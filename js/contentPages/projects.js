$(function(){
    $('#b_projects').click(function(){
        $('#page_content').html(
            '<div class="container-fluid">'+
                '<h1 class="text-center text-info font-weight-bold pt-md-3 mt-md-5 mt-3 mb-2 mb-md-5">'+
                    'Projects'+
                '</h1>'+
                '<p class="text-center font-weight-bold mb-md-5 mb-1">MY PORTFOLIO</p>'+
            '</div><!--.container-fluid-->'+
            '<article>'+
                '<div class="container-fluid">'+
                    '<div class="row mb-2 mb-md-5 justify-content-around ml-0 mr-0">'+
                        '<div class="col-md-4  mb-md-5 mb-sm-0">'+
                            '<a href="https://flgoldcoinexchange.com/">'+
                                '<img src="images/flgce.gif" class="img-fluid" alt="image fl gold coin exchange">'+
                            '</a>'+
                            '<div class="bg-info p-4 text-light project_info">'+
                                
                                '<p>Frontend: React jsx, Bootstrap 4, HTML5, and CSS3</p>'+
                                '<p>Backend: Node.js (Express), mySQL</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 mb-md-5 mb-sm-0 ml-0 mr-0">'+
                            '<a href="https://e-commerce-react2.herokuapp.com/">'+
                                '<img src="images/e-commerce-react2.gif" class="img-fluid" alt="e-commerce app">'+
                            '</a>'+
                            '<div class="bg-info p-4 text-light project_info">'+
                                '<p>Frontend: React jsx, HTML5, and SASS</p>'+
                                '<p>Backend: Node.js, Firebase Realtime Database</p>'+                                
                            '</div>'+
                        '</div><!--.col-md-6-->' +
                            '<div class="col-md-4 mb-md-5 mb-sm-0 ml-0 mr-0">' +
                            '<a href="https://www.flgoldcoinexchange-blog.com/">' +
                            '<img src="images/flgce-blog.jpg" class="img-fluid" alt="flgoldcoinexchange-blog">' +
                            '</a>' +
                            '<div class="bg-info p-4 text-light project_info">' +
                                '<p>Frontend: React jsx, Bootstrap 4, HTML5, and CSS3</p>' +
                                '<p>Backend: Node.js (Express), mongodb</p>' +                                
                            '</div>' +
                        '</div><!--.col-md-6-->' +
                    '</div><!--.row-->'+
            '</div><!--.container-->' +

            '<div class="container-fluid">' +
            '<div class="row mb-2 mb-md-5 justify-content-around ml-0 mr-0">' +
            '<div class="col-md-4  mb-md-5 mb-sm-0">' +
            '</div>' +

            '<div class="col-md-4 mb-md-5 mb-sm-0 ml-0 mr-0">' +
            '<a href="https://mybusylife.herokuapp.com/">' +
            '<img src="images/mybusylife.jpg" class="img-fluid" alt="my busy life">' +
            '</a>' +
            '<div class="bg-info p-4 text-light project_info">' +
            '<p>Programming languages: Bootstrap, HTML5, CSS3, jQuery, PHP, SQL.</p>' +
            '<p>Framework: Laravel</p>' +
            '<p>DBMS: mySQL</p>' +
            '</div>' +
            '</div><!--.col-md-6-->' +
            '<div class="col-md-4 mb-md-5 mb-sm-0 ml-0 mr-0">' +
            
            
            '</div><!--.col-md-6-->' +
            '</div><!--.row-->' +
            '</div><!--.container-->' +
            '</article>'
        );
        });
});
