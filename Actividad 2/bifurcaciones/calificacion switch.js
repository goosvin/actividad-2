
let calificacion = 34

switch (true) {
  case calificacion >= 90 && calificacion <= 100:
    console.log("La calificación es A");
    break;
  case calificacion >= 80 && calificacion <= 89:
    console.log("La calificación es B");
    break;
  case calificacion >= 70 && calificacion <= 79:
    console.log("La calificación es C");
    break;
  case calificacion >= 60 && calificacion <= 69:
    console.log("La calificación es D");
    break;
  default:
    console.log("La calificación es F");
}

