(function () {
  // const counters = document.querySelectorAll('[data-counter]');
  //
  // counters.forEach((counter) => {
  //   // counter.innerText = "0";
  //   const updateCounter = () => {
  //     const target = +counter.getAttribute("data-counter");
  //
  //     console.log(target);
  //
  //     const count = +counter.innerText;
  //     const increment = target / 200;
  //     if (count < target) {
  //       counter.innerText = `$ ${Math.ceil(count + increment)}`;
  //       setTimeout(updateCounter, 1);
  //     } else counter.innerText = target;
  //   };
  //   updateCounter();
  // });




  // document.querySelector('[data-counter]').forEach(function(el) {
  //
  // })
  //
  //
  // $(".counter").each(function () {
  //   var $this = $(this),
  //     countTo = $this.attr("data-countto");
  //   countDuration = parseInt($this.attr("data-duration"));
  //   $({ counter: $this.text() }).animate(
  //     {
  //       counter: countTo
  //     },
  //     {
  //       duration: countDuration,
  //       easing: "linear",
  //       step: function () {
  //         $this.text(Math.floor(this.counter));
  //       },
  //       complete: function () {
  //         $this.text(this.counter);
  //       }
  //     }
  //   );
  // });
})();