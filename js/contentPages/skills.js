$(function(){
    $('#b_skills').click(function(){
        $('#page_content').html(
            '<div class="container-fluid">'+
                '<h1 class="text-center text-info font-weight-bold pt-md-3 mt-md-5 mt-3 mb-2 mb-md-5">'+
                    'Technical Skills'+
                '</h1>'+
            '</div><!--.container-fluid-->'+
            '<article>'+
                '<div class="container">'+
                    '<p class="text-center font-weight-bold">Programming Languages</p>'+
                    '<p class="text-center mb-md-5 mb-1">PHP, Bootstrap, HTML5, CSS3, jQuery, JavaScript, SQL, C#, Java, and Python</p>'+
                    '<p class="text-center font-weight-bold">DBMS</p>'+
                    '<div class="dbs d-flex justify-content-center mb-md-5 mb-1">'+
                        '<ul class="list-inline">'+
                            '<li class="text-info">mySQL</li>'+
                            '<li class="text-info"> SQLite</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="row">'+
                        '<div class="col-md-6 mb-md-5 mb-2">'+
                            '<div class="card">'+
                                '<div class="card body p-2 p-md-3">'+
                                    '<img src="images/mysql.jpg" alt="phpmyadmin" class="d-block img-fluid img-thumbnail d-block mx-auto">'+
                                    '<p class="py-3">I am using phpMyAdmin software tool to run mySql over the web.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div><!--.col-md-6-->'+
                        '<div class="col-md-6 mb-2">'+
                            '<div class="card">'+
                                '<div class="card body p-2 p-md-3">'+
                                    '<img src="images/sqlite.jpg" alt="the command prompt" class="d-block img-fluid img-thumbnail d-block mx-auto">'+
                                    '<p class="py-3">To run the SQLite shell, I am using the command prompt.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div><!--.col-md-6-->'+
                    '</div><!--.row-->'+
                '</div><!--.container-->'+
                '<div class="container">'+
                    '<p class="text-center font-weight-bold">IDE</p>'+
                    '<div class="ide d-flex justify-content-center">'+
                        '<ul class="list-inline">'+
                            '<li class="text-info mb-md-5 mb-1">Atom</li>'+
                            '<li class=" text-info">Notepad++</li>'+
                            '<li class=" text-info">Visual Studio 16.1.6</li>'+
                            '<li class=" text-info">NetBeans</li>'+
                            '<li class=" text-info">Eclips</li>'+
                        '</ul>'+
                    '</div><!--.ide-->'+
                    '<div class="row mb-md-5">'+
                        '<div class="col-12 col-md-4 mb-2">'+
                            '<img src="images/atom.jpg" alt="atom" class="img-fluid img-thumbnail d-block mx-auto">'+
                        '</div>'+
                        '<div class="col-12 col-md-4 mb-2">'+
                            '<img src="images/notepad.jpg" alt="notepad" class="img-fluid img-thumbnail d-block mx-auto">'+
                        '</div>'+
                        '<div class="col-12 col-md-4 mb-2">'+
                            '<img src="images/visualStudio.jpg" alt="visual studio" class="img-fluid img-thumbnail d-block mx-auto">'+
                        '</div>'+
                    '</div><!--.row-->'+
                '</div><!--.container-->'+
            '<div class="container">'+
                '<p class="text-center font-weight-bold">App Development Tools</p>'+
                '<div class="ide d-flex justify-content-center">'+
                    '<ul class="list-inline">'+
                        '<li class="text-info mb-md-5 mb-1">XAMPP</li>'+
                        '<li class="text-info">Laravel Valet</li>'+
                        '<li class="text-info">Node.js</li>'+
                        '<li class="text-info">React</li>'+
                    '</ul>'+
                '</div>'+
            '</div><!--.container-->'+
            '<div class="container">'+
                '<p class="text-center font-weight-bold">Operating Systems</p>'+
                '<div class="ide d-flex justify-content-center">'+
                    '<ul class="list-inline">'+
                        '<li class="text-info mb-md-5 mb-1">Windows</li>'+
                        '<li class="text-info">Linux</li>'+
                        '<li class="text-info">Mac OS</li>'+
                    '</ul>'+
                '</div><!--.ide-->'+
            '</div><!--.container-->'+
            '</article>'
        );
    });
});
