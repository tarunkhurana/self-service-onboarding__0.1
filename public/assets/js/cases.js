$(document).ready(function () {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});
//jQuery(document).ready(function ($) {
//    $('#datetimepicker1').datetimepicker();
//});


$(document).ready(function () {

    $('#waypointsTable tr').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

});
$(document).ready(function () {
        $("tr.active").click(function () {
            $(this).siblings("tr.meta-data").animate({
                height: 'toggle'
            });
        });
        $(".cross").click(function () {
            $("tr.meta-data").hide();
        });
    });
//document.getElementById("homepage").onclick = function () {
//    location.href = "index.html";
//};

$(document).ready(function () {
    $("table#pdata tr td:nth-child(2)").hover(function () {
        $(this).siblings(".edit").toggleClass("active")
        $(this).siblings(".history-button").toggleClass("active")
//         $(this).siblings(".edit").css("display","inline-block");
    });

});

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

var action = 1;

$("td.edit").on("click", viewSomething);

function viewSomething() {
    if (action == 1) {
        // $("body").css("background", "honeydew");
        $(this).siblings(".next").css("visibility", "visible");
        // alert("first");
        action = 2;
    } else {
        //$("body").css("background", "beige");
        //alert("second");
        $(this).siblings(".next").css("visibility", "hidden");
        $(this).siblings(".history-button").css("visibility", "visible");
        action = 1;
    }
}


$(document).ready(function () {
    $("td.edit").click(function () {
        // $("td.next").css("visibility","hidden");
        // $(this).siblings(".next").css("visibility","visible");
    });
    $(".closing").click(function () {
        $(this).parent(".next").css("visibility", "hidden");
    });
    $(".save").click(function () {
        $(this).parent(".next").css("visibility", "hidden");
    });
    $("#batch-analytics").click(function () {
        $("#user-analytics").hide();
        $(".button4").removeClass("active");
        $(this).addClass("active");
        $("#analytics").show();
    });
    $("#user-ana").click(function () {
        $(".button4").removeClass("active");
        $("#user-analytics").show();

        $(this).addClass("active");
        $("#analytics").hide();
    });
});
