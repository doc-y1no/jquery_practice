$(document).ready(function() {
  // ハンバーガーメニューボタンがクリックされたときの処理
  $(".drawer_button").click(function() {
    // ハンバーガーメニューボタンのactiveクラスを切り替える
    $(this).toggleClass("active");
    // メニューが表示されているかどうかを判定する
    var menuVisible = $(".drawer_nav_wrapper").hasClass("open");
    // メニューが表示されている場合は非表示にし、表示されていない場合は表示する
    if (menuVisible) {
      $(".drawer_nav_wrapper").removeClass("open");
      $(".drawer_bg").fadeOut();
    } else {
      $(".drawer_nav_wrapper").addClass("open");
      $(".drawer_bg").fadeIn();
    }
  });
});
