// script.js

document.addEventListener('DOMContentLoaded', function () {
    var toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var additionalText = this.nextElementSibling;

            if (additionalText.style.display === 'block') {
                additionalText.style.display = 'none';
                this.textContent = 'Read More';
            } else {
                additionalText.style.display = 'block';
                this.textContent = 'Read Less';
            }
        });
    });
});