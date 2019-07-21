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
            '<div class="container">'+
            '<div class="row mb-5 pb-5">'+
            '<div class="col-md-6 mb-4" id="flgc_hover">'+
                '<div id="flgc"></div>'+
                '<a href="https://flgoldcoinexchange.com/" alt="Fl Gold Coin Exchange webite">'+
                    '<img src="images/flgc.jpg" class="img-fluid">'+
                '</a>'+
                '<div class="bg-info p-4 text-light">'+
                    '<p class="pb-2">'+
                    'The website was started as an individual project in the course Advanced Web Development '+
                    'at SPC (St. Petersburg College). I have made all major steps of the website development lifecycle:'+
                    '</p>'+
                    '<ul>'+
                        '<li>Information Gathering</li>'+
                        '<li>Planning</li>'+
                        '<li>Design</li>'+
                        '<li>Content Writing</li>'+
                        '<li>Coding</li>'+
                        '<li>Testing and Launch</li>'+
                        '<li>Maintenance</li>'+
                    '</ul>'+
                    '<p>Computer languages: HTML5, CSS3, JavaScript, PHP, SQL.</p>'+
                    '<p>DBMS: mySQL.</p>'+
                '</div>'+
            '</div>'+

            '<div class="col-md-6 mb-4" id="mybusylife_hover">'+
            '<div id="mybusylife"></div>'+
            '<a href="https://mybusylife.herokuapp.com/" alt="app my busy life">'+
                '<img src="images/mybusylife.jpg" class="img-fluid"'+
            '</a>'+
            '<div class="bg-info p-4 text-light">'+
            '<p>'+
            'My Busy Life application is an individual project.  I have made all steps of the app development lifecycle:'+
            '</p>'+
            '<ul>'+
                '<li>Information Gathering</li>'+
                '<li>Planning</li>'+
                '<li>Design</li>'+
                '<li>Content Writing</li>'+
                '<li>Coding</li>'+
                '<li>Testing and Launch</li>'+
                '<li>Maintenance</li>'+
            '</ul>'+
            '<p>Computer languages: Bootstrap, HTML5, CSS3, jQuery, PHP, SQL.</p>'+
            '<p>Framework: Laravel</p>'+
            '<p>DBMS: mySQL.</p>'+
            '</div>'+
            '</div><!--.col-md-6-->'+
            '</div><!--.row-->'+
            '</div><!--.container-->'+
            '</article>'
        );


        });


});
