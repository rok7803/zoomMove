<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Rolf Karlen">
        <meta name="description" content="Ein Bild zoomen und danach bewegen">
        <meta name="keywords" content="html, css, javascript, zoom, move, bild, picture, img">
        <title>Zoomen und bewegen</title>
        <link type="text/css" rel="stylesheet" href="./styles.css">
    </head>
    <body>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous"
        src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v9.0" 
        nonce="GIqPZrKB"></script>
        <div class="container">
            <header>
            </header>
            <div class="fb-container">
                <div class="fb-like" 
                    data-colorscheme="dark"
                    data-href="https://beispiele.rolfkarlen.ch/moveZoom/"
                    data-width=""
                    data-layout="standard"
                    data-action="like"
                    data-size="small"
                    data-share="false"></div>
            </div>
            <main>
                <div class="outer-module">
                    <img id="outer-image-top" class="outer-image" src="./images/bernKornhausbruecke_162x108.jpg" title="Bern Vintage" alt="Altstadt von Bern und Kornhausbrücke im Vintage-Look">
                    <img id="outer-image-middle" class="outer-image" src="./images/muensterPlattform_162x108.jpg" title="Bern Retro" alt="Sicht von der Münsterplattform Richtung Bärengraben mit Berner Flage im Retro-Look">
                    <img id="outer-image-bottom" class="outer-image" src="./images/kirchenfeldbruecke_162x108.jpg" title="Bern Modern" alt="Kirchenfeldbrücke mit Tram">
                </div>
                <div class="module" id="module">
                    <!--<div class="picture zoom" id="picture"></div>-->
                    <!--Comment out the img tag for background image|Uncomment for img tag-->
                    <img id="image" class="image zoom" src="./images/bernKornhausbruecke_1000x667.jpg" alt="Altstadt von Bern und Kornhausbrücke im Vintage-Look">
                </div>
            </main>
            <footer>
                &copy; Rolf Karlen <?php echo date('Y')?>
            </footer>
        </div>
        <script type="text/javascript" src="./main.js"></script>
    </body>
</html>