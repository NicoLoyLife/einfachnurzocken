const { writeFileSync } = require("fs");
const { join } = require("path");
const AffiliateLinks = require("../src/services/AffiliateLinks.js");

console.log("Affiliate-Links importiert:", AffiliateLinks);

// Pfad zur generierten .htaccess-Datei
const htaccessPath = join(process.cwd(), "public", ".htaccess");

// Header für die .htaccess-Datei
let htaccessContent = `
RewriteEngine On

# React-Routing für Single Page Application
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]

# Affiliate-Weiterleitungen
`;

// Affiliate-Links hinzufügen
Object.keys(AffiliateLinks).forEach((key) => {
  htaccessContent += `RewriteRule ^links/${key}$ ${AffiliateLinks[key]} [R=301,L]\n`;
});

// .htaccess-Datei schreiben
writeFileSync(htaccessPath, htaccessContent, "utf8");

console.log(`.htaccess wird unter folgendem Pfad generiert: ${htaccessPath}`);
console.log(`Inhalt der generierten .htaccess:\n${htaccessContent}`);