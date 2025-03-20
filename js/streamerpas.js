        // تابع برای بررسی رمز عبور
        function checkPassword() {
            const password = prompt("لطفاً رمز عبور را وارد کنید:");
            const correctPassword = "6546"; // رمز عبور صحیح

            if (password === correctPassword) {
                // اگر رمز صحیح بود، کاربر را به لینک مشخص هدایت کنید
                window.location.href = "tables.html"; // لینک مورد نظر را اینجا وارد کنید
            } else {
                // اگر رمز اشتباه بود، هشدار نمایش دهید
                alert("رمز عبور اشتباه است. لطفاً دوباره تلاش کنید.");
            }
        }

        // افزودن رویداد کلیک به متن
        document.getElementById('protectedText').addEventListener('click', checkPassword);