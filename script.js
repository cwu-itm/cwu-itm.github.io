window.onload = function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const text = link.textContent;
        link.innerHTML = '';  // Clear the current text

        // Wrap each letter in a <span>
        text.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            link.appendChild(span); // Append each span to the link
        });
    });
};