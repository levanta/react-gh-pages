export default function ScrollTo(offsetTop, speed) {
    let step = window.pageYOffset;

    const int = setInterval(function() {
      window.scrollTo(0, step);
      step += 10;
      if (step >= offsetTop) clearInterval(int);
    }, speed/100);
}