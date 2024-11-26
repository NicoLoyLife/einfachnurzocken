<?php
// Automatisch generierte Proxy-Datei

$links = array(
    'betanoSportwetten' => 'aHR0cHM6Ly9nbWwtZ3JwLmNvbS9DLmFzaHg/YnRhZz1hXzEwODQ2Yl8zNTAzY18mYWZmaWQ9MzQ1MyZzaXRlaWQ9MTA4NDYmYWRpZD0zNTAzJmM9',
    'winamaxSportwetten' => 'aHR0cHM6Ly93d3cud2luYW1heC5kZS9yZWdpc3RyYXRpb24vbGFuZGluZy9EZWZhdWx0P2xhbmd1YWdlPURFJmJhbmlkPTczMDE3',
    'merkurbetsSportwetten' => 'aHR0cHM6Ly9tZWRpYS5jYXNocG9pbnRwYXJ0bmVycy5jb20vQy5hc2h4P2J0YWc9YV84NDMzYl8yMzYwY18mYWZmaWQ9NDgzNCZzaXRlaWQ9ODQzMyZhZGlkPTIzNjAmYz0=',
    'bingBongSlots' => 'aHR0cHM6Ly9vcHd1LmdyYXNzLmJpbmdib25nLmRlL3RzL2k1MDQ0NzUyL3RzYz90eXA9ciZhbWM9bmV0d29ya3MuY2FwLjUyNjA4OC41MzU5NDIuQ1JUQmJ4dUJWQ3E=',
    'jackpotPiratenSlots' => 'aHR0cHM6Ly9jamloLmJvZWxsLmphY2twb3RwaXJhdGVuLmRlL3RzL2k1NTQ0NDUzL3RzYz90eXA9ciZhbWM9bmV0d29ya3MuY2FwLjUyNjA4OC41MzU5NDIuQ1JULUdZcjFUMFk=',
);

$key = $_GET['key'] ?? '';

if (array_key_exists($key, $links)) {
    $decodedUrl = base64_decode($links[$key]);
    if ($decodedUrl === false) {
        header("HTTP/1.0 400 Bad Request");
        echo "Ungültiger Link.";
        exit;
    }

    // Referrer entfernen, um AdBlocker zu umgehen
    header("Referrer-Policy: no-referrer");
    header("Location: " . $decodedUrl);
    exit;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Link nicht gefunden.";
    exit;
}
?>