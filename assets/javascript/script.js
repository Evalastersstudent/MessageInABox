function main() {
      jQuery(document).ready(function() {
            jQuery(".external-link").attr("target", "_blank");
      });

      $(document).ready(function() {
            $('#navigatie').localScroll({speed: 500});
      });
}

window.onload = function() {
      main();
}
