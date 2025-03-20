        // تابع برای خواندن اعداد از URL

        async function loadNumbers() {

            const url = 'https://raw.githubusercontent.com/babashakare/site/refs/heads/master/streamer/babamoji'; // آدرس فایل مورد نظر

            try {

                const response = await fetch(url);

                if (!response.ok) {

                    throw new Error('خطا در بارگیری تعداد استریم از طرف سرور شکرسیتی');

                }

                const text = await response.text();

                const lines = text.trim().split('\n'); // تقسیم محتوا به خطوط


                // دریافت خط اول، دوم، سوم و چهارم

                const number1 = lines.length > 0 ? lines[0].trim().match(/\d+/) : null; // خط اول

                const number2 = lines.length > 1 ? lines[1].trim().match(/\d+/) : null; // خط دوم

                const number3 = lines.length > 2 ? lines[2].trim().match(/\d+/) : null; // خط سوم

                const number4 = lines.length > 3 ? lines[3].trim().match(/\d+/) : null; // خط چهارم


                // نمایش اعداد در عناصر مربوطه

                document.getElementById('numberDisplay1').innerText = number1 && number1[0] === '700' ? 'دیوار استریمر پلاسما شکست' : (number1 ? number1[0] : 'عدد معتبر پیدا نشد');

                document.getElementById('numberDisplay2').innerText = number2 && number2[0] === '700' ? 'دیوار استریمر پلاسما شکست' : (number2 ? number2[0] : 'عدد معتبر پیدا نشد');

                document.getElementById('numberDisplay3').innerText = number3 && number3[0] === '700' ? 'دیوار استریمر پلاسما شکست' : (number3 ? number3[0] : 'عدد معتبر پیدا نشد');

                document.getElementById('numberDisplay4').innerText = number4 && number4[0] === '700' ? 'دیوار استریمر پلاسما شکست' : (number4 ? number4[0] : 'عدد معتبر پیدا نشد');


            } catch (error) {

                document.getElementById('numberDisplay1').innerText = error.message;

                document.getElementById('numberDisplay2').innerText = error.message;

                document.getElementById('numberDisplay3').innerText = error.message;

                document.getElementById('numberDisplay4').innerText = error.message;

            }

        }


        // بارگذاری اعداد هنگام بارگذاری صفحه

        window.onload = function() {

            loadNumbers(); // بارگذاری اولیه

            setInterval(loadNumbers, 10000); // بارگذاری مجدد هر 10 ثانیه

        };