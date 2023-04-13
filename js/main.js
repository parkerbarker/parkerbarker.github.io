(function () {
  // Optimization for Repeat Views
  if (sessionStorage.fontsLoadedFoutWithClass) {
    document.documentElement.className += " fonts-loaded";
    return;
  }

  if ("fonts" in document) {
    Promise.all([
      document.fonts.load("1em GT Ultra Fine"),
      document.fonts.load("700 1em GT Ultra Fine"),
      document.fonts.load("1em GT Ultra Standard"),
      document.fonts.load("700 1em GT Ultra Standard"),
    ]).then(function () {
      document.documentElement.className += " fonts-loaded";

      // Optimization for Repeat Views
      sessionStorage.fontsLoadedFoutWithClass = true;
    });
  }
})();
