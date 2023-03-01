<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="styles.css?=v10">
    <title>Kertcentrum Debrecen Adatbázis Szűrő</title>
</head>
<body>
    <div id="mainsection">
        <div id="filteredsections">
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/kulterinoveny.php">
                Kültéri növény
                <?php
                    require('dobozoskeresok/kulterinoveny_doboz.php');
                ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/belterinoveny.php">
                Beltéri növény
                <?php
                    require('dobozoskeresok/belterinoveny_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/orokzold.php">
                Örökzöld
                <?php
                    require('dobozoskeresok/orokzold_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/felorokzold.php">
                Félörökzöld
                <?php
                    require('dobozoskeresok/felorokzold_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/lombhullato.php">
                Lombhullató fa-, cserje
                <?php
                    require('dobozoskeresok/lombhullato_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzo.php">
                Virágzó
                <?php
                    require('dobozoskeresok/viragzo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/alakfa.php">
                Alakfa
                <?php
                    require('dobozoskeresok/alakfa_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/diszfu.php">
                Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény
                <?php
                    require('dobozoskeresok/diszfu_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/egynyari.php">
                Egynyári virágzó-, balkonnövény
                <?php
                    require('dobozoskeresok/egynyari_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/vizinoveny.php">
                Vízi-, vízparti növény
                <?php
                    require('dobozoskeresok/vizinoveny_doboz.php');
                ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/gyumolcstermo.php">
               Gyümölcstermő
               <?php
                    require('dobozoskeresok/gyumolcstermo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/soveny.php">
                Sövénynek való
                <?php
                    require('dobozoskeresok/soveny_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/mediterran.php">
                Mediterrán-, dézsás növény
                <?php
                    require('dobozoskeresok/mediterran_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/fa.php">
                Fa
                <?php
                    require('dobozoskeresok/fa_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/cserje.php">
                Cserje
                <?php
                    require('dobozoskeresok/cserje_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/torpeorokzold.php">
                Törpe örökzöld
                <?php
                    require('dobozoskeresok/torpeorokzold_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/futonoveny.php">
                Futónövény
                <?php
                    require('dobozoskeresok/futonoveny_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/balkonnoveny.php">
                Balkonnövény
                <?php
                    require('dobozoskeresok/balkonnoveny_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/egyebkertivirag.php">
                Egyéb kerti virág
                <?php
                    require('dobozoskeresok/egyebkertivirag_doboz.php');
                ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/orokzold2.php">
                Örökzöld2
                <?php
                    require('dobozoskeresok/orokzold2_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/hagymas.php">
                Hagymás növény
                <?php
                    require('dobozoskeresok/hagymas_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/diszfu2.php">
                Díszfű
                <?php
                    require('dobozoskeresok/diszfu2_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/vizi.php">
                Vízi növény
                <?php
                    require('dobozoskeresok/vizi_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/vizparti.php">
                Vízparti növény
                <?php
                    require('dobozoskeresok/vizparti_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/leveldisznoveny.php">
                Levéldísznövény
                <?php
                    require('dobozoskeresok/leveldisznoveny_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragfeher.php">
                Fehér virágú
                <?php
                    require('dobozoskeresok/viragfeher_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragsarga.php">
                Sárga virágú
                <?php
                    require('dobozoskeresok/viragsarga_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragnarancs.php">
                Narancs virágú
                <?php
                    require('dobozoskeresok/viragnarancs_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragvoros.php">
                Vörös virágú
                <?php
                    require('dobozoskeresok/viragvoros_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragrozsaszin.php">
                Rózsaszín virágú
                <?php
                    require('dobozoskeresok/viragrozsaszin_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viraglila.php">
                Lila virágú
                <?php
                    require('dobozoskeresok/viraglila_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragkek.php">
                Kék virágú
                <?php
                    require('dobozoskeresok/viragkek_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzold.php">
                Zöld virágú
                <?php
                    require('dobozoskeresok/viragzold_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasJanuar.php">
                Januárban virágzik
                <?php
                    require('dobozoskeresok/viragzasJanuar_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasFebruar.php">
                Februárban virágzik
                <?php
                    require('dobozoskeresok/viragzasFebruar_doboz.php');
                ?>
                </a></div>
            </div> 
                <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasMarcius.php">
                Márciusban virágzik
                <?php
                    require('dobozoskeresok/viragzasMarcius_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasAprilis.php">
                Áprilisban virágzik
                <?php
                    require('dobozoskeresok/viragzasAprilis_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasMajus.php">
                Májusban virágzik
                <?php
                    require('dobozoskeresok/viragzasMajus_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasJunius.php">
                Júniusban virágzik
                <?php
                    require('dobozoskeresok/viragzasJunius_doboz.php');
                ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasJulius.php">
                Júliusban virágzik
                <?php
                    require('dobozoskeresok/viragzasJulius_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasAugusztus.php">
                Augusztusban virágzik
                <?php
                    require('dobozoskeresok/viragzasAugusztus_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasSzeptember.php">
                Szeptemberben virágzik
                <?php
                    require('dobozoskeresok/viragzasSzeptember_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasOktober.php">
                Októberben virágzik
                <?php
                    require('dobozoskeresok/viragzasOktober_doboz.php')
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasNovember.php">
                Novemberben virágzik
                <?php
                    require('dobozoskeresok/viragzasNovember_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/viragzasDecember.php">
                Decemberben virágzik
                <?php
                    require('dobozoskeresok/viragzasDecember_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/vizigenyes.php">
                Vízigényes
                <?php
                    require('dobozoskeresok/vizigenyes_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/kozepesenvizigenyes.php">
                Közepesen vízigényes
                <?php
                    require('dobozoskeresok/kozepesenvizigenyes_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/szarazsagturo.php">
                Szárazságtűrő
                <?php
                    require('dobozoskeresok/szarazsagturo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/fagyturo.php">
                Fagytűrő
                <?php
                    require('dobozoskeresok/fagyturo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/mersekeltenfagyturo.php">
                Mérsékelten fagytűrő
                <?php
                    require('dobozoskeresok/mersekeltenfagyturo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/nemfagyturo.php">
                Nem fagytűrő
                <?php
                    require('dobozoskeresok/nemfagyturo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/fenykedvelo.php">
                Fénykedvelő
                <?php
                    require('dobozoskeresok/fenykedvelo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/felarnyekkedvelo.php">
                Félárnyék kedvelő
                <?php
                    require('dobozoskeresok/felarnyekkedvelo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/arnyekturo.php">
                Árnyéktűrő
                <?php
                    require('dobozoskeresok/arnyekturo_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/0_15cm.php">
                0-15 cm-ig növő
                <?php
                    require('dobozoskeresok/0_15cm_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/15_50cm.php">
                15-50 cm-ig növő
                <?php
                    require('dobozoskeresok/15_50cm_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/50_100cm.php">
                50-100 cm-ig növő
                <?php
                    require('dobozoskeresok/50_100cm_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/100_150cm.php">
                100-150 cm-ig növő
                <?php
                    require('dobozoskeresok/100-150cm_doboz.php');
                ?>
                </a></div>
            </div>
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/1,5-5m.php">
                1,5-5 m-ig növő
                <?php
                    require('dobozoskeresok/1,5-5m_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/5-10m.php">
                5-10 m-ig növő
                <?php
                    require('dobozoskeresok/5-10m_doboz.php');
                ?>
                </a></div>
            </div> 
            <div class="card">
                <div class="card-body"><a class="card-link" href="kartyakeresok/10mnagyobb.php">
                10 m-től nagyobbra növő
                <?php
                    require('dobozoskeresok/10mnagyobb_doboz.php');
                ?>
                </a></div>
            </div>     
        </div>
        <br>
        <!--way we are in the page-->
        <form action="?" method="post">
            <input type="checkbox" id="" name="checkbox[]" value="Kültéri növény">
            <label for="noveny1">Kültéri növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Beltéri növény">
            <label for="noveny2">Beltéri növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Örökzöld">
            <label for="noveny3">Örökzöld</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Félörökzöld">
            <label for="noveny4">Félörökzöld</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Lombhullató fa-, cserje">
            <label for="noveny5">Lombhullató fa-, cserje</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Virágzó">
            <label for="noveny6">Virágzó</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Alakfa">
            <label for="noveny7">Alakfa</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény">
            <label for="noveny8">Díszfű, sziklakerti-, talajtakaró-, és egyéb évelő növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Egynyári virágzó-, balkonnövény">
            <label for="noveny9">Egynyári virágzó-, balkonnövény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Vízi-, vízparti növény">
            <label for="noveny10">Vízi-, vízparti növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Gyümölcstermő">
            <label for="noveny11">Gyümölcstermő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Sövénynek való">
            <label for="noveny12">Sövénynek való</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Mediterrán-, dézsás növény">
            <label for="noveny13">Mediterrán-, dézsás növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Fa">
            <label for="noveny14">Fa</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Cserje">
            <label for="noveny15">Cserje</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Törpe örökzöld">
            <label for="noveny16">Törpe örökzöld</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Futónövény">
            <label for="noveny17">Futónövény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Balkonnövény">
            <label for="noveny18">Balkonnövény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Egyéb kerti virág">
            <label for="noveny19">Egyéb kerti virág</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Örökzöld2">
            <label for="noveny20">Örökzöld2</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Hagymás növény">
            <label for="noveny21">Hagymás növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Díszfű">
            <label for="noveny22">Díszfű</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Vízi növény">
            <label for="noveny23">Vízi növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Vízparti növény">
            <label for="noveny24">Vízparti növény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Levéldísznövény">
            <label for="noveny25">Levéldísznövény</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Fehér virágú">
            <label for="noveny26">Fehér virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Sárga virágú">
            <label for="noveny27">Sárga virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Narancs virágú">
            <label for="noveny28">Narancs virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Vörös virágú">
            <label for="noveny29">Vörös virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Rózsaszín virágú">
            <label for="noveny30">Rózsaszín virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Lila virágú">
            <label for="noveny31">Lila virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Kék virágú">
            <label for="noveny32">Kék virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Zöld virágú">
            <label for="noveny33">Zöld virágú</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Januárban virágzik">
            <label for="noveny34">Januárban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Februárban virágzik">
            <label for="noveny35">Februárban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Márciusban virágzik">
            <label for="noveny36">Márciusban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Áprilisban virágzik">
            <label for="noveny37">Áprilisban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Májusban virágzik">
            <label for="noveny38">Májusban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Júniusban virágzik">
            <label for="noveny39">Júniusban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Júliusban virágzik">
            <label for="noveny40">Júliusban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Augusztusban virágzik">
            <label for="noveny41">Augusztusban virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Szeptemberben virágzik">
            <label for="noveny42">Szeptemberben virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Októberben virágzik">
            <label for="noveny43">Októberben virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Novemberben virágzik">
            <label for="noveny44">Novemberben virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Decemberben virágzik">
            <label for="noveny45">Decemberben virágzik</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Vízigényes">
            <label for="noveny46">Vízigényes</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Közepesen vízigényes">
            <label for="noveny47">Közepesen vízigényes</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Szárazságtűrő">
            <label for="noveny48">Szárazságtűrő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Fagytűrő">
            <label for="noveny49">Fagytűrő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Mérsékelten fagytűrő">
            <label for="noveny50">Mérsékelten fagytűrő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Nem fagytűrő">
            <label for="noveny51">Nem fagytűrő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Fénykedvelő">
            <label for="noveny52">Fénykedvelő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Félárnyék kedvelő">
            <label for="noveny53">Félárnyék kedvelő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="Árnyéktűrő">
            <label for="noveny54">Árnyéktűrő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="0-15 cm-ig növő">
            <label for="noveny55">0-15 cm-ig növő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="15-50 cm-ig növő">
            <label for="noveny56">15-50 cm-ig növő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="50-100 cm-ig növő">
            <label for="noveny57">50-100 cm-ig növő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="100-150 cm-ig növő">
            <label for="noveny58">100-150 cm-ig növő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="1,5-5 m-ig növő">
            <label for="noveny59">1,5-5 m-ig növő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="5-10 m-ig növő">
            <label for="noveny60">5-10 m-ig növő</label><br>
            <input type="checkbox" id="" name="checkbox[]" value="10 m-től nagyobbra növő">
            <label for="noveny61">10 m-től nagyobbra növő</label><br>
            <input type="submit" value="Keres">
        </form>
        <div id="elozetestermekek">
            <?php
                require('negyzetvalaszt.php');
            ?>
        </div>
    </div>

</body>
</html>

