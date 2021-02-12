$(function() {
        $.scrollify({
          section : "section",
      });
});
$.scrollify({
   section : "section",
   easing: "easeOutExpo",
   scrollSpeed: 300,
   offset : 0,
   scrollbars: true,
   standardScrollElements: "",
   setHeights: false,
   overflowScroll: true,
   updateHash: true,
   touchScroll:true,
   before:function() {},
   after:function() {},
   afterResize:function() {},
   afterRender:function() {}
 });
