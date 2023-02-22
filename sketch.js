let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeX = 6;
let velocidadeY = 6;

let raqueteX = 10;
let raqueteY = 160;
let raqueteW = 10;
let raqueteH = 80;

let raqueteAdversarioX = 580;
let raqueteAdversarioY = 160;
let velocidadeYOponente;

let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilhaSonora;
let somVitoria;

function preload(){
  trilha = loadSound("efeitosonoro.wav");
  ponto = loadSound("ponto.wav");
  raquetada = loadSound("raquetada.wav")
}



function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
   
  desenhaBolinha();
  
  moveBolinha();
  
  mostraRaquete(raqueteX, raqueteY);
  
  mostraRaquete(raqueteAdversarioX, raqueteAdversarioY);

  verificaColisaoBolinha();
  
  movimentaRaquete();
  
  verificaColisaoRaquete();
  
  verificaColisaoRaqueteAdversario();
  
  //movimentaRaqueteAdversario();
  
  mostraPlacar();
  
  marcaPontos();
  
  bolinhaPresa();
  
}

function desenhaBolinha(){
  circle(xBolinha, yBolinha, diametro);
}


function moveBolinha(){
   xBolinha += velocidadeX;
  //yBolinha += velocidadeY;
}


function verificaColisaoBolinha(){
  
  if(xBolinha + raio >= width || xBolinha - raio <= 0) {
    velocidadeX *= -1;
  }
  
  if(yBolinha + raio >= height || yBolinha - raio <= 0){
    velocidadeY *= -1 
  }
}

function mostraRaquete(x, y){
   rect(x, y, raqueteW, raqueteH);
}



function movimentaRaquete(){
   if(keyIsDown(UP_ARROW)){
      raqueteY -= 5;
    }
   if(keyIsDown(DOWN_ARROW)){
    raqueteY += 5;
  }
}

function verificaColisaoRaquete(){
   if (xBolinha - raio < raqueteX + raqueteW  && raqueteH && yBolinha - raio < raqueteY + raqueteH && yBolinha + diametro > raqueteY ) {
     raquetada.play();
     velocidadeX *= -1;
   }
    
}

function verificaColisaoRaqueteAdversario(){
   if (xBolinha + raio > raqueteAdversarioX  && raqueteH && yBolinha - raio < raqueteAdversarioY + raqueteH && yBolinha + diametro > raqueteAdversarioY) {
     raquetada.play();   
     velocidadeX *= -1;
    }
}


function movimentaRaqueteAdversario(){
   velocidadeYOponente = yBolinha - raqueteH/2 - 30;
   raqueteAdversarioY = velocidadeYOponente;
 
}

function mostraPlacar(){
  stroke(255);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 20, 40, 20);
  fill(255);
  text(meusPontos, 165, 35);
  
  fill(color(255, 140, 0));
  rect(450, 20, 40, 20);
  fill(255);
  text(pontosOponente, 465,35 )
}

function marcaPontos(){
   if(xBolinha > 590){
     ponto.play();
     meusPontos ++;
   }
  if(xBolinha < raqueteX){
    ponto.play();
    pontosOponente ++;
  }
  
}

function bolinhaPresa(){
  if(xBolinha + diametro  < 0){
    xBolinha = 300;
    yBolinha = 200;
    
  }
  
}




