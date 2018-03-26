//googleマップの埋め込み
//callbackで呼ぶため、グローバルファンクションにする
var googleMapsInit = function () {
	console.log('start googleMapsInit');
	var settings = [
		{
			elementId : 'access-map-nakano',
			lat : 35.705003,
			lng : 139.669196
		},
		{
			elementId : 'access-map-shinbashi',
			lat : 35.661968,
			lng : 139.754318
		}

	];

	for(var i=0;i<settings.length;i++) {
		var canvas = document.getElementById(settings[i]['elementId']);
		console.log(canvas);
		var latlng = new google.maps.LatLng(settings[i]['lat'], settings[i]['lng']);
		var markerLatlng = new google.maps.LatLng(settings[i]['lat'], settings[i]['lng']);
		console.log(latlng);
		var mapOption = {
			zoom: 15,
			center: latlng,
			scrollwheel: false
		};
		//地図
		var map = new google.maps.Map(canvas, mapOption);
		//マーカー
		var marker = new google.maps.Marker({
			map: map,
			position: markerLatlng
		});
	}

};