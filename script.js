$(function () {
  $(".button-more").on("mouseover", function () {
    $(this).animate(
      {
        opacity: 0.5,
        marginLeft: 20,
      },
      100
    );
  });

  $(".button-more").on("mouseout", function () {
    $(this).animate(
      {
        opacity: 1,
        marginLeft: 0,
      },
      100
    );
  });

  // カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 送信ボタンクリック時の処理
  $("#submit").on("click", function (event) {
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックをした結果をresultに格納
    let result = inputCheck();
  });

  $("#name").on("blur", function () {
    inputCheck();
  });

  $("#furigana").on("blur", function () {
    inputCheck();
  });

  $("#email").on("blur", function () {
    inputCheck();
  });

  $("#tel").on("blur", function () {
    inputCheck();
  });

  $("#message").on("blur", function () {
    inputCheck();
  });

  $("#agree").on("click", function () {
    inputCheck();
  });

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    console.log("inputCheck関数の呼び出し");
  }
});
