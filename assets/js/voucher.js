function addTextToImage(imagePath, text) {
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 1;
        context.fillStyle = "#CC00FF";
        context.lineStyle = "#ffff00";
        context.font = "18px sans-serif";
        context.fillText(text, 50, 50);
    };
}
addTextToImage("http://www.gravatar.com/avatar/0c7c99dec43bb0062494520e57f0b9ae?s=256&d=identicon&r=PG", "Your text");