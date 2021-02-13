/*Comment out for background image
Uncomment for img tag*/
const imageZoom = document.getElementById('image');
const imageSmallTop = document.getElementById('outer-image-top');
const imageSmallMiddle = document.getElementById('outer-image-middle');
const imageSmallBottom = document.getElementById('outer-image-bottom');

/*Comment out for img tag
Uncomment for background image*/
//const imageZoom = document.getElementById('picture');

imageZoom.addEventListener("mousemove", (e) => {
    // This gives you the position of the image on the page
    var bbox = e.target.getBoundingClientRect();

    // Then we measure how far into the image the mouse is in both x and y directions
    var mouseX = e.clientX - bbox.left;
    var mouseY = e.clientY - bbox.top;

    // Then work out how far through the image as a percentage the mouse is
    var xPercent = (mouseX / bbox.width) * 100;
    var yPercent = (mouseY / bbox.height) * 100;

    // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
    //let c = imageZoom.getContext('2d');
    //c.translate(0, 0);
    e.target.style.transformOrigin = xPercent+ '% ' + yPercent + '%';
    // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.

});

imageSmallTop.addEventListener('mouseover', (e) => {
    imageZoom.src = './images/bernKornhausbruecke_1000x667.jpg';
    imageZoom.alt = 'Altstadt von Bern und Kornhausbrücke im Vintage-Look';
});
imageSmallMiddle.addEventListener('mouseover', (e) => {
    imageZoom.src = './images/muensterPlattform_1000x667.jpg';
    imageZoom.alt = 'Sicht von der Münsterplattform Richtung Bärengraben mit Berner Flage im Retro-Look';
});
imageSmallBottom.addEventListener('mouseover', (e) => {
    imageZoom.src = './images/kirchenfeldbruecke_1000x667.jpg';
    imageZoom.alt = 'Kirchenfeldbrücke mit Tram';
});

/*imageZoom.addEventListener("mousemove", (e) => {
    imageZoom.style.backgroundPositionX = -e.offsetX + "px";
    imageZoom.style.backgroundPositionY = -e.offsetY + "px";
});*/
/*imageZoom.addEventListener('mouseleave', (e) =>{
    imageZoom.style.backgroundPositionX = 0;
    imageZoom.style.backgroundPositionY = 0;
});*/

/*imageZoom.addEventListener("mousemove", (e) => {
    let positionLeft = e.pageX - imageZoom.style.width / 2;
    let positionTop = e.pageY - imageZoom.style.height / 2;
    imageZoom.style.left = positionLeft;
    imageZoom.style.top = positionTop
});*/