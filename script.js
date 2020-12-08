document.addEventListener('keydown' ,function(evento){

	if (evento.keyCode == 38) {
		arriba();
		pp.movi+=0.25;
		pp.moviA=1;
		inicio=true;
	}

	if (evento.keyCode == 40) {
		abajo();
		pp.moviA+=0.25;
		pp.movi=1;
		inicio=true;
	}

	if(nivel.muerto==false){
		
	} else{
		nivel.velocidad=9;
		nivel.muerto=false;
		ovni.vel=15;
		met.x=ancho+150;
		met1.x=ancho+150;
		ovni.x=ancho+150;
		sm1=false;
		pp.x=100;
		pp.y=250;
		nivel.score=0;


	}

});

imgO = new Image();
	var cont =0;
	function CalTime(){
		var tiempo= setTimeout("cambiar()",200);
	}

	function cambiar(){
		cont++;

		if (cont>6) {
			cont=0;
		}

		imgO.src = 'img/ovni/'+cont+'.png';CalTime();
		console.log(cont);
	}

var inicio=false;
var sm1=false;
var h=false;
var ancho=1350;
var alto=600;

var canvas, cntx;

function iniciar(){
	canvas=document.getElementById('canvas');
	cntx=canvas.getContext('2d');
	CalTime();
	cargaIMG();
}

function bCanvas(){
	canvas.width = ancho;
	canvas.height= alto;
}


var imgP;

function cargaIMG(){
	//personaje
	imgP = new Image();
	imgP.src = 'img/p1.png';
	//personaje

	//meteoro
	imgM = new Image();
	imgM.src = 'img/0.png';

	imgM1 = new Image();
	imgM1.src = 'img/1.png';
	//meteoro

	//ovni
	

	imgAO = new Image();
	imgAO.src = 'img/ao.png';
	//ovni

	//fondo
	imgF = new Image();
	imgF.src = 'img/fn.png';

	imgE = new Image();
	imgE.src = 'img/e1.png';

	imgE1 = new Image();
	imgE1.src = 'img/e2.png';

	imgE2 = new Image();
	imgE2.src = 'img/e3.png';

	imgN = new Image();
	imgN.src = 'img/nebulosa.png';
	//fondo
}

function repAudio(){
	var reproducir= new Audio();
	reproducir.src='audio/4.wav';
	reproducir.play();
}

function repAlert(){
	var reproducir= new Audio();
	reproducir.src='audio/5.wav';
	reproducir.play();
}

function repfondo(){
	var reproducir= new Audio();
	reproducir.src='audio/3.wav';
	reproducir.play();
}


var nivel={velocidad: 6, score:0, muerto:false, hig:0};

//meteoro




var met={x: ancho+150,dim: 170, y: Math.round(Math.random() * (1 + 430))};
var met1={x: ancho+150, y: Math.round(Math.random() * (1 + 430))};
var ovni={x: ancho+800, y: Math.round(Math.random() * (1 + 430)), vel: 15};
var aOv={x: ancho, y: ovni.y+20};
var alerta=false;

var fon={x: 0, y: 0, vx: 0};
var star={x: 0, y: 0};
var star1={x: 0, y: 0};
var star2={x: 0, y: 0};
var nebulosa={x: 1400, y: 0};

function dibujarM(){
	
	cntx.drawImage(imgM,0,0,170,170,met.x,met.y,met.dim,met.dim);
}

function dibujarM1(){
	
	cntx.drawImage(imgM1,0,0,170,170,met1.x,met1.y,met.dim,met.dim);
}

function dibujarO(){
	cntx.drawImage(imgO,0,0,240,200,ovni.x,ovni.y,240,200);
}

function dibujarA(){
	cntx.drawImage(imgAO,0,0,50,50,aOv.x-75,aOv.y,50,50);	
}

function dibujarF(){
	
	cntx.drawImage(imgF,0,0,4050,600,fon.x,fon.y,4050,600);
}

function movF(){
	if (inicio==true) {
	if (fon.x < -2700) {
		fon.x=0;
	}else{
		fon.x-=1;
	}
}
}

function dibujarE(){
	
	cntx.drawImage(imgE,0,0,2700,600,star.x,star.y,2700,600);
}

function movE(){
	if (inicio==true) {
	if (star.x < -1350) {
		star.x=0;
	}else{
		star.x-=1;
	}
}
}

function dibujarE1(){
	
	cntx.drawImage(imgE1,0,0,2700,600,star1.x,star1.y,2700,600);
}

function movE1(){
	if (inicio==true) {
	if (star1.x < -1350) {
		star1.x=0;
	}else{
		star1.x-=5;
	}
}
}

function dibujarE2(){
	
	cntx.drawImage(imgE2,0,0,2700,600,star2.x,star2.y,2700,600);
}

function movE2(){
	if (inicio==true) {
	if (star2.x < -1350) {
		star2.x=0;
	}else{
		star2.x-=6;
	}
}
}

function dibujarN(){
	
	cntx.drawImage(imgN,0,0,2700,600,nebulosa.x,nebulosa.y,2700,600);
}

function movN(){
	if (inicio==true) {
	if (nebulosa.x < -3000) {
		nebulosa.x=1400;
	}else{
		nebulosa.x-=3;
	}
}
}

//meteoro
function movM(){
	if (inicio==true) {
	if (met.x < -190) {
		met.x=ancho+150;
		met.y=Math.round(Math.random() * (1 + 430));
		nivel.score+=1;
		repAudio();
		if (h==false) {
		nivel.hig+=1;
		}
		nivel.velocidad+=0.5;
	}else{
		met.x-=nivel.velocidad;
		if (met.x<=500) {
			sm1=true;
		}
	}
}
}

function movM1(){

	if (inicio==true && sm1==true) {
	if (met1.x < -190) {
		met1.x=ancho+150;
		met1.y=Math.round(Math.random() * (1 + 430));
		nivel.score+=1;
		repAudio();
		if (h==false) {
		nivel.hig+=1;
		}
		//nivel.velocidad+=0.5;
	}else{
		met1.x-=nivel.velocidad;
	}
}
}


//ovni
function movO(){
	if (inicio==true) {
	if (ovni.x < -2700) {
		ovni.x=ancho+800;
		ovni.y=Math.round(Math.random() * (1 + 430));
		aOv.y=ovni.y+20;
		if (h==false) {
		nivel.hig+=1;
		}
		ovni.vel+=0.3;
	}else{
		ovni.x-=ovni.vel;
		if (ovni.x<=2145 && ovni.x >= 1350) {
			alerta=true;
			repAlert();
		} else if (ovni.x<=1349) {
			alerta=false;
		}
	}
}
}
//ovni

//personaje
var pp ={x:100, y:250, vy:0, movi:1.5,moviA: 1.5,vymax:9};

var movimiento=false;
var movimientoA=false;

function dibujarP(){
	cntx.drawImage(imgP,0,0,150,170,pp.x,pp.y,150,170);
}

function mov(){
	if (movimiento==true) {
		pp.y -= pp.vy;
		pp.x +=0.5;
	}

	if (movimientoA==true) {

		pp.y += pp.vy;
		pp.x -= 0.5;
		}
}

function arriba(){
	pp.vy = pp.movi;
	movimiento=true;
	movimientoA=false;
}

function abajo(){
	pp.vy = pp.moviA;
	movimientoA=true;
	movimiento=false;
}


function colision(){
	
	if (pp.y<=-90) {
		nivel.muerto=true;
		nivel.velocidad=0;
		pp.vy=0;
		pp.x=130;

	}

	if (pp.y>=500) {
		nivel.muerto=true;
		nivel.velocidad=0;
		pp.vy=0;
		pp.x=68;
	}
	



	if (met.x>=10 && met.x<=150) {
		
		if (pp.y >=met.y-115 && pp.y<=met.y+130) {
			nivel.muerto=true;
			nivel.velocidad=0;
			pp.vy=0;
			pp.x=met.x-71;

		}
	}

	if (met1.x>=10 && met1.x<=150) {
		
		if (pp.y >=met1.y-115 && pp.y<=met1.y+130) {
			nivel.muerto=true;
			nivel.velocidad=0;
			pp.vy=0;
			pp.x=met1.x-71;
		}
	}

	if (ovni.x>=10 && ovni.x<=150) {
		
		if (pp.y >=ovni.y-115 && pp.y<=ovni.y+130) {
			nivel.muerto=true;
			nivel.velocidad=0;
			pp.vy=0;
			pp.x=ovni.x-60;
		}
	}

}

function puntuacion(){
	cntx.font = "20px impac";
	cntx.fillStyle= '#fff';
	cntx.fillText(`${"SCORE: "+nivel.score}`,1200,30);


	if (nivel.muerto==true) {
		cntx.font = "80px Berlin Sans FB";
		cntx.fillStyle= '#fff';
		cntx.fillText(`GAME OVER`,450,300);
	}
	higscore(nivel.score);

}


//personaje
var FPS =50;
setInterval(function(){
	principal();
},1000/FPS);

function higscore(m){
	if (m>nivel.hig) {
		nivel.hig=m;	
		cntx.font = "20px impac";
		cntx.fillStyle= '#fff';
		cntx.fillText(`${"HI: "+m}`,1100,30);
	}else{	
		cntx.font = "20px impac";
		cntx.fillStyle= '#fff';
		cntx.fillText(`${"HI: "+nivel.hig}`,1100,30);
		h=true;
	}
}





function principal(){
	bCanvas();
	dibujarF();
	movF();
	dibujarN();
	movN();
	dibujarE();
	movE();
	dibujarE1();
	movE1();
	dibujarE2();
	movE2();
	mov();
	puntuacion();
	colision();
	movM();
	movM1();
if (nivel.score>=10) {
	movO();
	dibujarO();
	if (alerta==true) {
		dibujarA();
	}
}
	dibujarM();
	dibujarM1();
	dibujarP();

}