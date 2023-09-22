var colocação = 6;

switch (colocação) {
  case 1:
    console.log("primeiro lugar")
    break;
  case 2:
    console.log("segundo lugar")
    break;
  case 3:
    console.log("terceiro lugar")
    break;
  case 4: case 5: case 6:
    console.log("prémio por participaçaão")
    break;
    default:
        console.log(`essa colocação ${colocação} não está na classificação `)
    break;
}
