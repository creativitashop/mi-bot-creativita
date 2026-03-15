(function() {
    var div = document.createElement('div');
    div.id = 'bot-definitivo';
    div.style.cssText = 'position:fixed;bottom:30px;left:20px;z-index:9999999;';
    div.innerHTML = '<iframe id="chat-f" src="https://creativitashop.github.io/mi-bot-creativita/" style="width:360px;height:520px;border:none;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.5);display:none;background:white;margin-bottom:15px;"></iframe>' +
                    '<button id="btn-c" style="background:#D4AF37;border:none;border-radius:50%;width:80px;height:80px;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;color:white;font-size:40px;">💬</button>';
    document.body.appendChild(div);

    document.getElementById('btn-c').onclick = function() {
        var f = document.getElementById('chat-f');
        f.style.display = (f.style.display === 'none' || f.style.display === '') ? 'block' : 'none';
    };
})();
