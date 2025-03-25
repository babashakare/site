const users = {

    'admin': 'Soheyl1382!', // نام کاربری و رمز عبور برای کاربر admin

    'Reza': 'Shadow6666', // نام کاربری و رمز عبور برای کاربر Reza

    'Nima': 'Nimascp1144', // نام کاربری و رمز عبور برای کاربر a1

};


const userImages = {

    'admin': 'img/1.png', // مسیر تصویر برای کاربر a1

    'Reza': 'img/a2.png', // مسیر تصویر برای کاربر a2

    'Nima': 'img/a3.png'  // مسیر تصویر برای کاربر a3

};


const displayNames = {

    'admin': 'سهیل', // نام نمایشی برای کاربر admin

    'Reza': 'رضا', // نام نمایشی برای کاربر Reza

    'Nima': 'نیما',      // نام نمایشی برای کاربر a1

};


const loginForm = document.getElementById('loginForm'); // فرم ورود

const usernameInput = document.getElementById('username'); // ورودی نام کاربری

const passwordInput = document.getElementById('password'); // ورودی رمز عبور

const loginContainer = document.getElementById('loginContainer'); // بخش ورود

const mainContent = document.getElementById('mainContent'); // محتوای اصلی

const errorMessage = document.getElementById('errorMessage'); // پیام خطا

const userImage = document.getElementById('userImage'); // تصویر کاربر

const displayNameElement = document.getElementById('displayName'); // عنصر نمایش نام کاربر

const loginTimeDisplay = document.getElementById('loginTimeDisplay'); // عنصر نمایش زمان ورود


// بررسی ورود کاربر

function checkLogin() {

    const storedUsername = localStorage.getItem('username'); // دریافت نام کاربری ذخیره شده

    const storedTime = localStorage.getItem('loginTime'); // دریافت زمان ورود ذخیره شده


    if (storedUsername && storedTime) {

        const currentTime = new Date().getTime(); // زمان فعلی

        const timeElapsed = currentTime - storedTime; // محاسبه زمان گذشته


        // اگر زمان گذشته کمتر از 30 دقیقه (1800000 میلی‌ثانیه) باشد

        if (timeElapsed < 1800000) {

            loginContainer.classList.add('hidden'); // مخفی کردن بخش ورود

            mainContent.classList.remove('hidden'); // نمایش محتوای اصلی

            usernameInput.value = storedUsername; // پر کردن نام کاربری


            // نمایش تصویر کاربر

            if (userImages[storedUsername]) {

                userImage.src = userImages[storedUsername]; // تنظیم منبع تصویر

            }


            // نمایش نام کاربر

            if (displayNames[storedUsername]) {

                displayNameElement.innerText = displayNames[storedUsername]; // تنظیم نام نمایشی

            }


            // نمایش زمان ورود

            const loginTime = new Date(parseInt(storedTime)).toLocaleString('fa-IR', {

                year: 'numeric',

                month: 'numeric',

                day: 'numeric',

                hour: 'numeric',

                minute: 'numeric',

                second: 'numeric',

                hour12: false

            });

            loginTimeDisplay.innerText = `زمان ورود: ${loginTime}`; // نمایش زمان ورود

        } else {

            localStorage.removeItem('username'); // پاک کردن نام کاربری

            localStorage.removeItem('loginTime'); // پاک کردن زمان ورود

        }

    }

}


// بررسی ورود کاربر هنگام بارگذاری صفحه

checkLogin();


loginForm.addEventListener('submit', function(event) {

    event.preventDefault(); // جلوگیری از ارسال فرم

    const username = usernameInput.value; // دریافت نام کاربری

    const password = passwordInput.value; // دریافت رمز عبور


    // بررسی اینکه آیا کاربر و رمز عبور معتبر هستند

    if (users[username] && users[username] === password) {

        localStorage.setItem('username', username); // ذخیره نام کاربری

        localStorage.setItem('loginTime', new Date().getTime()); // ذخیره زمان ورود

        loginContainer.classList.add('hidden'); // مخفی کردن بخش ورود

        mainContent.classList.remove('hidden'); // نمایش محتوای اصلی


        // نمایش تصویر کاربر

        if (userImages[username]) {

            userImage.src = userImages[username]; // تنظیم منبع تصویر

        }


        // نمایش نام کاربر

        if (displayNames[username]) {

            displayNameElement.innerText = displayNames[username]; // تنظیم نام نمایشی

        }


        // نمایش زمان ورود

        const loginTime = new Date().toLocaleString('fa-IR', {

            year: 'numeric',

            month: 'numeric',

            day: 'numeric',

            hour: 'numeric',

            minute: 'numeric',

            second: 'numeric',

            hour12: false

        });

        loginTimeDisplay.innerText = `زمان ورود: ${loginTime}`; // نمایش زمان ورود

    } else {

        errorMessage.style.display = 'block'; // نمایش پیام خطا

    }

});


const searchInput = document.getElementById('search'); // ورودی جستجو

const userContainer = document.getElementById('userContainer'); // بخش کاربران

const cards = userContainer.getElementsByClassName('card'); // کارت‌های کاربران

const h2CountDisplay = document.getElementById('h2Count'); // نمایش تعداد کاربران


function updateH2Count() {

    let count = 0; // شمارش تعداد کارت‌های نمایش داده شده

    for (let i = 0; i < cards.length; i++) {

        const card = cards[i];

        if (card.style.display !== 'none') {

            count++; // افزایش شمارش اگر کارت نمایش داده شده باشد

        }

    }

    h2CountDisplay.innerText = count; // به‌روزرسانی نمایش تعداد کاربران

}


searchInput.addEventListener('input', function() {

    const searchTerm = searchInput.value.toLowerCase(); // دریافت متن جستجو

    for (let i = 0; i < cards.length; i++) {

        const card = cards[i];

        const userName = card.getElementsByTagName('h2')[0].innerText.toLowerCase(); // دریافت نام کاربر از کارت

        if (userName.includes(searchTerm)) {

            card.style.display = 'block'; // نمایش کارت اگر نام کاربر شامل متن جستجو باشد

        } else {

            card.style.display = 'none'; // مخفی کردن کارت در غیر این صورت

        }

    }

    updateH2Count(); // به‌روزرسانی تعداد کاربران

});


setInterval(updateH2Count, 10000); // به‌روزرسانی تعداد کاربران هر 10 ثانیه

updateH2Count(); // به‌روزرسانی تعداد کاربران در بارگذاری اولیه