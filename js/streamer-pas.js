        // تابع برای بررسی بزرگ‌ترین عدد

        function checkMaxNumber() {

            fetch('https://raw.githubusercontent.com/babashakare/site/refs/heads/master/streamer/babamoji')

                .then(response => response.text())

                .then(data => {

                    const lines = data.split('\n').slice(0, 20); // فقط 20 خط اول

                    let maxNumber = -Infinity;

                    let maxIndex = -1;


                    lines.forEach((line, index) => {

                        const number = parseInt(line.trim(), 10);

                        if (!isNaN(number) && number > maxNumber) {

                            maxNumber = number;

                            maxIndex = index + 1; // برای شماره خط (1-indexed)

                        }

                    });


                    let output;

                    if (maxIndex === 1) {

                        output = "(سلام)";

                    } else if (maxIndex === 2) {

                        output = "(سلام2)";

                    } else if (maxIndex === 3) {

                        output = "(سلام3)";

                    } else if (maxIndex === 4) {

                        output = "(سلام4)";

                    } else if (maxIndex === 5) {

                        output = "(سلام5)";

                    } else if (maxIndex === 6) {

                        output = "(سلام6)";

                    } else if (maxIndex === 7) {

                        output = "(سلام7)";

                    } else if (maxIndex === 8) {

                        output = "(سلام8)";

                    } else if (maxIndex === 9) {

                        output = "(سلام9)";

                    } else if (maxIndex === 10) {

                        output = "(سلام10)";

                    } else if (maxIndex === 11) {

                        output = "(سلام11)";

                    } else if (maxIndex === 12) {

                        output = "(سلام12)";

                    } else if (maxIndex === 13) {

                        output = "(سلام13)";

                    } else if (maxIndex === 14) {

                        output = "(سلام14)";

                    } else if (maxIndex === 15) {

                        output = "(سلام15)";

                    } else if (maxIndex === 16) {

                        output = "(سلام16)";

                    } else if (maxIndex === 17) {

                        output = "(سلام17)";

                    } else if (maxIndex === 18) {

                        output = "(سلام18)";

                    } else if (maxIndex === 19) {

                        output = "(سلام19)";

                    } else if (maxIndex === 20) {

                        output = "(سلام20)";

                    }


                    document.getElementById('result').innerText = output;

                })

                .catch(error => {

                    console.error('Error fetching data:', error);

                    document.getElementById('result').innerText = 'خطا در دریافت داده‌ها.';

                });

        }


        // اجرای تابع به محض بارگذاری صفحه

        window.onload = checkMaxNumber;