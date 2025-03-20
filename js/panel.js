function openModal() {

        // تار کردن پس‌زمینه

        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";


        // نمایش پاپ آپ

        var modal = document.getElementById("myModal");

        modal.style.display = "block";


        // شمارش معکوس

        var countdown = 20;

        var countdownElement = document.getElementById("countdown");

        countdownElement.innerText = countdown;


        var interval = setInterval(function() {

            countdown--;

            countdownElement.innerText = countdown;


            if (countdown <= 0) {

                clearInterval(interval);

                closeModal();

            }

        }, 1000);

    }


    function closeModal() {

        // مخفی کردن پاپ آپ

        document.getElementById("myModal").style.display = "none";

        // برگرداندن پس‌زمینه به حالت عادی

        document.body.style.backgroundColor = "";

    }


    // بستن پاپ آپ با کلیک خارج از آن

    window.onclick = function(event) {

        var modal = document.getElementById("myModal");

        if (event.target === modal) {

            closeModal();

        }

    }