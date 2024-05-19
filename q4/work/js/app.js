$(document).ready(function() {
  $('.nav-item').click(function() {
    // すべてのコンテンツを非表示にする
    $('.description li').addClass('is-hidden');
    // クリックされた要素に対応するコンテンツを表示する
    var index = $(this).index();
    $('.description li').eq(index).removeClass('is-hidden');
  });
});
