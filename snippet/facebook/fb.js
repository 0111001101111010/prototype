var FB = require('fb');
FB.setAccessToken('CAAJ6qO4LvY4BAHfEk3ztiy6SL2iiOZBQ8gEn1ziQftVqwtN1UvFxQ3IfuxaJ4j7HOS9iHfLO8OppL541p1l6gTLh7tRTbE3Dqbd381m4HIe1AkaxIFHP0EasGRTOMBGU9HEBfNL30VR5UOSZAYbZAd2ZCDrL46nQY0e51Ip1c2zE1JkPbODQhI68RJ5pvAQZD');

FB.api('oauth/access_token', {
    client_id: 'app_id',
    client_secret: 'app_secret',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    var accessToken = res.access_token;
});

var body = 'My first post using facebook-node-sdk';
FB.api('me/feed', 'post', { message: body}, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});
