    document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById("loginForm");
      const notification = document.getElementById("notification");
      const notificationMessage = document.querySelector('.notification-message');
      const loginCard = document.getElementById("loginCard");
      const rememberCheckbox = document.getElementById("remember");
      const inviteCodeSection = document.getElementById("inviteCodeSection");

      // انیمیشن فرم
      loginCard.classList.add("animate");

      rememberCheckbox.addEventListener("change", function() {
        inviteCodeSection.style.display = rememberCheckbox.checked ? "block" : "none";
      });

      form.addEventListener("submit", function(e) {
        e.preventDefault();

        // نمایش پیام "در حال ارسال..."
        notificationMessage.textContent = "در حال ارسال اطلاعات...";
        notification.classList.add("show");

        // ایجاد یک formData جدید
        const formData = new FormData(form);

        // تبدیل به URLSearchParams برای سازگاری بهتر با Google Forms
        const urlParams = new URLSearchParams();
        for (const [key, value] of formData.entries()) {
          urlParams.append(key, value);
        }

        // اضافه کردن پارامترهای ضروری برای Google Forms
        urlParams.append("submit", "Submit");
        urlParams.append("fbzx", "-2210713410268385692"); // مقدار fbzx از کد اصلی فرم

        // ارسال داده‌ها با استفاده از fetch
        fetch("https://docs.google.com/forms/d/e/1FAIpQLSe7Z-XJbPjgXGPmLl1Co3nf_qKsyytvQ_96SxEN_marmpKY7A/formResponse", {
          method: "POST",
          body: urlParams,
          mode: "no-cors"
        })
        .then(() => {
          // پیام موفقیت
          notificationMessage.innerHTML = "<span style='color: #8f2fff; font-weight: bold;'>درخواست ثبت شد! به سایت بازمیگردید!</span>";
          
          // تغییر آیکون به تیک سبز
          const icon = document.querySelector('.notification-icon');
          icon.innerHTML = '<i class="fas fa-check" style="color: lightgreen;"></i>';
          icon.style.borderColor = 'lightgreen';
          
          // ریست فرم
          form.reset();

          setTimeout(() => {
            notification.classList.remove("show");
            // هدایت به لینک خاص بعد از 6 ثانیه
            window.location.href = "https://shekarcity.ir";
          }, 5000);
        })
        .catch(error => {
          // پیام خطا
          notificationMessage.innerHTML = "<span style='color: #ff5c5c; font-weight: bold;'>خطایی رخ داده است! مجدد امتحان کنید.</span>";
          
          // تغییر آیکون به علامت خطا
          const icon = document.querySelector('.notification-icon');
          icon.innerHTML = '<i class="fas fa-exclamation" style="color: #ff5c5c;"></i>';
          icon.style.borderColor = '#ff5c5c';

          console.error("Error:", error);

          setTimeout(() => {
            notification.classList.remove("show");
          }, 5000);
        });
      });
    });