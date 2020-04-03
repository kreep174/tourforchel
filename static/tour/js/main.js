$(document).ready(function () {
    $('.sl').slick({
        fade: true,
    });

    var wind;



    $("#btn").click(function () {
        $(".fix").fadeOut(500);
        $(".street-all").fadeIn(500);
        $(".arrow").css("display", "block");
        $(".menu").css("display", "block");
    });


    // Menu
    $("#menu_hallway").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".hallway").fadeIn(500);
    });

    $("#menu_library-coridor-2").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".library-coridor-2").fadeIn(500);
    });


    $("#menu_street-all").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".street-all").fadeIn(500);
    });

    $("#menu_admins").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".admins").fadeIn(500);
    });

    $("#menu_a210").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".a210").fadeIn(500);
    });

    $("#menu_mey3").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".mey3").fadeIn(500);
    });

    $("#menu_urists2").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".urists2").fadeIn(500);
    });

    $("#menu_psychologists3").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".psychologists3").fadeIn(500);
    });

    $("#menu_near-gym").click(function () {
    $(".img").each(function(){
       if($(this).css("display")=="block"){
         wind = $(this).attr('class');
         wind = "." + wind.slice(4);
       }
    });
    $(wind).fadeOut(500);
    $(".near-gym").fadeIn(500);
    });


    // Переходы

    $("#street-all_street-library").click(function () {
        $(".street-library").fadeIn(500);
        $(".street-all").fadeOut(500);
    });

    $("#street-all_street_entry").click(function () {
        $(".street_entry").fadeIn(500);
        $(".street-all").fadeOut(500);
    });

    $("#street-library_library-coridor-1").click(function () {
        $(".library-coridor-1").fadeIn(500);
        $(".street-library").fadeOut(500);
    });

    $("#street-library_street-all").click(function () {
        $(".street-all").fadeIn(500);
        $(".street-library").fadeOut(500);
    });

    $("#street-library_street_entry").click(function () {
        $(".street_entry").fadeIn(500);
        $(".street-library").fadeOut(500);
    });

    $("#library-coridor-1_street-library").click(function () {
        $(".street-library").fadeIn(500);
        $(".library-coridor-1").fadeOut(500);
    });

    $("#library-coridor-1_library-coridor-2").click(function () {
        $(".library-coridor-2").fadeIn(500);
        $(".library-coridor-1").fadeOut(500);
    });

    $("#library-coridor-2_library-coridor-1").click(function () {
        $(".library-coridor-1").fadeIn(500);
        $(".library-coridor-2").fadeOut(500);
    });

    $("#library-coridor-2_a6").click(function () {
        $(".a6").fadeIn(500);
        $(".a6").css("visibility", "visible")
        $(".a6-photo").fadeIn(500);
        $(".a6-photo").css("visibility", "visible")
    });

    $("#library-coridor-2_library").click(function () {
        $(".library").fadeIn(500);
        $(".library").css("visibility", "visible")
        $(".library-photo").fadeIn(500);
        $(".library-photo").css("visibility", "visible")
    });

    $("#street_entry_street-all").click(function () {
        $(".street-all").fadeIn(500);
        $(".street_entry").fadeOut(500);
    });

    $("#street_entry_street-library").click(function () {
        $(".street-library").fadeIn(500);
        $(".street_entry").fadeOut(500);
    });

    $("#street_entry_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".street_entry").fadeOut(500);
    });

    $("#watch_street_entry").click(function () {
        $(".street_entry").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#watch_assembly-hall").click(function () {
        $(".assembly-hall").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#watch_hallway").click(function () {
        $(".hallway").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#watch_second-floor").click(function () {
        $(".second-floor").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#assembly-hall_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".assembly-hall").fadeOut(500);
    });

    $("#assembly-hall_a102-2").click(function () {
        $(".a102-2").fadeIn(500);
        $(".assembly-hall").fadeOut(500);
    });

    $("#assembly-hall_hall2").click(function () {
        $(".assembly-hall2").fadeIn(500);
        $(".assembly-hall2").css("visibility", "visible")
        $(".zal").fadeIn(500);
        $(".zal").css("visibility", "visible")
    });


    $("#assembly-hall2_hall").click(function () {
        $(".assembly-hall").fadeIn(500);
        $(".assembly-hall2").fadeOut(500);
    });

    $("#hallway_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".hallway").fadeOut(500);
    });

    $("#hallway_poster").click(function () {
        $(".poster").fadeIn(500);
        $(".poster").css("visibility", "visible")
        $(".sl-poster").fadeIn(500);
        $(".sl-poster").css("visibility", "visible")
    });

    $("#hallway_kitchen").click(function () {
        $(".kitchen").fadeIn(500);
        $(".kitchen").css("visibility", "visible")
        $(".kitchen-photo").fadeIn(500);
        $(".kitchen-photo").css("visibility", "visible")
    });

    $("#second-floor_admmins").click(function () {
        $(".admins").fadeIn(500);
        $(".second-floor").fadeOut(500);
    });

    $("#second-floor_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".second-floor").fadeOut(500);
    })

    $("#second-floor_a210").click(function () {
        $(".a210").fadeIn(500);
        $(".second-floor").fadeOut(500);
    });

    $("#admins_flowers").click(function () {
        $(".flowers").fadeIn(500);
        $(".flowers").css("visibility", "visible")
        $(".admins_flowers").fadeIn(500);
        $(".admins_flowers").css("visibility", "visible")
    });

    $("#admins_a206").click(function () {
        $(".a206").fadeIn(500);
        $(".a206").css("visibility", "visible")
        $(".a206-photo").fadeIn(500);
        $(".a206-photo").css("visibility", "visible")
    });

    $("#admins_second-floor").click(function () {
        $(".second-floor").fadeIn(500);
        $(".admins").fadeOut(500);
    });

    $("#admins_admins2").click(function () {
        $(".admins2").fadeIn(500);
        $(".admins").fadeOut(500);
    });

    $("#flowers_admins").click(function () {
        $(".admins").fadeIn(500);
        $(".flowers").fadeOut(500);
    });

    $("#admins2_admins").click(function () {
        $(".admins").fadeIn(500);
        $(".admins2").fadeOut(500);
    });

    $("#admins2_admins3").click(function () {
        $(".admins3").fadeIn(500);
        $(".admins2").fadeOut(500);
    });

    $("#admins2_a101-a102").click(function () {
        $(".a101-a102").fadeIn(500);
        $(".admins2").fadeOut(500);
    });

    $("#a101-a102_admins2").click(function () {
        $(".admins2").fadeIn(500);
        $(".a101-a102").fadeOut(500);
    });

    $("#a101-a102_a101").click(function () {
        $(".a101").fadeIn(500);
        $(".a101").css("visibility", "visible")
        $(".a101-photo").fadeIn(500);
        $(".a101-photo").css("visibility", "visible")
    });

    $("#a101-a102_a102-1").click(function () {
        $(".a102-1").fadeIn(500);
        $(".a101-a102").fadeOut(500);
    });


    $("#a102-1_a101-a102").click(function () {
        $(".a101-a102").fadeIn(500);
        $(".a102-1").fadeOut(500);
    });

    $("#a102-1_assembly-hall").click(function () {
        $(".assembly-hall").fadeIn(500);
        $(".a102-1").fadeOut(500);
    });

    $("#a102-2_assembly-hall").click(function () {
        $(".assembly-hall").fadeIn(500);
        $(".a102-2").fadeOut(500);
    });

    $("#a102-2_a101-a102").click(function () {
        $(".a101-a102").fadeIn(500);
        $(".a102-2").fadeOut(500);
    });

    $("#admins2_a205").click(function () {
        $(".a205").fadeIn(500);
        $(".a205").css("visibility", "visible")
        $(".a205-photo").fadeIn(500);
        $(".a205-photo").css("visibility", "visible")
    });

    $("#admins2_a209").click(function () {
        $(".a209").fadeIn(500);
        $(".a209").css("visibility", "visible")
        $(".a209-photo").fadeIn(500);
        $(".a209-photo").css("visibility", "visible")
    });

    $("#admins2_a208").click(function () {
        $(".a208").fadeIn(500);
        $(".a208").css("visibility", "visible")
        $(".a208-photo").fadeIn(500);
        $(".a208-photo").css("visibility", "visible")
    });

    $("#admins3_admins2").click(function () {
        $(".admins2").fadeIn(500);
        $(".admins3").fadeOut(500);
    });

    $("#admins3_a203").click(function () {
        $(".a203").fadeIn(500);
        $(".admins3").fadeOut(500);
    });

    $("#a203_admins3").click(function () {
        $(".admins3").fadeIn(500);
        $(".a203").fadeOut(500);
    });

    $("#admins2_a207").click(function () {
        $(".a207").fadeIn(500);
        $(".a207").css("visibility", "visible")
        $(".a207-photo").fadeIn(500);
        $(".a207-photo").css("visibility", "visible")
    });

    $("#a203_a202").click(function () {
        $(".a202").fadeIn(500);
        $(".a202").css("visibility", "visible")
        $(".a202-photo").fadeIn(500);
        $(".a202-photo").css("visibility", "visible")
    });


    $("#a210_second-floor").click(function () {
        $(".second-floor").fadeIn(500);
        $(".a210").fadeOut(500);
    });

    $("#a210_awards").click(function () {
        $(".awards").fadeIn(500);
        $(".awards").css("visibility", "visible")
        $(".a210_awards").fadeIn(500);
        $(".a210_awards").css("visibility", "visible")
    });

    $("#a210_graduates").click(function () {
        $(".graduates").fadeIn(500);
        $(".graduates").css("visibility", "visible")
        $(".a210_graduates").fadeIn(500);
        $(".a210_graduates").css("visibility", "visible")
    });

    $("#a210_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".a210").fadeOut(500);
    });

    $("#mey_a210").click(function () {
        $(".a210").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey_mey2").click(function () {
        $(".mey2").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey_mey3").click(function () {
        $(".mey3").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey_tso").click(function () {
        $(".tso").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey2_mey").click(function () {
        $(".mey2").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey2_mey3").click(function () {
        $(".mey3").fadeIn(500);
        $(".mey2").fadeOut(500);
    });

    $("#mey2_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".mey2").fadeOut(500);
    });

    $("#mey3_mey2").click(function () {
        $(".mey2").fadeIn(500);
        $(".mey3").fadeOut(500);
    });

    $("#mey3_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".mey3").fadeOut(500);
    });

    $("#mey3_urists").click(function () {
        $(".urists").fadeIn(500);
        $(".mey3").fadeOut(500);
    });

    $("#mey3_mey-zav").click(function () {
        $(".mey-zav").fadeIn(500);
        $(".mey-zav").css("visibility", "visible")
        $(".mey-zav-photo").fadeIn(500);
        $(".mey-zav-photo").css("visibility", "visible")
    });

    $("#mey2_pictures").click(function () {
        $(".meypictures").fadeIn(500);
        $(".meypictures").css("visibility", "visible")
        $(".mey2_pictures").fadeIn(500);
        $(".mey2_pictures").css("visibility", "visible")
    });

    $("#tso_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".tso").fadeOut(500);
    });

    $("#tso_a212").click(function () {
        $(".a212").fadeIn(500);
        $(".tso").fadeOut(500);
    });

    $("#tso_a214").click(function () {
        $(".a214").fadeIn(500);
        $(".a214").css("visibility", "visible")
        $(".a214-photo").fadeIn(500);
        $(".a214-photo").css("visibility", "visible")
    });

    $("#a212_tso").click(function () {
        $(".tso").fadeIn(500);
        $(".a212").fadeOut(500);
    });

    $("#urists_mey3").click(function () {
        $(".mey3").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#urists_accounting").click(function () {
        $(".accounting").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#accounting_urists").click(function () {
        $(".urists").fadeIn(500);
        $(".accounting").fadeOut(500);
    });

    $("#urists_urists2").click(function () {
        $(".urists2").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#urists_psychologists").click(function () {
        $(".psychologists").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#urists2_urists").click(function () {
        $(".urists").fadeIn(500);
        $(".urists2").fadeOut(500);
    });

    $("#urists2_stand").click(function () {
        $(".stand").fadeIn(500);
        $(".stand").css("visibility", "visible");
        $(".urists_stand").fadeIn(500);
        $(".urists_stand").css("visibility", "visible")
    });

    $("#urists_pictures").click(function () {
        $(".urispictures").fadeIn(500);
        $(".urispictures").css("visibility", "visible");
        $(".urists_pictures").fadeIn(500);
        $(".urists_pictures").css("visibility", "visible")
    });

    $("#urists2_psychologists").click(function () {
        $(".psychologists").fadeIn(500);
        $(".urists2").fadeOut(500);
    });

    $("#psychologists_urists2").click(function () {
        $(".urists2").fadeIn(500);
        $(".psychologists").fadeOut(500);
    });

    $("#psychologists_psychologists2").click(function () {
        $(".psychologists2").fadeIn(500);
        $(".psychologists").fadeOut(500);
    });

    $("#psychologists_a225").click(function () {
        $(".a225").fadeIn(500);
        $(".a225").css("visibility", "visible");
        $(".a225-photo").fadeIn(500);
        $(".a225-photo").css("visibility", "visible")
    });

    $("#psychologists_a224").click(function () {
        $(".a224").fadeIn(500);
        $(".a224").css("visibility", "visible");
        $(".a224-photo").fadeIn(500);
        $(".a224-photo").css("visibility", "visible")
    });

    $("#psychologists2_psychologists").click(function () {
        $(".psychologists").fadeIn(500);
        $(".psychologists2").fadeOut(500);
    });

    $("#psychologists2_psychologists3").click(function () {
        $(".psychologists3").fadeIn(500);
        $(".psychologists2").fadeOut(500);
    });

    $("#psychologists3_psychologists2").click(function () {
        $(".psychologists2").fadeIn(500);
        $(".psychologists3").fadeOut(500);
    });

    $("#psychologists3_first-floor").click(function () {
        $(".first-floor").fadeIn(500);
        $(".psychologists3").fadeOut(500);
    });

    $("#first-floor_psychologists3").click(function () {
        $(".psychologists3").fadeIn(500);
        $(".first-floor").fadeOut(500);
    });

    $("#first-floor_near-gym").click(function () {
        $(".near-gym").fadeIn(500);
        $(".first-floor").fadeOut(500);
    });

    $("#near-gym_first-floor").click(function () {
        $(".first-floor").fadeIn(500);
        $(".near-gym").fadeOut(500);
    });

    $("#near-gym_near-court").click(function () {
        $(".near-court").fadeIn(500);
        $(".near-gym").fadeOut(500);
    });

    $("#near-gym_gym").click(function () {
        $(".gym").fadeIn(500);
        $(".gym").css("visibility", "visible")
        $(".gym-photo").fadeIn(500);
        $(".gym-photo").css("visibility", "visible")
    });

    $("#near-court_near-gym").click(function () {
        $(".near-gym").fadeIn(500);
        $(".near-court").fadeOut(500);
    });

    $("#near-court_near-itally").click(function () {
        $(".near-itally").fadeIn(500);
        $(".near-court").fadeOut(500);
    });

    $("#near-court_court").click(function () {
        $(".court").fadeIn(500);
        $(".court").css("visibility", "visible")
        $(".court-photo").fadeIn(500);
        $(".court-photo").css("visibility", "visible")
    });

    $("#near-court_table-tennis").click(function () {
        $(".table-tennis").fadeIn(500);
        $(".table-tennis").css("visibility", "visible")
        $(".table-tennis-photo").fadeIn(500);
        $(".table-tennis-photo").css("visibility", "visible")
    });

    $("#near-itally_near-court").click(function () {
        $(".near-court").fadeIn(500);
        $(".near-itally").fadeOut(500);
    });

    $("#near-gym_near-itally").click(function () {
        $(".near-itally").fadeIn(500);
        $(".near-gym").fadeOut(500);
    });

    $("#near-itally_near-gym").click(function () {
        $(".near-gym").fadeIn(500);
        $(".near-itally").fadeOut(500);
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".main"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(300);
            $(".overlay").fadeOut(300);// скрываем его
        }
    });
});














