// Importar os assets
var aguas1985 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1985');
var aguas1986 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1986');
var aguas1987 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1987');
var aguas1988 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1988');
var aguas1989 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1989');
var aguas1990 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1990');
var aguas1991 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1991');
var aguas1992 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1992');
var aguas1993 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1993');
var aguas1994 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1994');
var aguas1995 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1995');
var aguas1996 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1996');
var aguas1997 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1997');
var aguas1998 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1998');
var aguas1999 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas1999');
var aguas2000 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2000');
var aguas2001 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2001');
var aguas2002 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2002');
var aguas2003 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2003');
var aguas2004 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2004');
var aguas2005 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2005');
var aguas2006 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2006');
var aguas2007 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2007');
var aguas2008 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2008');
var aguas2009 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2009');
var aguas2010 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2010');
var aguas2011 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2011');
var aguas2012 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2012');
var aguas2013 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2013');
var aguas2014 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2014');
var aguas2015 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2015');
var aguas2016 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2016');
var aguas2017 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2017');
var aguas2018 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2018');
var aguas2019 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2019');
var aguas2020 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2020');
var aguas2021 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2021');
var aguas2022 = ee.Image('users/arthurcito/MapbiomasAguas/Aguas2022');
var lavrado = ee.FeatureCollection('users/arthurcito/Lavrado_AssetGEE');

// Função para recortar e calcular a área de água
function calculateWaterArea(image, year) {
  // Recortar a imagem ao polígono "lavrado"
  var clippedImage = image.clip(lavrado);
  
  // Calcular a área de água (considerando que os pixels de água têm valor 33)
  var waterArea = clippedImage.eq(33).multiply(ee.Image.pixelArea()).reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: lavrado,
    scale: 30,
    maxPixels: 1e9
  });
  
  // Converter a área de m² para km²
  var area = ee.Number(waterArea.values().get(0)).divide(1e6);
  
  return ee.Feature(null, {'year': year, 'waterArea': area});
}

// Calcular áreas para 1985 e 1986
var waterArea1985 = calculateWaterArea(aguas1985, 1985);
var waterArea1986 = calculateWaterArea(aguas1986, 1986);
var waterArea1987 = calculateWaterArea(aguas1987, 1987);
var waterArea1988 = calculateWaterArea(aguas1988, 1988);
var waterArea1989 = calculateWaterArea(aguas1989, 1989);
var waterArea1990 = calculateWaterArea(aguas1990, 1990);
var waterArea1991 = calculateWaterArea(aguas1991, 1991);
var waterArea1992 = calculateWaterArea(aguas1992, 1992);
var waterArea1993 = calculateWaterArea(aguas1993, 1993);
var waterArea1994 = calculateWaterArea(aguas1994, 1994);
var waterArea1995 = calculateWaterArea(aguas1995, 1995);
var waterArea1996 = calculateWaterArea(aguas1996, 1996);
var waterArea1997 = calculateWaterArea(aguas1997, 1997);
var waterArea1998 = calculateWaterArea(aguas1998, 1998);
var waterArea1999 = calculateWaterArea(aguas1999, 1999);
var waterArea2000 = calculateWaterArea(aguas2000, 2000);
var waterArea2001 = calculateWaterArea(aguas2001, 2001);
var waterArea2002 = calculateWaterArea(aguas2002, 2002);
var waterArea2003 = calculateWaterArea(aguas2003, 2003);
var waterArea2004 = calculateWaterArea(aguas2004, 2004);
var waterArea2005 = calculateWaterArea(aguas2005, 2005);
var waterArea2006 = calculateWaterArea(aguas2006, 2006);
var waterArea2007 = calculateWaterArea(aguas2007, 2007);
var waterArea2008 = calculateWaterArea(aguas2008, 2008);
var waterArea2009 = calculateWaterArea(aguas2009, 2009);
var waterArea2010 = calculateWaterArea(aguas2010, 2010);
var waterArea2011 = calculateWaterArea(aguas2011, 2011);
var waterArea2012 = calculateWaterArea(aguas2012, 2012);
var waterArea2013 = calculateWaterArea(aguas2013, 2013);
var waterArea2014 = calculateWaterArea(aguas2014, 2014);
var waterArea2015 = calculateWaterArea(aguas2015, 2015);
var waterArea2016 = calculateWaterArea(aguas2016, 2016);
var waterArea2017 = calculateWaterArea(aguas2017, 2017);
var waterArea2018 = calculateWaterArea(aguas2018, 2018);
var waterArea2019 = calculateWaterArea(aguas2019, 2019);
var waterArea2020 = calculateWaterArea(aguas2020, 2020);
var waterArea2021 = calculateWaterArea(aguas2021, 2021);
var waterArea2022 = calculateWaterArea(aguas2022, 2022);


// Criar uma coleção de recursos com as áreas calculadas
var waterAreas = ee.FeatureCollection([
    waterArea1985, 
    waterArea1986, 
    waterArea1987, 
    waterArea1988, 
    waterArea1989, 
    waterArea1990, 
    waterArea1991, 
    waterArea1992, 
    waterArea1993, 
    waterArea1994, 
    waterArea1995, 
    waterArea1996, 
    waterArea1997, 
    waterArea1998, 
    waterArea1999, 
    waterArea2000, 
    waterArea2001, 
    waterArea2002, 
    waterArea2003, 
    waterArea2004, 
    waterArea2005, 
    waterArea2006, 
    waterArea2007, 
    waterArea2008, 
    waterArea2009, 
    waterArea2010, 
    waterArea2011, 
    waterArea2012, 
    waterArea2013, 
    waterArea2014, 
    waterArea2015, 
    waterArea2016, 
    waterArea2017, 
    waterArea2018, 
    waterArea2019, 
    waterArea2020, 
    waterArea2021, 
    waterArea2022
]);


// Visualizar os resultados
print(waterAreas);

// Criar um gráfico de áreas de água
var chart = ui.Chart.feature.byFeature(waterAreas, 'year', 'waterArea')
  .setChartType('ColumnChart')
  .setOptions({
    title: 'Área de Água por Ano',
    hAxis: {title: 'Ano'},
    vAxis: {title: 'Área de Água (km²)'},
    legend: {position: 'none'}
  });
print(chart);

// Adicionar as imagens recortadas ao mapa
Map.addLayer(aguas1985.clip(lavrado).eq(33), {min: 0, max: 1, palette: ['blue']}, 'Aguas 1985 Clip');
Map.addLayer(aguas2022.clip(lavrado).eq(33), {min: 0, max: 1, palette: ['blue']}, 'Aguas 1986 Clip');

// Centrar o mapa no polígono "lavrado"
Map.centerObject(lavrado, 8);

// Exportar os resultados para o Google Drive
Export.table.toDrive({
  collection: waterAreas,
  description: 'WaterAreasLavrado',
  fileFormat: 'CSV'
});
