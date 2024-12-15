document.getElementById('homeLink').addEventListener('click', function (e) {
    try {
        window.location.href = this.href;
    } catch (error) {
        console.error('Navigation error:', error);
    }
});

// Optional: Add some interactive algebra-themed elements
function createMathBackground() {
    const symbols = ['x', 'y', '+', '-', '∫', '√', '∑', '∏', '='];
    const container = document.body;

    function createSymbol() {
        const symbol = document.createElement('div');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.position = 'fixed';
        symbol.style.fontSize = `${Math.random() * 20 + 10}px`;
        symbol.style.color = 'rgba(0,0,0,0.1)';
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.top = `${Math.random() * 100}%`;
        symbol.style.zIndex = '-1';
        container.appendChild(symbol);

        const animation = symbol.animate([
            { transform: 'translateY(0)' },
            { transform: `translateY(${window.innerHeight}px)` }
        ], {
            duration: Math.random() * 10000 + 5000,
            iterations: Infinity,
            easing: 'linear'
        });
    }

    for (let i = 0; i < 50; i++) {
        createSymbol();
    }
}

createMathBackground();
