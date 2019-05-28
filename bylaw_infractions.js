document.addEventListener("DOMContentLoaded", function dashboard() {
    //Set up loading spinner
     var opts = {
         lines: 13,
         length: 22,
         width: 9,
         radius: 30,
         corners: 1,
         rotate: 2,
         direction: 1,
         speed: 1,
         trail: 60,
         shadow: false,
         hwaccel: false,
         className: 'spinner',
         zIndex: 2e9,
         top:'17%',
         left: '50%'
     };

     Highcharts.chart('my_chart', {

        title: {
          text: 'Rueda de la Paz'
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
          name: 'Relaciones expresiones',
          dataLabels: {
            color: '#333',
            textPath: {
              enabled: true,
              attributes: {
                dy: 5
              }
            },
            distance: 10
          },
          size: '95%'
        }],

        
      
      });



      var categories = [
        'Amor',
        'Comunidad',        
        'Convivencia',
        'Démas personas',
        'Derecho al espacio público',
        'Derechos sociales', 
        'Educación',
        'Empleo', 
        'Espiritualidad',
        'Familia/Hogar',
        'Libertad',         
        'Naturaleza',        
        'No discriminación',
        'No violencia',  
        'Perdón',
        'Reconciliación',
        'Reconocimento',
        'Respeto',
        'Salud',
        'Tradiciones familiares', 
        'Tranquilidad',
        'Vecinos/Amigos',
        'Parques/Zonas verdes',];
      
      Highcharts.chart('my_chart2', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Palabras asociadas a la Paz'
        },
        subtitle: {
          text: 'Distribución po sexo'
        },
        xAxis: [{
          categories: categories,
          reversed: false,
          labels: {
            step: 1
          }
        }, { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: categories,
          linkedTo: 0,
          labels: {
            step: 1
          }
        }],
        yAxis: {
          title: {
            text: null
          },
          labels: {
            formatter: function () {
              return Math.abs(this.value) + '%';
            }
          }
        },
      
        plotOptions: {
          series: {
            stacking: 'normal',
          }
        },
      
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '% ' + this.point.category + '</b><br/>' +
              ':' + Highcharts.numberFormat(Math.abs(this.point.y), 2);
          }
        },
   
        series: [{
          name: 'Hombre',
          data: [
            -3.1, -0.8, -3.6, -0.1,
            -0.2, -1.0, -1.3, -0.2, 
            -1.3, -2.5, -2.9, -1.6, 
            -1.3, -2.9, -1.9, -1.4, 
            -0.4, -4.7, -1.3, -0.2,
            -5.1, -0.6, -0.6
          ],
          
        }, {
          name: 'Mujer',
          data: [
            5.2, 0.9, 4.8, 0.3, 0.5,
            1.4, 1.4, 0.2, 2.6, 4.1,
            4.5, 2.8, 2.5, 4.4, 3.6,
            2.7, 0.6, 7.0, 1.3, 0.3,
            7.8, 0.7, 0.9
          ],
          color:
          '#c39bd3'
        }],

        color: ['#FF0000','#ffffff']

      });

// Include this snippet after loading Highcharts and before Highcharts.chart is executed.
Highcharts.seriesTypes.wordcloud.prototype.deriveFontSize = function (relativeWeight) {
  var maxFontSize = 15;
  var minFontSize = 10;
 // Will return a fontSize between 0px and 25px.
 return Math.floor(minFontSize /* * relativeWeight*/);
};

      Highcharts.chart('my_chart3', {
        series: [{
          type: 'wordcloud',
          data: [
          {name:'tranquilidad',weight:278},
          {name:'armonía',weight:75},
          {name:'amor',weight:51},
          {name:'respeto',weight:36},
          {name:'convivencia',weight:32},
          {name:'libertad',weight:30},
          {name:'paz',weight:28},
          {name:'familia',weight:26},
          {name:'vivir',weight:25},
          {name:'tener',weight:22},
          {name:'demás',weight:21},
          {name:'igualdad',weight:20},
          {name:'mismo',weight:19},
          {name:'personas',weight:17},
          {name:'tolerancia',weight:17},
          {name:'tranquilo',weight:16},
          {name:'no violencia',weight:15},
          {name:'música',weight:14},
          {name:'equidad',weight:13},
          {name:'bien',weight:13},
          {name:'Díos',weight:11},
          {name:'seguridad',weight:11},
          {name:'sociedad',weight:11},
          {name:'felicidad',weight:10},
          {name:'no guerra',weight:9},
          {name:'reconciliación',weight:9},
          {name:'tranquila',weight:8},
          {name:'comunidad',weight:8},
          {name:'social',weight:8},
          {name:'conflicto',weight:7},
          {name:'unión',weight:7},
          {name:'equilibrio',weight:7},
          {name:'convivir',weight:7},
          {name:'sana',weight:7},
          {name:'dormir',weight:6},
          {name:'calma',weight:6},
          {name:'emocional',weight:5},
          {name:'naturaleza',weight:5},
          {name:'oportunidades',weight:5},
          {name:'mundo',weight:5},
          {name:'justicia',weight:5},
          {name:'solidaridad',weight:5},
          {name:'plenitud',weight:5},
          {name:'entorno',weight:5}
          ],
          name: 'Frecuencia'
        }],
        title: {
          text: 'Nube de palabras - Narativas de Paz USC'
        }
      });


   
     var target = document.getElementById("spinner");
     var spinner = new Spinner(opts).spin(target);
     
     queue()
            .defer(d3.json, "data/Edmonton2.json") //neighbourhoodsGejson
            .defer(d3.json, "data/dataUSC.json")   //datajson
            .await(renderCharts);
  
     function renderCharts(error, neighbourhoodsGejson, dataUSC) {
 
         if(error) throw error;
         
         //cleaned data
         var data  = dataUSC.data;
         
         //Crossfilter instance
         var ndx = crossfilter(data);
         var all = ndx.groupAll();
         
         
        //Define Dimensions
         var sexoDim           = ndx.dimension(function(d) { return d['sexo'];}),
             cargoDim          = ndx.dimension(function(d) { return d['cargo'];}),
             facultadDim       = ndx.dimension(function(d) { return d['facultad']}),
             programaDim       = ndx.dimension(function(d) { return d['programa']});
        
        
        //Define groups

         var sexoGroup           = sexoDim.group(),
             cargoGroup          = cargoDim.group(),
             facultadGroup       = facultadDim.group(),
             programaGroup       = programaDim.group();

        //Define charts
         var sexoChart = dc.rowChart("#row-chart1");
         var cargoChart = dc.rowChart("#row-chart2");
         var facultadChart = dc.rowChart("#bar-chart");


        //Charts

        sexoChart
            .dimension(sexoDim)
            .group(sexoGroup);

        cargoChart
            .dimension(cargoDim)
            .group(cargoGroup);

        facultadChart
            .dimension(facultadDim)
            .group(facultadGroup);



         dc.renderAll();
 
        
 
     }; //renderCharts
 })//document.addEventListener
      
 