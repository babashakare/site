    // انتخاب المان‌ها

    const modal = document.getElementById("myModal");

    const modalText = document.getElementById("modalText");

    const openModalButton = document.getElementById("openModal");

    const closeModalButton = document.getElementsByClassName("close")[0];


    // تابع برای بارگذاری متن از فایل متنی

    async function loadText() {

        try {

            const response = await fetch("gif/test.js");

            if (!response.ok) {

                throw new Error("خطا در بارگذاری فایل");

            }

            const text = await response.text();

            modalText.innerText = text; // جایگزینی متن

        } catch (error) {

            console.error("خطا در بارگذاری محتوا:", error);

            modalText.innerText = "STREAMERPLAS";

        }

    }


    // نمایش پاپ آپ با محتوای فایل متنی

    openModalButton.addEventListener("click", async () => {

        await loadText(); // بارگذاری متن

        modal.style.display = "block"; // نمایش پاپ آپ

    });


    // پنهان کردن پاپ آپ وقتی کاربر روی دکمه بستن کلیک می‌کند

    closeModalButton.onclick = function() {

        modal.style.display = "none";

    }


    // پنهان کردن پاپ آپ وقتی کاربر در هر جای دیگر کلیک می‌کند

    window.onclick = function(event) {

        if (event.target == modal) {

            modal.style.display = "none";

        }

    }