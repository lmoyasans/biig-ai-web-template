$(() => {
  let stickyTop = 0,
    scrollTarget = false;
  let timeline = $('.timeline__nav'),
    items = $('li', timeline),
    milestones = $('.timeline__section .milestone'),
    offsetTop = parseInt(timeline.css('top'));
  const TIMELINE_VALUES = {
    start: 190,
    step: 30
  };
  $(window).resize(function () {
    timeline.removeClass('fixed');
    stickyTop = timeline.offset().top - offsetTop;
    $(window).trigger('scroll');
  }).trigger('resize');
  $(window).scroll(function () {
    if ($(window).scrollTop() > stickyTop) {
      timeline.addClass('fixed');
    } else {
      timeline.removeClass('fixed');
    }
  }).trigger('scroll');
  items.find('span').click(function () {
    let li = $(this).parent(),
      index = li.index(),
      milestone = milestones.eq(index);
    if (!li.hasClass('active') && milestone.length) {
      scrollTarget = index;
      let scrollTargetTop = milestone.offset().top - 80;
      $('html, body').animate({
        scrollTop: scrollTargetTop
      }, {
        duration: 400,
        complete: function complete() {
          scrollTarget = false;
        }
      });
    }
  });
  $(window).scroll(function () {
    let viewLine = $(window).scrollTop() + $(window).height() / 3,
      active = -1;
    if (scrollTarget === false) {
      milestones.each(function () {
        if ($(this).offset().top - viewLine > 0) {
          return false;
        }
        active++;
      });
    } else {
      active = scrollTarget;
    }
    timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
    items.filter('.active').removeClass('active');
    items.eq(active != -1 ? active : 0).addClass('active');
  }).trigger('scroll');
});

$("#journals-a").click(function(){
    $("#journals").show();
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
  }); 