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
        }, 1000); // تاخیر ۱ ثانیه‌ای برای مشاهده ارسال
    } else {
        event.preventDefault(); // جلوگیری از ارسال فرم در صورت عدم اعتبار
    }
});
