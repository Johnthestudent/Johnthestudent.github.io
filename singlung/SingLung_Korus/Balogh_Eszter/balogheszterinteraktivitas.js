//Ha a felhasználó az angol nyelv gombra kattint
$("#angol").on('click', function()
{
    $("#szoveghez p:first-child").html("Eszter Balogh, a soloist of both the opera and oratorio circuits is the winner of the 2019 London Händel competition.");
    $("#szoveghez p:last-child").html("Following a post-surgery vocal crisis she was introduced to Lax Vox, a vocal therapy and breathing development technique. She has since applied this method successfully in both her own routine and as a vocal pedagogue.");
    $("#keszito b").html("Created by: ");
    $("#keszito p").html("János Pogány");
})

//Ha a felhasználó a magyar nyelv gombra kattint
$("#magyar").on('click', function()
{
    $("#szoveghez p:first-child").html("Balogh Eszter aktívan foglalkoztatott opera - és oratórium énekes, a 2019-es londoni Händel énekverseny győztese.");
    $("#szoveghez p:last-child").html("Műtét után kialakuló hangi krízis következtében ismerte meg a Lax Vox hangterápiás és légzésfejlesztő módszert, amelyet nemcsak saját magán, hanem tanítványain is sikeresen alkalmaz.");
    $("#keszito b").html("Készítette: ");
    $("#keszito p").html("Pogány János");
})