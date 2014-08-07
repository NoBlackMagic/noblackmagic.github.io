(function(w, n) {    
    w[n] = function(d) {
        var q = {},
            s = document.getElementsByTagName('script');
        
        // parse the querystring
        s[s.length-1].src.replace(/^[^\?]+\??/,'').split('&').forEach(function(p) {
            p = p.split('=');
            q[p[0]] = p.length > 1 ? decodeURIComponent(p[1]) : '';
        });
        
        // apply default values
        d = d || {};
        for (k in q) d[k] = q[k];
        
        return d;
    };
})(window, 'qs');