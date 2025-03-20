        const toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', () => {

            document.body.classList.toggle('dark');

            document.body.classList.toggle('light');


            // تغییر متن دکمه بر اساس حالت

            if (document.body.classList.contains('dark')) {

                toggleButton.innerText = 'تغییر به حالت روشن';

            } else {

                toggleButton.innerText = 'تغییر به حالت تاریک';

            }

        });