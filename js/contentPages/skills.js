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
            '<div class="dbs d-flex justify-content-center mb-5">'+
            '<ul class="list-inline">'+
            '<li class="text-info">mySQL</li>'+
            '<li class=" text-info"> SQLite</li>'+
            '</ul>'+
            '</div>'+
            '<div class="row">'+

            '<div class="col-md-6 mb-5">'+
            '<p>I am using phpMyAdmin software tool to run mySql over the web.</p>'+
            '<img src="images/mysql.jpg" class="d-block img-fluid img-thumbnail d-block mx-auto">'+
            '</div><!--.col-md-6-->'+

            '<div class="col-md-6">'+
            '<p>To run the SQLite shell, I am using the command prompt.</p>'+
            '<img src="images/sqlite.jpg" class="d-block img-fluid img-thumbnail d-block mx-auto">'+
            '</div><!--.col-md-6-->'+
            '</div><!--.row-->'+
            '</div><!--.container-->'+

            '<div class="container">'+
            '<p class="text-center font-weight-bold">IDE</p>'+
            '<div class="ide d-flex justify-content-center">'+
            '<ul class="list-inline">'+
            '<li class="text-info mb-5">Atom</li>'+
            '<li class=" text-info">Notepad++</li>'+
            '<li class=" text-info">Visual Studio 16.1.6</li>'+
            '</ul>'+
            '</div><!--.ide-->'+
            '<div class="row">'+

            '<div class="col-12 col-md-4 mb-2">'+
            '<img src="images/atom.jpg" class="img-fluid img-thumbnail d-block mx-auto">'+
            '</div>'+

            '<div class="col-12 col-md-4 mb-2">'+
            '<img src="images/notepad.jpg" class="img-fluid img-thumbnail d-block mx-auto">'+
            '</div>'+
            '<div class="col-12 col-md-4 mb-2">'+
            '<img src="images/visualStudio.jpg" class="img-fluid img-thumbnail d-block mx-auto">'+
            '</div>'+

            '</div><!--.row-->'+
            '</div><!--.container-->'+
            '</article>'
        );
    });
});
