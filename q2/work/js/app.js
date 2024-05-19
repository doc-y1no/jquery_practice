$(document).ready(function() {
  // モーダルを開くボタンがクリックされた時の処理
  $(".modal_open_button").click(function() {
      $(".modal_win").fadeIn();
  });

  // モーダルを閉じるボタンがクリックされた時の処理
  $(".modal_close_button").click(function() {
      $(".modal_win").fadeOut();
  });
});
