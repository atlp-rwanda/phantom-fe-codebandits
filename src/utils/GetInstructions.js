import L from 'leaflet';
function GetInstructions(instr, coord) {
  var formatter = new L.Routing.Formatter();
  var instrPts = {
    type: 'FeatureCollection',
    features: []
  };
  for (let i=0;i<instr.length; i++) {
      let g = {
          type: "Point",
          "coordinates": [coord[instr[i].index].lng, coord[instr[i].index].lat]
      };
      let p = {
          "instruction": formatter.formatInstruction(instr[i])
      }
      instrPts.features.push({
        "geometry": g,
        "type": "Feature",
        "properties": p
      });

  }
  return instrPts
}

export default GetInstructions;
