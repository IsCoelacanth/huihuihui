function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function COLOR()
{	
    document.getElementById('text').style.color= getRandomColor();
    colorTimer = setTimeout(COLOR,50);
}
function text() 
{

    document.body.style.backgroundImage = "url('http://cdn.wallpapersafari.com/35/31/m5QzJX.jpg')";
    document.getElementById('text').innerHTML="YES!!!!!!!<br/> Last breakdown:<br /> 11-04-2017<br /> visit later for next mishap";
    document.getElementById('text').style.fontSize ="42px";
    document.getElementById('text').style.fontWeight ="bold";
    COLOR();

}