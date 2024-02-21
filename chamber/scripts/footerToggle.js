document.addEventListener('DOMContentLoaded', function () {
    var footer = document.querySelector('footer');
    var toggleFooter = document.createElement('a');
    toggleFooter.href = '#';
    toggleFooter.textContent = 'Toggle Footer';
    toggleFooter.className = 'toggle-footer';
    footer.parentNode.insertBefore(toggleFooter, footer.nextSibling);

    toggleFooter.addEventListener('click', function (e) {
        e.preventDefault();
        footer.classList.toggle('active');
        if (footer.classList.contains('active')) {
            toggleFooter.textContent = 'Close Footer';
        } else {
            toggleFooter.textContent = 'Toggle Footer';
        }
    });

    var closeFooterBtn = document.getElementById('closeFooterBtn');
    closeFooterBtn.addEventListener('click', function () {
        footer.classList.remove('active');
        toggleFooter.textContent = 'Toggle Footer';
    });

    var openFooterBtn = document.getElementById('openFooterBtn');
    openFooterBtn.addEventListener('click', function () {
        footer.classList.add('active');
        toggleFooter.textContent = 'Close Footer';
    });
});