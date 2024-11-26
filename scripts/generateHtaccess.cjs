const { writeFileSync } = require("fs");
const { join } = require("path");
const AffiliateLinks = require("../src/services/AffiliateLinks.js");

console.log("Affiliate-Links importiert:", AffiliateLinks);

// Pfade zur generierten .htaccess und proxy.php
const htaccessPath = join(process.cwd(), "public", ".htaccess");
const proxyPhpPath = join(process.cwd(), "public", "proxy.php");

// Header für die .htaccess
let htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Maskierte Affiliate-Weiterleitungen
`;

// Affiliate-Links in .htaccess hinzufügen
Object.keys(AffiliateLinks).forEach((key) => {
  htaccessContent += `  RewriteRule ^r/${key}$ /proxy.php?key=${key} [L]\n`;
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

// Inhalt für proxy.php
let phpContent = `<?php
// Automatisch generierte Proxy-Datei

$links = array(
`;

// Affiliate-Links in proxy.php hinzufügen
Object.keys(AffiliateLinks).forEach((key) => {
  const encodedUrl = Buffer.from(AffiliateLinks[key]).toString("base64");
  phpContent += `    '${key}' => '${encodedUrl}',\n`;
});

phpContent += `);

$key = $_GET['key'] ?? '';

if (array_key_exists($key, $links)) {
    $decodedUrl = base64_decode($links[$key]);
    if ($decodedUrl === false) {
        header("HTTP/1.0 400 Bad Request");
        echo "Ungültiger Link.";
        exit;
    }

    // Proxying der Zielseite mit cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $decodedUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Referrer-Policy: no-referrer'
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code === 200) {
        echo $response;
    } else {
        header("HTTP/1.0 500 Internal Server Error");
        echo "Fehler beim Laden der Zielseite.";
    }
    exit;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Link nicht gefunden.";
    exit;
}
?>`;

// proxy.php-Datei schreiben
writeFileSync(proxyPhpPath, phpContent, "utf8");
console.log(`proxy.php wurde unter ${proxyPhpPath} erstellt.`);