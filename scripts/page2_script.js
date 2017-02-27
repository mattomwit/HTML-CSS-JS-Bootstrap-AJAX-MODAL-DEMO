function  HAQ_DI(){
    $("#chart").attr("src","../images/charts/HAQ-DI.png");
    //this is a temporary solution for my resolution of the screen 
    //TO DO : change the container dimmensions so that even after clicking HAQ_DI the height of buttons doesn't change
    $("#chart_info_1").html("<br><br>");
    $("#chart_info_2").text("HAQ-DI = Health Assessment Questionnaire Disability Index");
}

function DAS28_CRP(){
    $("#chart").attr("src","../images/charts/DAS28.png");
        $("#chart_info_1").text("Secondary Endpoint: Change from baseline in DAS28 (CRP)");
        $("#chart_info_2").text("DAS28, based on C-reactive protein (CRP) = 28-joint Disease Activity Score");
}
function SDAI(){
    $("#chart").attr("src","../images/charts/SDAI.png");
    $("#chart_info_1").text("Secondary Endpoint: Change from baseline in SDAI");
    $("#chart_info_2").text("SDAI = Simplified Disease Activity Index");

}

function CDAI(){
    $("#chart").attr("src","../images/charts/CDAI.png");
    $("#chart_info_1").text("Secondary Endpoint: Change from baseline in CDAI");
    $("#chart_info_2").text("CDAI = Clinical Disease Activity Index");

}
//closed book second from right in page2.html
function book_click(){
    $(".modal-body").load("../pages/modal_content.html #book");
}
//open book third from right in page2.html
function book2_click(){
    $(".modal-body").load("../pages/modal_content.html #page2_book2");
}