//closed book second from right in page2.html
function book_click(){
    $(".modal-body").load("./pages/modal_content.html #book");
}
//open book third from right in page2.html
function book2_click(){
    $(".modal-body").load("./pages/modal_content.html #index_book2");
}

function Data_click(){
    $(".modal-body").load("./pages/modal_content.html #Data_table");
}

function ACME_click(){
    $(".modal-body").load("./pages/modal_content.html #ACME_table");
}

// TO DO : load option is not supported in chrome for files loaded from drive, find a way to work around or check if it works for files called from server