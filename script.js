// Inhalte für unbewusste und bewusste Reaktionen
const unwissendTexts = [
    "Verunsicherung: Du beginnst, an dir selbst zu zweifeln und verlierst Klarheit.",
    "Empathie: Du versuchst, den Narzissten zu verstehen, auch auf eigene Kosten.",
    "Kompromisse: Du gibst nach, um Konflikte zu vermeiden, oft gegen deine Werte.",
    "Wutanfälle: Deine Reaktionen werden unkontrolliert, was die Situation verschärft.",
    "Isolation: Du ziehst dich zurück und verlierst wichtige Verbindungen."
];

const wissendTexts = [
    "Ruhe bewahren: Emotionen kontrollieren, um keine Angriffsfläche zu bieten.",
    "Grenzen setzen: Klar und sachlich kommunizieren, was akzeptabel ist.",
    "Fakten nutzen: Manipulationen entlarven, ohne emotional zu reagieren.",
    "Selbstfürsorge: Eigene Bedürfnisse priorisieren und Energie tanken.",
    "Hilfe holen: Unterstützung suchen, um langfristige Lösungen zu finden."
];

// Funktion zum Anzeigen der Inhalte
function showContent(title, text) {
    const contentDisplay = document.getElementById('content-display');
    const contentTitle = document.getElementById('content-title');
    const contentText = document.getElementById('content-text');

    contentTitle.textContent = title;
    contentText.textContent = text;
    contentDisplay.style.display = 'block';
}
