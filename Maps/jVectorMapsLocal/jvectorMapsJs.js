$(function(){
  $('#map').vectorMap({map: 'it_merc',
	serie: {
		regions: [{
			scale: ['#C8EEFF', '#0071A4'],
			normalizeFunction: 'polynomial'
		}]
	}});
});