function scrollToTarget(id,offset){
    check();
    // console.log(offset);
    var element = document.getElementById(id);
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // console.log('Dark');
    document.documentElement.style.setProperty("--white", "#2B2B2B");
    document.documentElement.style.setProperty("--black", "#fafafa");
    document.documentElement.style.setProperty("--shadow", "#ffffff00");
    document.documentElement.style.setProperty("--light-grey", "#bfbfbf");
    document.documentElement.style.setProperty("--sec", "#80b8a2");
    document.documentElement.style.setProperty("--btn", "#598372");
    document.documentElement.style.setProperty("--hov", "#AF3A03");
} else {
    // console.log('light');
}