function scrollToTarget(id,offset){
    check();
    console.log(offset);
    var element = document.getElementById(id);
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}