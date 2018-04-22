<
script >
  var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)

    // Speed & Easing
    speed: 1750, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeOutQuad', // Easing pattern to use
    customEasing: function (time) {

      // Function. Custom easing pattern
      // If this is set to anything other than null, will override the easing option above

      // return <your formulate with time as a multiplier>

      // Example: easeInOut Quad
      return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

    },

    // Callback API
    before: function (anchor, toggle) {}, // Callback to run before scroll
    after: function (anchor, toggle) {} // Callback to run after scroll
  }); <
/script>



<
script >
  window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');

sr.reveal('.foo', {
  duration: 1500
})

sr.reveal('.foo', {
  scale: 1
});

sr.reveal('.foo', {
  distance: '5px'
});

sr.reveal('.foo', {
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});; <
/script>
