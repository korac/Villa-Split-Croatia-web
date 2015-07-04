  google.load('visualization', '1.0', {'packages': ['map']});
  google.setOnLoadCallback(drawMap);

  function drawMap(){
    var data = new google.visualization.arrayToDataTable([
        ['Lat', 'Long', 'name'],
        [43.5065771, 16.4865765, 'Your accommodation']
        ], false);
    

    var options = {
        mapType: 'normal',
        zoomLevel: 15,
        height: 500, 
        width: 900
    };

    var map = new google.visualization.Map(document.getElementById('locationMap'));
    map.draw(data, options);
    };