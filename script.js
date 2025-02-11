function openClass(link) {
    let win = window.open(link, '_blank');
    if (!win) {
        alert("Pop-ups are blocked! Please allow them in your browser settings.");
    }
}
