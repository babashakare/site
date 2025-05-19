function validateForm() {
    const form = document.getElementById('myForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    for (let input of inputs) {
        if (!input.value) {
            alert('لطفاً همه کادرهای الزامی را پر کنید.');
            return false; // جلوگیری از ارسال فرم
        }
    }
    return true; // اجازه ارسال فرم
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    if (validateForm()) {
        setTimeout(() => {
            this.reset(); // ریست کردن فرم
            // پنهان کردن فیلد کد معرف به محض ریست فرم
            updateInviteCodeField();
        }, 1000); // تاخیر ۱ ثانیه‌ای برای مشاهده ارسال
    } else {
        event.preventDefault(); // جلوگیری از ارسال فرم در صورت عدم اعتبار
    }
});

const enableInviteCodeCheckbox = document.getElementById('enableInviteCode');
const inviteCodeField = document.getElementById('inviteCodeField');

function updateInviteCodeField() {
    if (enableInviteCodeCheckbox.checked) {
        inviteCodeField.style.display = 'block';
    } else {
        inviteCodeField.style.display = 'none';
    }
}

// فراخوانی اولیه برای تنظیم نمایش فیلد کد معرف در بارگذاری صفحه
updateInviteCodeField();

// بروزرسانی نمایش فیلد هنگام تغییر چک‌باکس
enableInviteCodeCheckbox.addEventListener('change', updateInviteCodeField);