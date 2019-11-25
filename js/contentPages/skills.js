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
                    '<p class="text-center mb-md-5 mb-1">JavaScript, JS(ES6), HTML5, CSS/CSS3, jQuery, SQL, C#, Java, PHP, and Python</p>'+
                    '<p class="text-center font-weight-bold">DBMS</p>'+
                    '<div class="dbs d-flex justify-content-center mb-md-5 mb-1">'+
                        '<ul class="list-inline">'+
                            '<li class="text-info">mySQL</li>'+
                            '<li class="text-info"> MongoDB</li>' +
                            '<li class="text-info"> SQLite</li>' +
                        '</ul>'+
                    '</div>'+
            '<div class="row mb-md-5">' +
                '<div class="col-12 col-md-4 mb-2">' +
                    '<img src="images/mysql_.png" alt="mysql db" class="img-fluid img-thumbnail d-block mx-auto">' +
                '</div>' +
                '<div class="col-12 col-md-4 mb-2">' +
                    '<img src="images/mongodb.png" alt="mongodb" class="img-fluid img-thumbnail d-block mx-auto">' +
                '</div>' +
                '<div class="col-12 col-md-4 mb-2">' +
                '<img src="images/SQLite.gif" alt="SQLite" class="img-fluid img-thumbnail d-block mx-auto">' +
                '</div>' +
            '</div><!--.row-->' +
                '</div><!--.container-->'+
                '<div class="container">'+
                    '<p class="text-center font-weight-bold">IDE</p>'+
                    '<div class="ide d-flex justify-content-center">'+
                        '<ul class="list-inline">' +
                            '<li class=" text-info">Visual Studio 16.1.6</li>' +
                            '<li class="text-info mb-md-5 mb-1">Atom</li>'+
                            '<li class=" text-info">Notepad++</li>'+
                            
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
                '<ul class="list-inline">' +
                    '<li class="text-info">React</li>' +
                    '<li class="text-info">Node.js</li>' +
                    '<li class="text-info">Bootstrap</li>' +
                     '<li class="text-info mb-md-5 mb-1">XAMPP</li>'+
                     '<li class="text-info">Laravel Valet</li>'+
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
