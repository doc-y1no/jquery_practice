$(document).ready(function() {
  // セレクトボックスの変更イベントを設定
  $('.select-box').change(function() {
    // 選択されたカテゴリを取得
    var selectedCategory = $(this).val();

    // 全てのリストアイテムを非表示にする
    $('.food-list > li').hide();

    // 全てを選択した場合は全てのアイテムを表示
    if(selectedCategory === 'all') {
      $('.food-list > li').show();
    } else {
      // 選択されたカテゴリに一致するアイテムのみ表示
      $('.food-list > li[data-category-type="' + selectedCategory + '"]').show();
    }
  });
});
