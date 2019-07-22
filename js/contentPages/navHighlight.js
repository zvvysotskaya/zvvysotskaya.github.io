$(function(){

        $('#b_skills').click(function(){
            $('#b_skills').css({'background-color':'#004d4d','color':'#ffffff','border-radius':'0'}).removeClass('bg-info');
            $('#b_home').addClass('bg-info');
            $('#b_education').addClass('bg-info');
            $('#b_projects').addClass('bg-info');
            $('#b_contact').addClass('bg-info');
        });
        $('#b_home').click(function(){
            $('#b_home').css({'background-color':'#004d4d', 'color':'#ffffff','border-radius':'0'}).removeClass('bg-info');
            $('#b_skills').addClass('bg-info');
            $('#b_education').addClass('bg-info');
            $('#b_projects').addClass('bg-info');
            $('#b_contact').addClass('bg-info');
        });
        $('#b_education').click(function(){
            $('#b_education').css({'background-color':'#004d4d', 'color':'#ffffff', 'border-radius':'0'}).removeClass('bg-info');
            $('#b_home').addClass('bg-info');
            $('#b_skills').addClass('bg-info');
            $('#b_projects').addClass('bg-info');
            $('#b_contact').addClass('bg-info');
        });
        $('#b_projects').click(function(){
            $('#b_projects').css({'background-color':'#004d4d', 'color':'#ffffff', 'border-radius':'0'}).removeClass('bg-info');
            $('#b_home').addClass('bg-info');
            $('#b_skills').addClass('bg-info');
            $('#b_education').addClass('bg-info');
            $('#b_contact').addClass('bg-info');
        });

        $('#b_contact').click(function(){
            $('#b_contact').css({'background-color':'#004d4d', 'color':'#ffffff', 'border-radius':'0'}).removeClass('bg-info');
            $('#b_home').addClass('bg-info');
            $('#b_skills').addClass('bg-info');
            $('#b_education').addClass('bg-info');
            $('#b_projects').addClass('bg-info');
        });
        var date1 = new Date();
        var year = date1.getFullYear();
        $('#footer_year').html(year);
        });
