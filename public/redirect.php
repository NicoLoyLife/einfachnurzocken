<?php
// Automatisch generierte redirect.php

$links = array(
    'betanoSportwetten' => 'https://gml-grp.com/C.ashx?btag=a_10846b_3503c_&affid=3453&siteid=10846&adid=3503&c=',
    'winamaxSportwetten' => 'https://www.winamax.de/registration/landing/Default?language=DE&banid=73017',
    'merkurbetsSportwetten' => 'https://media.cashpointpartners.com/C.ashx?btag=a_8433b_2360c_&affid=4834&siteid=8433&adid=2360&c=',
    'bingBongSlots' => 'https://opwu.grass.bingbong.de/ts/i5044752/tsc?typ=r&amc=networks.cap.526088.535942.CRTBbxuBVCq',
    'jackpotPiratenSlots' => 'https://cjih.boell.jackpotpiraten.de/ts/i5544453/tsc?typ=r&amc=networks.cap.526088.535942.CRT-GYr1T0Y',
);

$id = isset($_GET['id']) ? $_GET['id'] : '';

if (array_key_exists($id, $links)) {
    $url = htmlspecialchars($links[$id], ENT_QUOTES, 'UTF-8');
    echo "<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv='refresh' content='1;url=$url'/>
        <meta name='robots' content='noindex,nofollow'/>
        <meta http-equiv='Cache-Control' content='no-cache, no-store, must-revalidate'/>
        <meta http-equiv='Pragma' content='no-cache'/>
        <meta http-equiv='Expires' content='0'/>
        <title>Weiterleitung...</title>
    </head>
    <body>
        <p>Sie werden in Kürze weitergeleitet. Falls die Weiterleitung nicht automatisch erfolgt, klicken Sie <a href='$url'>hier</a>.</p>
    </body>
    </html>";
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Link nicht gefunden.";
}
?>