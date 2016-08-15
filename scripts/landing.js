var animatePoints = function() {
                
    var points = document.getElementsByClassName('point');
                
    var revealPoint = function (index) {
        points[index].style.opacity = 1;
        points[index].style.transform = "scaleX(1) translateY(0)";
        points[index].style.msTransform = "scaleX(1) translateY(0)"
        points[index].style.WebkitTransform = "scale(1) translateY(0)"
    }
                
    for (var i = 0; i < points.length; i++){
        revealPoint(i);
    }
};

//var points = document.getElementsByClassName('point');
//function revealPoint(points) {
//    for (var i=0; i < points.length; i++){
//        points[i].style.opacity = 1;
//        points[i].style.transform = "scaleX(1) translateY(0)";
//        points[i].style.msTransform = "scaleX(1) translateY(0)"
//        points[i].style.WebkitTransform = "scale(1) translateY(0)"
//    }
//    revealPoint();
//}