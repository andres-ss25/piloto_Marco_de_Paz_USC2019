Highcharts.chart('container', {

  title: {
    text: 'Highcharts Dependency Wheel'
  },

  series: [{
    keys: ['from', 'to', 'weight'],
    data: [
      ['Paz', 'Tranquilidad', 1],
      ['Paz', 'Armonía', 1],
      ['Paz', 'Amor', 1],
      ['Paz', 'Respeto', 1],
      ['Paz', 'Convivencia', 1],
      ['Paz', 'Libertad', 1],
      ['Estar en', 'Tranquilidad', 1],
      ['Estar en', 'Armonía', 1],
      ['Estar en', 'Familia', 1],
      ['Vivir en', 'Armonía', 1],
      ['Vivir en', 'Tranquilidad', 1],
      ['Tranquilidad', 'Demás', 1],
      ['Tranquilidad', 'Uno mismo', 1],
      ['Convivencia', 'Demás', 1],
      ['Convivencia', 'Naturaleza', 1],
      ['Respeto','Demás',1]
    ],
    type: 'dependencywheel',
    name: 'Dependency wheel series',
    dataLabels: {
      color: '#333',
      textPath: {
        enabled: true,
        attributes: {
          dy: 5
        }
      },
      distance: 5
    },
    size: '80%'
  }]

});