<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="styles.css?=v9">
    <title>Kísérleti szűrő</title>
</head>
<body>
    <div id="mainsection">
        <div id="filteredsections">
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/lagyszaru.php">Lágyszárú növények
                    <?php
                        require('tovabbisegedfajlok/lagyszarudoboz.php');
                    ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/fa.php">Fák
                    <?php 
                         require('tovabbisegedfajlok/fadoboz.php');    
                    ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/virag.php">Virágok
                    <?php
                        require('tovabbisegedfajlok/viragdoboz.php');
                    ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/gyumolcs.php">Gyümölcstermők
                    <?php
                        require('tovabbisegedfajlok/gyumolcsdoboz.php');
                    ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/evelo.php">Évelők
                    <?php
                        require('tovabbisegedfajlok/evelodoboz.php');
                    ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/disz.php">Dísznövények
                    <?php
                        require('tovabbisegedfajlok/diszdoboz.php');
                    ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/hagymas.php">Hagymások
                    <?php
                        require('tovabbisegedfajlok/hagymasdoboz.php');
                    ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="segedfajlok/bokor.php" onclick="valami()">Bokrok 
                <?php 
                    require('tovabbisegedfajlok/bokordoboz.php');
                ?></a></div>
            </div>
        </div>
        <hr>
        <!--way we are in the page-->
        <div id="utvonal"></div>
        <form action="?" method="post">
            <input type="checkbox" id="bokorhoz" name="checkbox[]" value="Bokor">
            <label for="noveny1">Bokor</label> |
            <input type="checkbox" id="fához" name="checkbox[]" value="Fa">
            <label for="noveny2">Fa</label> |
            <input type="checkbox" id="virághoz" name="checkbox[]" value="Virág">
            <label for="noveny3">Virág</label> |
            <input type="checkbox" id="lágyszárúhoz" name="checkbox[]" value="Lágyszárú">
            <label for="noveny4">Lágyszárú</label> |
            <input type="checkbox" id="gyümölcshöz" name="checkbox[]" value="Gyümölcstermő">
            <label for="noveny5">Gyümölcstermő</label> |
            <input type="checkbox" id="évelőkhöz" name="checkbox[]" value="Évelő">
            <label for="noveny6">Évelő</label> |
            <input type="checkbox" id="díszhez" name="checkbox[]" value="Dísznövény">
            <label for="noveny7">Dísznövény</label> |
            <input type="checkbox" id="hagymához" name="checkbox[]" value="Hagymás">
            <label for="noveny8">Hagymás</label> |
            <input type="submit" value="Keres">
        </form>
        <hr>
        <div id="presenteditems">
            <img src="Cycas_platyphylla_Female_cone_1.jpg">
            <img src="Cycas_platyphylla_Female_cone_1.jpg">
            <img src="Cycas_platyphylla_Female_cone_1.jpg">
            <img src="Cycas_platyphylla_Female_cone_1.jpg">
            <img src="Cycas_platyphylla_Female_cone_1.jpg">
        </div>
        <hr>

    </div>

    <!--Necessary Javascript -->
	
    <script src="utvonalhoz.js"></script>
</body>
</html>

<?php
    require("negyzetvalaszt.php");

?>