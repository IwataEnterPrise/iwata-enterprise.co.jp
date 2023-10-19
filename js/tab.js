$(document).ready(function () {
    // 初期状態で最初のタブを表示
    $("#tab1").addClass("active");

    // タブボタンがクリックされたときの処理
    $(".tab-button").click(function () {
        // クリックされたボタンのデータ属性から対応するタブを取得
        const tabId = $(this).data("tab");

        // タブボタンのアクティブ状態を切り替え
        $(".tab-button").removeClass("active");
        $(this).addClass("active");

        // タブコンテンツのフェードアウト
        $(".tab-panel.active").fadeOut(300, function () {
            // フェードアウトが完了したら、新しいタブコンテンツを表示
            $(".tab-panel").removeClass("active");
            $("#" + tabId).addClass("active");
            // タブコンテンツのフェードイン
            $("#" + tabId).fadeIn(300);
        });
    });
});
