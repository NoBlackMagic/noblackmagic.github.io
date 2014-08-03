
(function(){
    
    // script's querystring to config
    var q = {};
    var s = document.getElementsByTagName('script');
    s[s.length-1].src.replace(/^[^\?]+\??/,'').split('&').forEach(function(part) {
        part = part.split('=');
        if (part.length === 2) {
            q[part[0]] = decodeURIComponent(part[1]);
        } else {
            q[part[0]] = '';
        }
    });
    
    // defaults
    q.style = q.style || '';
    
    var html =  '<div id="mc_embed_signup" style="' + q.style + '">' +
                    '<form action="http://noblackmagic.us1.list-manage.com/subscribe/post?u=c0e8c260bf69b2d7c5238d3b0&amp;id=cd2f53a5ca" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>' +
                        '<label for="mce-EMAIL">Keep in touch with us!</label>' +
                        '<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>' +
                        '<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background:#39c; border:#39c; font-size:.9em;font-weight:normal">' +
                        '<div style="position: absolute; left: -5000px;">' +
                            '<input type="text" name="b_c0e8c260bf69b2d7c5238d3b0_cd2f53a5ca" tabindex="-1" value="">' +
                        '</div>' +
                    '</form>' +
                '</div>';
    
    document.write(html);
})();
