$(document).ready(function(){
    $(".yangitu").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_yangitu = split[1];

        $(".yangitu").removeClass('aktif');
        $("#yangitu_"+id_yangitu).addClass('aktif');

        

        $("#hah_1").slideUp();
        $("#hah_2").slideUp();
        $("#hah_3").slideUp();
        $("#hah_"+id_yangitu).slideToggle("medium");
    });
});