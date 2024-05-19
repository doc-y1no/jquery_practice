$(document).ready(function() {
  $(".btn__submit").click(function() {
    // 名字
    const familyName = $("#family__name").val();
    console.log("名字:", familyName);

    // 名前
    const givenName = $("#given__name").val();
    console.log("名前:", givenName);

    // 生年月日
    const year = $(".year").val();
    const month = $(".month").val();
    const day = $(".day").val();
    const birthday = year + "-" + month + "-" + day;
    console.log("生年月日:", birthday);

    // 性別
    const gender = $("input[name='gender']:checked").val();
    console.log("性別:", gender);

    // 職業
    const occupation = $(".occupation").val();
    console.log("職業:", occupation);

    // アカウント名
    const accountName = $("#account__name").val();
    console.log("アカウント名:", accountName);

    // メールアドレス
    const email = $("#email").val();
    console.log("メールアドレス:", email);

    // パスワード
    const password = $("#password").val();
    console.log("パスワード:", password);

    // 確認用パスワード
    const duplicationPassword = $("#duplication__password").val();
    console.log("確認用パスワード:", duplicationPassword);

    // 住所
    const address = $("#address").val();
    console.log("住所:", address);

    // 電話番号
    const tel = $("#tel").val();
    console.log("電話番号:", tel);

    // 購読情報
    const subscriptions = [];
    $("input[name='subscription']:checked").each(function() {
      subscriptions.push($(this).val());
    });
    console.log("購読情報:", subscriptions.join(", "));
  });
});
