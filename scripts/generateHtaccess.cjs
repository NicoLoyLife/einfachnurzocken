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
  htaccessContent += `  RewriteRule ^links/${key}$ /redirect.php?id=${key} [L]\n`;
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
  const url = encodeURIComponent(AffiliateLinks[key]);
  phpContent += `    '${key}' => base64_encode('${url}'),\n`;
});

phpContent += `);

$id = $_GET['id'] ?? '';

if (array_key_exists($id, $links)) {
    $decodedUrl = base64_decode($links[$id]);
    if ($decodedUrl === false) {
        header("HTTP/1.0 400 Bad Request");
        echo "Ungültiger Link.";
        exit;
    }
    sleep(2); // 2 Sekunden Verzögerung
    header("Location: " . urldecode($decodedUrl));
    exit;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Link nicht gefunden.";
    exit;
}
?>`;

// redirect.php-Datei schreiben
writeFileSync(redirectPhpPath, phpContent, "utf8");

console.log(
  `redirect.php wird unter folgendem Pfad generiert: ${redirectPhpPath}`
);
console.log(`Inhalt der generierten redirect.php:\n${phpContent}`);