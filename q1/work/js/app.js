// Q1：
$(document).ready(function() {
  // ページが読み込まれたときに実行されるコード
  changeTextColor(); // ページロード時に文字色を変更する関数を呼び出す

  // ページリロード時に文字色を変更する関数
  function changeTextColor() {
      // グレー色の値
      var greyValue = 150; // 0から255の範囲で、150に設定

      // グレー色をCSSの形式に変換
      var greyColor = "rgb(" + greyValue + "," + greyValue + "," + greyValue + ")";

      // #q1ボタンの文字色をグレーに変更
      $("#q1").css("color", greyColor); // ボタンの文字色をグレーに変更
  }

  // ページリロード時に文字色を変更
  $(window).on("load", function() {
      changeTextColor(); // ページリロード時に文字色を変更する関数を呼び出す
  });
});

// Q2：
$(document).ready(function() {
  // ボタンがクリックされたときの処理
  $("#q2").click(function() {
      // クリックされたときに変更する色を設定
      var newColor = "rgb(255, 200, 200)"; // 淡い赤（ピンクより）

      // ボタンの色を変更
      $(this).css("background-color", newColor);
  });
});

// Q3:
$(document).ready(function() {
  // ボタンがクリックされたときの処理
  $("#q3").click(function() {
      // フェードアウトアニメーションを実行し、完了したら要素を削除
      $(this).fadeOut(3000, function() { // 3000ミリ秒（＝3秒）かけてフェードアウト
          $(this).remove();
      });
  });
});

// Q4:
$(document).ready(function() {
  // ボタンがクリックされたときの処理
  $("#q4").click(function() {
      // ボタンのサイズを変更
      $(this).css({
          "width": "300px", // 幅を300pxに変更
          "height": "122.5px" // 高さを122.5pxに変更
      });
  });
});

// Q5:
// Q5ボタンがクリックされたときに実行される処理
$("#q5").on("click", function () {
  // ボタンの内側（テキストの前）に「DOMの中の前」を挿入
  $(this).prepend("DOMの中の前")
  // ボタンの内側（テキストの後）に「DOMの中の後」を挿入
         .append("DOMの中の後")
  // ボタンの前に「DOMの前」を挿入
         .before("DOMの前")
  // ボタンの後に「DOMの後」を挿入
         .after("DOMの後");
});

// Q6:
$(document).ready(function() {
  $("#q6").click(function() {
      // ボタンを2秒かけて右下に移動するアニメーション
      $(this).animate({
          marginTop: "100px",
          marginLeft: "100px"
      }, 2000);
  });
});

// Q7：
$(document).ready(function() {
  // ボタンがクリックされたときの処理
  $("#q7").click(function() {
      // コンソールにボタンのHTMLノードを表示
      console.log($(this)[0].outerHTML);
  });
});

// Q8：
$(document).ready(function() {
  $("#q8").hover(
      function() {
          // ホバー開始時の処理
          $(this).css({
              "width": "300px",
              "height": "122.5px"
          });
      },
      function() {
          // ホバー終了時の処理
          $(this).css({
              "width": "",
              "height": ""
          });
      }
  );
});

// Q9：
  $(document).ready(function() {
    // ボタンがクリックされたときの処理
    $("#q9 li").click(function() {
      // ボタンのテキストを取得してアラート表示
      var text = $(this).text();
      var index = $(this).index();
      var alertText = "127.0.0.1:5050 の内容\n" + index;
      alert(alertText);
    });
  });

// Q10-Q11：
$(document).ready(function() {
  // Q10のボタンがクリックされたときの処理
  $("#q10 li").click(function() {
      // 対応するQ11のボタンのインデックスを取得
      var index = $(this).index();
      // 対応するQ11のボタンを選択してサイズを変更
      $("#q11 li:eq(" + index + ")").css({
          "width": "300px",
          "height": "50px",
          "font-size": "30px"
      });
  });
});
