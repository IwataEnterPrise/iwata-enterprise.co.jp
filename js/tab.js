$(document).ready(function() {
    // 初期状態で最初のタブを表示
    $("#tab1").addClass("active");

    // タブボタンがクリックされたときの処理
    $(".tab-button").click(function() {
        // クリックされたボタンのデータ属性から対応するタブを取得
        var tabId = $(this).data("tab");

        // すべてのタブコンテンツを非表示にし、クリックされたタブを表示
        $(".tab-panel").removeClass("active");
        $("#" + tabId).addClass("active");

        // タブボタンのアクティブ状態を切り替え
        $(".tab-button").removeClass("active");
        $(this).addClass("active");
    });
});
