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
  // Escape von Single-Quotes in den URLs
  const url = AffiliateLinks[key].replace(/'/g, "\\'");
  phpContent += `    '${key}' => '${url}',\n`;
});

phpContent += `);

$id = isset($_GET['id']) ? $_GET['id'] : '';

if (array_key_exists($id, $links)) {
    header('Location: ' . $links[$id]);
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
