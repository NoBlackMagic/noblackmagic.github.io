/**
 * Facebook SDK Loader
 */
(function(){
    
    var appId = window.qs({appId:null}).appId;
    
    if (!appId) {
        return;
    }

    document.write(
        '<div id="fb-root"></div>' +
        '<script>(function(d, s, id) {' +
          'var js, fjs = d.getElementsByTagName(s)[0];' +
          'if (d.getElementById(id)) return;' +
          'js = d.createElement(s); js.id = id;' +
          'js.src = "//connect.facebook.net/it_IT/sdk.js#xfbml=1&appId=' + appId + '&version=v2.0";' +
          'fjs.parentNode.insertBefore(js, fjs);' +
        '}(document, "script", "facebook-jssdk"));</script>'
    );

})();
