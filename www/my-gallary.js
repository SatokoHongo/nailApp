

(function () {
    var canvas = document.getElementById('thumbnail');
    // canvas.width = 960;
    // canvas.height = 540;

    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;


    var bgImg = new Image();
    bgImg.onload = function () {
        // 本体イメージを読み込み
        context.globalCompositeOperation = 'source-over';
        context.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

        // パターンイメージを読み込み


        // 装飾イメージを読み込み
        var maruImg = new Image();
        maruImg.onload = function() {
            context.globalCompositeOperation = 'source-over';
            context.drawImage(maruImg, 130, 50, 40, 40);
            mask();
        }
        maruImg.src = 'resource/maru10.png';
        
        // 星型でマスクをかける
        mask();

    };
    bgImg.src = 'resource/bg.jpg';

    function mask() {
        context.globalCompositeOperation = 'destination-in';
    
        var maskImg = new Image();
        maskImg.width = canvas.width;
        maskImg.height = canvas.height;
        maskImg.onload = function () {
            context.drawImage(maskImg, centerX / 2, centerY / 2, centerX, centerY);
        };
        maskImg.src = 'resource/mask.png';
    }
})();

