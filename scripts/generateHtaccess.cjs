const { writeFileSync } = require("fs");
const { join } = require("path");
const AffiliateLinks = require("../src/services/AffiliateLinks.js");

console.log("Affiliate-Links importiert:", AffiliateLinks);

// Pfad zur generierten .htaccess-Datei
const htaccessPath = join(process.cwd(), "public", ".htaccess");

// Pfad zur generierten redirect.php-Datei
const redirectPhpPath = join(process.cwd(), "public", "redirect.php");

// Header für die .htaccess-Datei
let htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Affiliate-Weiterleitungen
  `;

// Affiliate-Links hinzufügen
Object.keys(AffiliateLinks).forEach((key) => {
  htaccessContent += `RewriteRule ^links/${key}$ /redirect.php?id=${key} [L]\n`;
});

htaccessContent += `
# React-Routing für Single Page Application
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
`;

// .htaccess-Datei schreiben
writeFileSync(htaccessPath, htaccessContent, "utf8");

console.log(`.htaccess wird unter folgendem Pfad generiert: ${htaccessPath}`);
console.log(`Inhalt der generierten .htaccess:\n${htaccessContent}`);

// Inhalt für redirect.php
let phpContent = `<?php
// Automatisch generierte redirect.php

$links = array(
`;

// Affiliate-Links hinzufügen zur redirect.php
Object.keys(AffiliateLinks).forEach((key) => {
  const url = AffiliateLinks[key].replace(/'/g, "\\'");
  phpContent += `    '${key}' => '${url}',\n`;
});

phpContent += `);

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
?>`;

// redirect.php-Datei schreiben
writeFileSync(redirectPhpPath, phpContent, "utf8");

console.log(
  `redirect.php wird unter folgendem Pfad generiert: ${redirectPhpPath}`
);
console.log(`Inhalt der generierten redirect.php:\n${phpContent}`);