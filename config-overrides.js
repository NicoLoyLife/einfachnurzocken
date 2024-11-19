module.exports = function override(config, env) {
    // Regel für Markdown-Dateien
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  };  