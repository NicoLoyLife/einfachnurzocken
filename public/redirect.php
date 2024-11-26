<?php
// Automatisch generierte Weiterleitung

$links = array(
    'betanoSportwetten' => 'https%3A%2F%2Fgml-grp.com%2FC.ashx%3Fbtag%3Da_10846b_3503c_%26affid%3D3453%26siteid%3D10846%26adid%3D3503%26c%3D',
    'winamaxSportwetten' => 'https%3A%2F%2Fwww.winamax.de%2Fregistration%2Flanding%2FDefault%3Flanguage%3DDE%26banid%3D73017',
    'merkurbetsSportwetten' => 'https%3A%2F%2Fmedia.cashpointpartners.com%2FC.ashx%3Fbtag%3Da_8433b_2360c_%26affid%3D4834%26siteid%3D8433%26adid%3D2360%26c%3D',
    'bingBongSlots' => 'https%3A%2F%2Fopwu.grass.bingbong.de%2Fts%2Fi5044752%2Ftsc%3Ftyp%3Dr%26amc%3Dnetworks.cap.526088.535942.CRTBbxuBVCq',
    'jackpotPiratenSlots' => 'https%3A%2F%2Fcjih.boell.jackpotpiraten.de%2Fts%2Fi5544453%2Ftsc%3Ftyp%3Dr%26amc%3Dnetworks.cap.526088.535942.CRT-GYr1T0Y',
);

$key = $_GET['key'] ?? '';

if (array_key_exists($key, $links)) {
    // Entferne den Referrer und leite weiter
    header("Referrer-Policy: no-referrer");
    header("Location: " . urldecode($links[$key]));
    exit;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Ungültiger Link.";
    exit;
}
?>
