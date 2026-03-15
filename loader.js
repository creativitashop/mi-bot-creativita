(function() {
    var d = document,
        c = d.createElement('div'),
        f = d.createElement('iframe'),
        b = d.createElement('button');

    c.id = 'bot-contenedor-final';
    c.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:9999999;';

    f.id = 'chat-f';
    f.src = 'https://creativitashop.github.io/mi-bot-creativita/';
    // LE SUBÍ LA ALTURA A 650 PARA QUE NO SE VEA MOCHO
    f.style.cssText = 'width:360px;height:650px;border:none;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.5);display:none;background:white;margin-bottom:15px;';

    b.innerHTML = '💬';
    b.style.cssText = 'background:#D4AF37;border:none;border-radius:50%;width:75px;height:75px;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;color:white;font-size:35px;';

    b.onclick = function() {
        var el = document.getElementById('chat-f');
        el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
    };

    c.appendChild(f);
    c.appendChild(b);
    d.body.appendChild(c);
})();
