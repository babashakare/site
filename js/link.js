
        function suggestBrowser() {

            const userConfirmed = confirm("برای باز کردن این لینک، پیشنهاد می‌کنیم از مرورگر دیگری مانند Google Chrome یا Firefox استفاده کنید. آیا می‌خواهید ادامه دهید؟");

            if (userConfirmed) {

                window.open("https://www.example.com", "_blank"); // لینک مورد نظر را اینجا قرار دهید

            }

        }

