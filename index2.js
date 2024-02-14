document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
});