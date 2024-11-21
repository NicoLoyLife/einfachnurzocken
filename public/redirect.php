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
    header('Location: ' . $links[$id]);
    exit;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Link nicht gefunden.";
    exit;
}
?>