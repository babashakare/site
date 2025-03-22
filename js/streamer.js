// تابع برای دریافت داده‌ها و پیدا کردن بزرگ‌ترین عدد

function fetchData() {

    const url = 'https://raw.githubusercontent.com/babashakare/site/refs/heads/master/streamer/babamoji';


    fetch(url)

        .then(response => response.text())

        .then(data => {

            const lines = data.split('\n');

            let maxNumber = -1;

            let maxLine = -1;


            // پیام‌های مربوط به هر خط

            const messages = [
                        "Baba Moji",
                        "Pazangaming",
                        "MRmohsenASL",
                        "BIG Mani",
                        "خط 5",
                        "خط 6",
                        "خط 7",
                        "خط 8",
                        "خط 9",
                        "خط 10",
                        "خط 11",
                        "خط 12",
                        "خط 13",
                        "خط 14",
                        "خط 15",
                        "خط 16",
                        "خط 17",
                        "خط 18",
                        "خط 19",
                        "خط 20"
                    ];


            // بررسی خطوط از 1 تا 20

            for (let i = 0; i < 20; i++) {

                if (i < lines.length) {

                    const number = parseInt(lines[i], 10);

                    if (!isNaN(number) && number > maxNumber) {

                        maxNumber = number;

                        maxLine = i; // شماره خط از 0 شروع می‌شود

                    }

                }

            }


            // نمایش نتیجه

            const numberDisplay = document.getElementById('numberDisplay');

            const messageDisplay = document.getElementById('messageDisplay');

            if (maxLine !== -1) {

                numberDisplay.innerHTML = `${maxNumber}`;

                messageDisplay.innerHTML = `${messages[maxLine]}`;

            } else {

                numberDisplay.innerHTML = "هیچ عدد معتبری پیدا نشد.";

                messageDisplay.innerHTML = "";

            }

        })

        .catch(error => {

            console.error('خطا در دریافت داده‌ها:', error);

        });

}


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


// بارگذاری هر دو تابع هنگام بارگذاری صفحه

window.onload = function() {

    fetchData(); // بارگذاری داده‌ها

    loadNumbers(); // بارگذاری اعداد

    setInterval(loadNumbers, 10000); // بارگذاری مجدد هر 10 ثانیه

};
        function checkNumbers() {

            const url = "https://raw.githubusercontent.com/babashakare/site/refs/heads/master/streamer/babamoji";


            fetch(url)

                .then(response => response.text())

                .then(data => {

                    const lines = data.split('\n');

                    let maxNumber = null;

                    let lineNumber = null;


                    for (let i = 0; i < Math.min(20, lines.length); i++) {

                        const number = parseInt(lines[i], 10);

                        if (!isNaN(number)) {

                            if (maxNumber === null || number > maxNumber) {

                                maxNumber = number;

                                lineNumber = i + 1; // Line number (starts from 1)

                            }

                        }

                    }


                    const resultDiv = document.getElementById('result');

                    const image = document.getElementById('impam'); // Updated ID


                    // Clear previous content

                    resultDiv.innerHTML = ''; // Clear previous images


                    if (lineNumber === 1) {

                        image.src = 'img/Sbabamoji.webp';

                    } else if (lineNumber === 2) {

                        image.src = 'img/spazangaming.png';

                    } else if (lineNumber === 3) {

                        image.src = 'img/SMRmohsenASL.png';

                    } else if (lineNumber === 4) {

                        image.src = 'img/SBIGMani.png';

                    } else {

                        resultDiv.innerText = 'عدد بزرگ‌ترین در خطوط ۱ تا ۴ نیست.';

                        image.src = ''; // Clear image if not in lines 1-4

                    }


                    if (image.src) {

                        image.style.display = 'block'; // Show the image

                        resultDiv.appendChild(image); // Append image to resultDiv

                    }

                })

                .catch(error => {

                    console.error('Error fetching the data:', error);

                });

        }


        // Automatically check every 10 seconds

        setInterval(checkNumbers, 10000);


        // Initial execution

        checkNumbers();
