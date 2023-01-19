$(() => {
  const TIMELINE_VALUES = {
    start: 190,
    step: 30
  };

  let names = ["preprints", "journals", "conferences", "books", "PhDs"];
  let scrollTarget = [false, false, false, false, false];
  let stickyTop = [0, 0, 0, 0, 0]

  for (let i = 0; i < names.length; i++) {
    let id = names[i];
  
    $(window).resize(function () {
      let timeline = $(`#${id} .timeline__nav`),
        offsetTop = parseInt(timeline.css('top'));

      timeline.removeClass('fixed');
      stickyTop[i] = timeline.offset().top - offsetTop;
      $(window).trigger('scroll');
    }).trigger('resize');
    $(window).scroll(function () {
      let timeline = $(`#${id} .timeline__nav`);
      if ($(window).scrollTop() > stickyTop[i]) {
        timeline.addClass('fixed');
      } else {
        timeline.removeClass('fixed');
      }
    }).trigger('scroll');

    let timeline = $(`#${id} .timeline__nav`),
      items = $('li', timeline);
    items.find('span').click(function () {
      let milestones = $(`#${id} .timeline__section .milestone`);
      let li = $(this).parent(),
        index = li.index(),
        milestone = milestones.eq(index);
      if (!li.hasClass('active') && milestone.length) {
        scrollTarget[i] = index;
        let scrollTargetTop = milestone.offset().top - 80 - 60;
        $('html, body').animate({
          scrollTop: scrollTargetTop
        }, {
          duration: 10,
          complete: function complete() {
            scrollTarget[i] = false;
          }
        });
      }
    })

    $(window).scroll(function () {
      let timeline = $(`#${id} .timeline__nav`),
        items = $('li', timeline),
        milestones = $(`#${id} .timeline__section .milestone`);
      let viewLine = $(window).scrollTop() + $(window).height() / 3,
        active = -1;
      if (scrollTarget[i] === false) {
        milestones.each(function () {
          if ($(this).offset().top - viewLine > 0) {
            return false;
          }
          active++;
        });
      } else {
        active = scrollTarget[i];
      }
      timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
      items.filter('.active').removeClass('active');
      items.eq(active != -1 ? active : 0).addClass('active');
    }).trigger('scroll');
  }
});

$("#journals-a").click(function(){
    $("#journals").show();
    id = "journals";
    $("#menu-pub .slider .bar").css("margin-left","20%");
    document.getElementById("slide-item-1").checked=false;
    document.getElementById("slide-item-2").checked=true;
    document.getElementById("slide-item-3").checked=false;
    document.getElementById("slide-item-4").checked=false;
    document.getElementById("slide-item-5").checked=false;
    $("#preprints").hide();
    $("#conferences").hide();
    $("#books").hide();
    $("#PhDs").hide(); 
  }); 

$("#preprint-a").click(function(){
    $("#journals").hide();
    $("#preprints").show();
    id = "preprints";
    $("#menu-pub .slider .bar").css("margin-left","0%");
    document.getElementById("slide-item-1").checked=true;
    document.getElementById("slide-item-2").checked=false;
    document.getElementById("slide-item-3").checked=false;
    document.getElementById("slide-item-4").checked=false;
    document.getElementById("slide-item-5").checked=false;
    $("#conferences").hide();
    $("#books").hide();
    $("#PhDs").hide(); 
  }); 
$("#conferences-a").click(function(){
    $("#journals").hide();
    $("#preprints").hide();
    $("#menu-pub .slider .bar").css("margin-left","40%");
    document.getElementById("slide-item-1").checked=false;
    document.getElementById("slide-item-2").checked=false;
    document.getElementById("slide-item-3").checked=true;
    document.getElementById("slide-item-4").checked=false;
    document.getElementById("slide-item-5").checked=false;
    $("#conferences").show();
    id = "conferences";
    $("#books").hide();
    $("#PhDs").hide(); 
  }); 
$("#books-a").click(function(){
    $("#journals").hide();
    $("#preprints").hide();
    $("#conferences").hide();
    $("#menu-pub .slider .bar").css("margin-left","60%");
    document.getElementById("slide-item-1").checked=false;
    document.getElementById("slide-item-2").checked=false;
    document.getElementById("slide-item-3").checked=false;
    document.getElementById("slide-item-4").checked=true;
    document.getElementById("slide-item-5").checked=false;
    $("#books").show();
    id = "books";
    $("#PhDs").hide(); 
  }); 
$("#PhDs-a").click(function(){
    $("#journals").hide();
    $("#preprints").hide();
    $("#conferences").hide();
    $("#books").hide();
    $("#menu-pub .slider .bar").css("margin-left","80%");
    document.getElementById("slide-item-1").checked=false;
    document.getElementById("slide-item-2").checked=false;
    document.getElementById("slide-item-3").checked=false;
    document.getElementById("slide-item-4").checked=false;
    document.getElementById("slide-item-5").checked=true;
    $("#PhDs").show(); 
    id = "PhDs";
  }); 