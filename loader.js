(function() {
    var d = document,
        c = d.createElement('div'),
        f = d.createElement('iframe'),
        b = d.createElement('button');

    c.id = 'bot-contenedor-final';
    c.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:9999999;';

    f.id = 'chat-f';
    f.src = 'https://creativitashop.github.io/mi-bot-creativita/';
    // Altura subida a 600px para que quepa la cabecera con la foto
    f.style.cssText = 'width:360px;height:600px;border:none;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.5);display:none;background:white;margin-bottom:15px;';

    // Botón dorado con el icono de chat
    b.innerHTML = '💬';
    b.style.cssText = 'background:#D4AF37;border:none;border-radius:50%;width:70px;height:70px;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;color:white;font-size:35px;transition:0.3s;';

    b.onclick = function() {
        var el = document.getElementById('chat-f');
        if (el.style.display === 'none' || el.style.display === '') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    };

    // Efecto de hover para el botón
    b.onmouseover = function() { this.style.transform = 'scale(1.05)'; };
    b.onmouseout = function() { this.style.transform = 'scale(1)'; };

    c.appendChild(f);
    c.appendChild(b);
    d.body.appendChild(c);
})();
