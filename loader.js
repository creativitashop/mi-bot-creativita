(function() {
    var d = document,
        c = d.createElement('div'),
        f = d.createElement('iframe'),
        b = d.createElement('button'),
        img = d.createElement('img');

    var equipo = [
        {f: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4EJO6iV4Z-Itf2sYYwuqldfLYxibew0bjGGlCatlNCAdjLQvWU7RY4RWVkV8QybdiAmqGb829UIE56Zir7sj7lvafx8v09VoSS9sU5XLHh6lvzBKmBokxtngaYIMxFAn0U3V4ZM23rZZsyKYwKM8nA7_ZVYMJ9AEqc8dowQUzE78mM8Rhr2klWIdISk5y/s1600/StockCake-Friendly-Call-Center_1723420268.webp"},
        {f: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeWthUdXMC5y_NwxwBcLYnFHzGbWkGjTEKQWX2cv9oH7wiN4OcEKd0gE2B3Z6Y_Q-u21Jsndl3sHd3pn63aEFYg6SCk7pdDjXNI9gCWdwwnDjmct7iZQriFPSDtlijXEZpPIIEQyi5EgCrFwwZou0Ppj6Tq-hIayAgU6RsfxDIi85XKY7Ixmk8oMa_BrKd/s1600/ce7e99b2-agent--e1544463165980.webp"},
        {f: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqDDq9ZB6967dWethT8kzi04kdlhpZ7_fGE5kKn9ATOIKUVqU13aklhLkVnO_HiJwSyuxIOvp-DWHj1xbUKJzsewX0UDroC6eQ6JhYxkzlcXTxY1JATiTfMdLznAXrl8GEvyCimGSGY9WGjRgEqIimkX2V120Yti0cqoJ8Fn7cn12j0C6hMIofPdtg95c/s1600/callCenter.jpg"},
        {f: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdjwIeoO7YnjtpkXiXxFKUiSy8ssQGvsD85vXebU4buDEXgWV0_6LwQzXAO2172qBVamwBLKczRRWpP4MJOGFm6ImQ7WMVK0ghkQZNupB-__Upf3e0j2FInTxeGOs7cZfGgGnBH5WeQ0tVOQOfZrxXMJKpeT4bXz8VHjKEsWQ6MAQJspN43SU_fw54uo7N/s1600/telemarketing_002.jpg"},
        {f: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj8UIYW0ose63ONacNpqFaV35lkGDDm-PYj_kWP7D_RIoxFUAe2bLr0d9L3lB-I9LDYFl6TmyrRMu557lQXWM-DU329joWK73qKPeS9kUmmBbXv8hUhETNKVBZG7HHALhOs_8AIj9zKj8tr6UZl7FvF18jr-jCF-XSN-GuZGSR1YFtQuzBhKB068YXv3o8/s1600/que-es-una-diadema-inalambrica.jpg"}
    ];

    var r = equipo[Math.floor(Math.random() * equipo.length)];

    c.id = 'bot-contenedor-final';
    c.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:9999999;';

    f.id = 'chat-f';
    f.src = 'https://creativitashop.github.io/mi-bot-creativita/';
    f.style.cssText = 'width:360px;height:550px;border:none;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.4);display:none;background:white;margin-bottom:15px;';

    img.src = r.f;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;';

    b.style.cssText = 'background:#D4AF37;border:4px solid #fff;border-radius:50%;width:80px;height:80px;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,0.3);overflow:hidden;padding:0;transition:transform 0.3s;';
    b.appendChild(img);

    b.onclick = function() {
        var el = d.getElementById('chat-f');
        if (el.style.display === 'none' || el.style.display === '') {
            el.style.display = 'block';
            b.innerHTML = '<span style="color:white;font-size:35px;font-family:Arial;">✕</span>';
        } else {
            el.style.display = 'none';
            b.innerHTML = '';
            b.appendChild(img);
        }
    };

    c.appendChild(f);
    c.appendChild(b);
    d.body.appendChild(c);
})();
