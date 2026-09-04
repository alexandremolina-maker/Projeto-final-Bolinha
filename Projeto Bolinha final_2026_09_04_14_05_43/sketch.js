//Projeto Bolinha Final
//Movimentando a bolinha no eixo x e y

let xBolinha = 200;
let yBolinha = 200;

let xVelocidade = 3;
let yVelocidade = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoX();
  verificaColisaoY();
}


//--------função mostra bolinha--------
function mostraBolinha(){
  circle(xBolinha, yBolinha, 15);
}


//-------função movimenta bolinha------
function movimentaBolinha(){
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

//---------Verifica colisao no eixo X--------
function verificaColisaoX(){
  if(xBolinha > width || xBolinha < 0){ 
    xVelocidade *= -1
  }
}

//-----------Verifica colisao no eixo Y--------
function verificaColisaoY(){
  if(yBolinha > height || yBolinha < 0){
    yVelocidade *= -1;
  }
}




//-----------função click----------
function mousePressed(){
  xVelocidade *= -1;
  console . log('Mudando a Velocidade', xVelocidade);
}