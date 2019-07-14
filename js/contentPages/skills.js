$(function(){
    $('#b_skills').click(function(){
        $('#page_content').html(
            '<div class="container-fluid">'+
                '<h1 class="text-center text-info font-weight-bold pt-md-3 mt-md-5 mt-3 mb-5">'+
                    'Technical Skills'+
                '</h1>'+
            '</div><!--.container-fluid-->'+
            '<article>'+
            '<div class="container">'+

            '<p class="text-center font-weight-bold">Programming Languages</p>'+
            '<p class="text-center mb-5">PHP, Bootstrap, HTML5, CSS3, jQuery, JavaScript, SQL, C#, Java, and Python</p>'+
            '<p class="text-center font-weight-bold">DBMS</p>'+
            '<div class="dbs d-flex justify-content-center">'+
            '<ul class="list-inline">'+
            '<li class="text-info mb-5">mySQL</li>'+
            '<li class=" text-info"> SQLite</li>'+
            '</ul>'+
            '</div>'+
            '<div class="row">'+

            '<div class="col-md-6 mb-5">'+
            '<p>I am using phpMyAdmin software tool to run mySql over the web.</p>'+
            '<img src="images/mysql.jpg" class="d-block img-fluid">'+
            '</div><!--.col-6-->'+

            '<div class="col-md-6 text-center">'+
            '<p>To run the SQLite shell, I am using the command prompt.</p>'+
            '<img src="images/sqlite.jpg" class="d-block img-fluid">'+
            '</div><!--.col-6-->'+
            '</div><!--.row-->'+
            '</div><!--.container-->'+

            '<div class="container">'+
            '<p class="text-center font-weight-bold">IDE</p>'+
            '</div>'+
            '</article>'
        );
    });
});
