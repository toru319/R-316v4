// DOM要素の読み込み完了時に実行
document.addEventListener('DOMContentLoaded', function() {
    // 必要な要素を取得
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const percentageElement = document.querySelector('.loading-percentage');

    // ローディングシミュレーション
    function simulateLoading() {
        let percentage = 0;
        const loadingInterval = setInterval(() => {
            percentage += 10;
            percentageElement.textContent = `${percentage}%`;
            if (percentage >= 100) {
                clearInterval(loadingInterval);
                finishLoading();
            }
        }, 200);
    }

    // ローディング完了時の処理
    function finishLoading() {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.classList.add('loaded');
        }, 500);
    }

    // スムーズスクロールの設定
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // 日数のカウントアップ
    function updateDaysCount() {
        const startDate = new Date('2022-09-26');
        const today = new Date();
        const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24) + 1);
        document.getElementById('days-count').textContent = daysPassed;
    }

    // カルーセルの初期化
    function initializeCarousel() {
        new bootstrap.Carousel(document.getElementById('slideshow'), {
            interval: 3000
        });
    }

    // 各機能の実行
    simulateLoading();
    setupSmoothScroll();
    updateDaysCount();
    initializeCarousel();
});