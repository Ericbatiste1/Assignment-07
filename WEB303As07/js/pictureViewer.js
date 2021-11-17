$.fn.photoViewer = function() {
    console.log(this);
    const imgs = this.find("img");
    console.log(imgs);
    const aTag = this.find("a").click(function(e) {
        e.preventDefault();
        $("#photoImage").attr("src", $(this).attr("href"));
        $("a.photo-frame").attr("href", $(this).attr("href"));
        console.log(e);
    }) 
    console.log(aTag);
    return this;
 
}



 