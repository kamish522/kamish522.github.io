async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('app'),
        {
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer({
        customization: [
    // Делаем прозрачными все геометрии водных объектов.
    {
      tags: {
        all: ['water']
      },
      elements: 'geometry',
      stylers: [
        {
          opacity: 0
        }
      ]
    },
    // Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
    {
      tags: {
        any: ['poi', 'transit_location']
      },
      elements: 'label.text.fill',
      stylers: [
        {
          color: '#0000DD'
        }
      ]
    }
  ]
    }));
}

initMap();
