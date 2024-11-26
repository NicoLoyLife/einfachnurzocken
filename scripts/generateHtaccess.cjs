const { writeFileSync } = require("fs");
const { join } = require("path");
const AffiliateLinks = require("../src/services/AffiliateLinks.js");

console.log("Affiliate-Links importiert:", AffiliateLinks);

// Pfade zur generierten .htaccess und redirect.php
const htaccessPath = join(process.cwd(), "public", ".htaccess");
const redirectPhpPath = join(process.cwd(), "public", "redirect.php");

// Header für die .htaccess
let htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Maskierte Affiliate-Weiterleitungen
`;

// Affiliate-Links in .htaccess hinzufügen
Object.keys(AffiliateLinks).forEach((key) => {
  htaccessContent += `  RewriteRule ^links/${key}$ /redirect.php?key=${key} [L]\n`;
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
console.log(`.htaccess wurde unter ${htaccessPath} erstellt.`);

// Inhalt für redirect.php
let phpContent = `<?php
// Automatisch generierte Weiterleitung

$links = array(
`;

// Affiliate-Links in redirect.php hinzufügen
Object.keys(AffiliateLinks).forEach((key) => {
  const encodedUrl = encodeURIComponent(AffiliateLinks[key]);
  phpContent += `    '${key}' => '${encodedUrl}',\n`;
});

phpContent += `);

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
`;

// redirect.php-Datei schreiben
writeFileSync(redirectPhpPath, phpContent, "utf8");
console.log(`redirect.php wurde unter ${redirectPhpPath} erstellt.`);
