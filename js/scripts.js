// Autor: Taha Yasin Muslu
try {
    let cv_alert = document.getElementById("alert");
    let cv_download_btn = document.getElementById("cv-download-btn");
    let close_animation;
    cv_download_btn.addEventListener("click", function () {
        cv_alert.classList.remove("d-none");
        cv_alert.getAnimations().forEach(function (animation) {
            animation.cancel();
        });
        clearTimeout(close_animation);
        cv_alert.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 1000,
            iterations: 1
        });
        close_animation = setTimeout(function () {
            cv_alert.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 1000,
                iterations: 1
            });
            setTimeout(function () {
                cv_alert.classList.add("d-none");
            }, 1000);
        }, 4000);
    });
} catch (error) { }

try {
    let submitButton = document.getElementById("submitButton");
    let submit_alert = document.getElementById("alert");
    let close_animation;
    submitButton.addEventListener("click", function () {
        submit_alert.classList.remove("d-none");
        submit_alert.getAnimations().forEach(function (animation) {
            animation.cancel();
        });
        clearTimeout(close_animation);
        submit_alert.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 1000,
            iterations: 1
        });
        close_animation = setTimeout(function () {
            submit_alert.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 1000,
                iterations: 1
            });
            setTimeout(function () {
                submit_alert.classList.add("d-none");
            }, 1000);
        }, 4000);
    });


} catch (error) {

}

