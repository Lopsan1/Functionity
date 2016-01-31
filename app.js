var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var store = require('./routes/store');
var BigNumber = require('bignumber.js');
var app = express();
var session = require('express-session');

BigNumber.config({ ERRORS: false });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(a__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.Router());
app.use(cookieParser());
app.use(session({secret: 'ssshhhhh'}));
var y= new BigNumber('2109876543210987654321.1234567890123456789012');
console.log('y '+y);
var x;
x=y.toNumber();
console.log('x '+x);
var suma = new BigNumber('25');
var s=suma.toPower('0.5');
console.log('Suma '+s);
String.prototype.replaceAll = function (replaceThis, withThis) {
    try{
    var re = new RegExp(replaceThis,"g"); 
    return this.replace(re, withThis);
    }
    catch(e){
        console.log("El error (e): "+e+"\n re="+re);
    }
};
String.prototype.isNumeric = function(){
    return !isNaN(parseFloat(this)) && isFinite(this);
}
Array.prototype.clean = function() {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === "") {
            this.splice(i, 1);
        }
    }
    return this;
}
function MathSolver() {
 
    this.infixToPostfix = function(infix) {
        var outputQueue = "";
        var operatorStack = [];
        var operators = {
            "^": {
                precedence: 4,
                associativity: "Right"
            },
            "/": {
                precedence: 3,
                associativity: "Left"
            },
            "*": {
                precedence: 3,
                associativity: "Left"
            },
            "ARCSENH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSINH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOSH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTANH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTGH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOTH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCTGH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSECH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCSCH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSEN": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSIN": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOS": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTAN": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTG": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOT": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCTG": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSEC": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCSC": {
                precedence: 4,
                associativity: "Right"
            },
            "SENH": {
                precedence: 4,
                associativity: "Right"
            },
            "SINH": {
                precedence: 4,
                associativity: "Right"
            },
            "COSH": {
                precedence: 4,
                associativity: "Right"
            },
            "TANH": {
                precedence: 4,
                associativity: "Right"
            },
            "TGH": {
                precedence: 4,
                associativity: "Right"
            },
            "COTH": {
                precedence: 4,
                associativity: "Right"
            },
            "CTGH": {
                precedence: 4,
                associativity: "Right"
            },
            "SECH": {
                precedence: 4,
                associativity: "Right"
            },
            "CSCH": {
                precedence: 4,
                associativity: "Right"
            },
            "SEN": {
                precedence: 4,
                associativity: "Right"
            },
            "SIN": {
                precedence: 4,
                associativity: "Right"
            },
            "COS": {
                precedence: 4,
                associativity: "Right"
            },
            "TAN": {
                precedence: 4,
                associativity: "Right"
            },
            "TG": {
                precedence: 4,
                associativity: "Right"
            },
            "COT": {
                precedence: 4,
                associativity: "Right"
            },
            "CTG": {
                precedence: 4,
                associativity: "Right"
            },
            "SEC": {
                precedence: 4,
                associativity: "Right"
            },
            "CSC": {
                precedence: 4,
                associativity: "Right"
            },
            "LOG": {
                precedence: 4,
                associativity: "Right"
            },
            "LN": {
                precedence: 4,
                associativity: "Right"
            },
            "E^": {
                precedence: 4,
                associativity: "Right"
            },
            "+": {
                precedence: 2,
                associativity: "Left"
            },
            "-": {
                precedence: 2,
                associativity: "Left"
            }
        }
        infix = infix.replace(/\s+/g, "");
        infix = infix.split(/([\+\-\*\/\^\(\)])/).clean();
        for(var i = 0; i < infix.length; i++) {
            var token = infix[i];
            if(token.isNumeric() || /([a-z])+/.test(token)){
                    outputQueue += token + " ";
            } else if("^*/+-ARCSENHARCSINHARCCOSHARCTANHARCTGHARCCOTHARCCTGHARCSECHARCCSCHARCSENARCSINARCCOSARCTANARCTGARCCOTARCCTGARCSECARCCSCSENHSINHCOSHTANHTGHCOTHCTGHSECHCSCHSENSINCOSTANTGCOTCTGSECCSCLNE^LOG".indexOf(token) !== -1) {
                var o1 = token;
                var o2 = operatorStack[operatorStack.length - 1];
                while("^*/+-".indexOf(o2) !== -1 && 
                    ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence)
                     || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
                    outputQueue += operatorStack.pop() + " ";
                    o2 = operatorStack[operatorStack.length - 1];
                }
                operatorStack.push(o1);
            } else if(token === "(") {
                operatorStack.push(token);
            } else if(token === ")") {
                while(operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue += operatorStack.pop() + " ";
                }
                operatorStack.pop();
            }
        }
        while(operatorStack.length > 0){
            outputQueue += operatorStack.pop() + " ";
        }
        return outputQueue;
    }
 
}
function logaritmo(base,x){
    return parseFloat(Math.log(x) / Math.log(base));
}
function f(x){
    var r;
    r=x;
    return r;
} 
function derivada(x){
    var h=0.000000000001;
    var r;
    r=(f(x+h)-f(x))/h;
    return r;
}
function resolver(ecuacion,x){
    BigNumber.config({ ERRORS: false });
    var i,j=0,k,l,aux,contador=0,veces=0,original,auxoperacion,auxcontador,auxnum,exponente;
    var respuestas=[];
    var auxiliares=[];

    for(i=0;i<ecuacion.length;i++){
        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))))
            veces++;
    }
    original=veces;

    for(i=0;i<ecuacion.length;i++){
        if((/([0-9])+/.test(ecuacion.charAt(i-1)) || /(\.)+/.test(ecuacion.charAt(i-1)))&&(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)))){
            //oc
        }
        else if(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)) || /([a-z])+/.test(ecuacion.charAt(i))){
            j=i;
            while(/([0-9])+/.test(ecuacion.charAt(j)) || /([a-z])+/.test(ecuacion.charAt(j)) || /(\.)+/.test(ecuacion.charAt(j))){
                    j++;
            }
            l=respuestas.length;
            aux=ecuacion.slice(i,j);
            if(/([a-z])+/.test(aux)){
                auxnum=x;
                respuestas[l]=new BigNumber(auxnum);
                if(!(/([0-9])+/.test(ecuacion.charAt(i-2)) || /(\.)+/.test(ecuacion.charAt(i-2)) || /([a-z])+/.test(ecuacion.charAt(i-2)))){
                    if(/\-+/.test(ecuacion.charAt(j+2)))
                        respuestas[l]=respuestas[l].negated();
                }  
            }
            else{
                respuestas[l]=new BigNumber(aux);
                if(!(/([0-9])+/.test(ecuacion.charAt(i-2)) || /(\.)+/.test(ecuacion.charAt(i-2)) || /([a-z])+/.test(ecuacion.charAt(i-2)))){
                    if(/\-+/.test(ecuacion.charAt(j+2)))
                        respuestas[l]=respuestas[l].negated();
                } 
            }
            contador++;
        }

        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' ) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' ) || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G' ) || (ecuacion.charAt(i)=='E' && /([\^])+/.test(ecuacion.charAt(i+1))) || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N')){

                //En esta parte buscar las variables y crear una variable x que las reemplace. De igual manera pasar los números a floats
                if(ecuacion.charAt(i)=='+'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(respuestas[auxcontador]!=undefined){
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);
                        respuestas[auxcontador]=respuestas[auxcontador].plus(respuestas[contador]);
                        respuestas.pop();
                    } 
                    else{
                        //respuestas[0]=parseFloat(respuestas[0]);
                    }   
                }
                if(ecuacion.charAt(i)=='-'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(respuestas[auxcontador]!=undefined){
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);
                        respuestas[auxcontador]=respuestas[auxcontador].minus(respuestas[contador]);
                        respuestas.pop();                        
                    }
                    else{
                        respuestas[0]=respuestas[contador].negated();
                    }
                    

                }
                if(ecuacion.charAt(i)=='*'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(typeof respuestas[auxcontador] != 'object')
                        respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                    if(typeof respuestas[contador] != 'object')
                        respuestas[contador]= new BigNumber(respuestas[contador]);
                    respuestas[auxcontador]=respuestas[auxcontador].times(respuestas[contador]);
                    respuestas.pop();
                }
                if(ecuacion.charAt(i)=='/'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(typeof respuestas[auxcontador] != 'object')
                        respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                    if(typeof respuestas[contador] != 'object')
                        respuestas[contador]= new BigNumber(respuestas[contador]);
                    respuestas[auxcontador]=respuestas[auxcontador].dividedBy(respuestas[contador]);
                    respuestas.pop();
                }
                if(/([\^])+/.test(ecuacion.charAt(i))){
                    //(E^())
                    if(ecuacion.charAt(i+2)=='E'){
                        contador=respuestas.length-1;
                        respuestas[contador]=Math.exp(parseFloat(respuestas[contador].toNumber()));
                    }else{
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);

                        if(respuestas[contador].isInteger()){
                            respuestas[auxcontador]=respuestas[auxcontador].toPower(respuestas[contador]);
                        }
                        else{
                            respuestas[auxcontador]=Math.pow(respuestas[auxcontador].toNumber(),respuestas[contador].toNumber());
                        }
                        
                        respuestas.pop();
                        
                    }
                }

                //Hiperbólicas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        auxoperacion=Math.asinh(parseFloat(respuestas[auxcontador].toNumber()));
                        respuestas[auxcontador]=parseFloat(auxoperacion);
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.acosh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.atanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.atanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.acosh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.asinh(parseFloat(respuestas[auxcontador].toNumber()));
                } 

                //Trigonometricas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.asin(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.acos(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.atan(parseFloat(respuestas[auxcontador].toNumber()));
                }
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.atan(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.acos(parseFloat(respuestas[auxcontador].toNumber()));
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.asin(parseFloat(respuestas[auxcontador].toNumber()));
                }

                //Hiperbólicas 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.sinh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' &&ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.cosh(parseFloat(respuestas[auxcontador].toNumber()));      
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.tanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.tanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.cosh(parseFloat(respuestas[auxcontador].toNumber()));
                }
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.sinh(parseFloat(respuestas[auxcontador].toNumber()));
                }
                //Trigonométricas
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.sin(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                       respuestas[auxcontador]=Math.cos(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.tan(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.tan(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.cos(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.sin(parseFloat(respuestas[auxcontador].toNumber()));
                }

                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.log(parseFloat(respuestas[auxcontador].toNumber()));
                }
                //(LOG(BASE)(NUMERO))
                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);
                        respuestas[auxcontador]=logaritmo(parseFloat(respuestas[auxcontador].toNumber()),parseFloat(respuestas[contador].toNumber()));
                }
        } 
    }
    if(typeof respuestas[0]!='object')
        respuestas[0]=new BigNumber(respuestas[0]);
return respuestas[0];
}
function resolverDerivada1(ecuacion,x){
    BigNumber.config({ ERRORS: false });
    var i,j=0,k,l,aux,contador=0,veces=0,original,auxoperacion,auxcontador,auxnum;
    var respuestas=[];
    var auxiliares=[];

    for(i=0;i<ecuacion.length;i++){
        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))))
            veces++;
    }
    original=veces;

    for(i=0;i<ecuacion.length;i++){
        if((/([0-9])+/.test(ecuacion.charAt(i-1)) || /(\.)+/.test(ecuacion.charAt(i-1)))&&(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)))){
            //oc
        }
        else if(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)) || /([a-z])+/.test(ecuacion.charAt(i))){
            j=i;
            while(/([0-9])+/.test(ecuacion.charAt(j)) || /([a-z])+/.test(ecuacion.charAt(j)) || /(\.)+/.test(ecuacion.charAt(j))){
                    j++;
            }
            l=respuestas.length;
            aux=ecuacion.slice(i,j);
            if(/([a-z])+/.test(aux)){
                auxnum=derivada(x);
                respuestas[l]=new BigNumber(auxnum);
                if(!(/([0-9])+/.test(ecuacion.charAt(i-2)) || /(\.)+/.test(ecuacion.charAt(i-2)) || /([a-z])+/.test(ecuacion.charAt(i-2)))){
                    if(/\-+/.test(ecuacion.charAt(j+2)))
                        respuestas[l]=respuestas[l].negated();
                }  
            }
            else{
                respuestas[l]=new BigNumber(aux);
                if(!(/([0-9])+/.test(ecuacion.charAt(i-2)) || /(\.)+/.test(ecuacion.charAt(i-2)) || /([a-z])+/.test(ecuacion.charAt(i-2)))){
                    if(/\-+/.test(ecuacion.charAt(j+2)))
                        respuestas[l]=respuestas[l].negated();
                } 
            }
            contador++;
        }

        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' ) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' ) || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G' ) || (ecuacion.charAt(i)=='E' && /([\^])+/.test(ecuacion.charAt(i+1))) || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N')){

                //En esta parte buscar las variables y crear una variable x que las reemplace. De igual manera pasar los números a floats
                if(ecuacion.charAt(i)=='+'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(respuestas[auxcontador]!=undefined){
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);
                        respuestas[auxcontador]=respuestas[auxcontador].plus(respuestas[contador]);
                        respuestas.pop();
                    } 
                    else{
                        //respuestas[0]=parseFloat(respuestas[0]);
                    }   
                }
                if(ecuacion.charAt(i)=='-'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(respuestas[auxcontador]!=undefined){

                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);
                        respuestas[auxcontador]=respuestas[auxcontador].minus(respuestas[contador]);
                        respuestas.pop();                        
                    }
                    else{

                        respuestas[0]=respuestas[0].negated();
                    }
                    

                }
                if(ecuacion.charAt(i)=='*'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(typeof respuestas[auxcontador] != 'object')
                        respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                    if(typeof respuestas[contador] != 'object')
                        respuestas[contador]= new BigNumber(respuestas[contador]);
                    respuestas[auxcontador]=respuestas[auxcontador].times(respuestas[contador]);
                    respuestas.pop();
                }
                if(ecuacion.charAt(i)=='/'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    if(typeof respuestas[auxcontador] != 'object')
                        respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                    if(typeof respuestas[contador] != 'object')
                        respuestas[contador]= new BigNumber(respuestas[contador]);
                    respuestas[auxcontador]=respuestas[auxcontador].dividedBy(respuestas[contador]);
                    respuestas.pop();
                }
                if(/([\^])+/.test(ecuacion.charAt(i))){
                    //(E^())
                    if(ecuacion.charAt(i+2)=='E'){
                        contador=respuestas.length-1;
                        respuestas[contador]=Math.exp(parseFloat(respuestas[contador].toNumber()));
                    }else{
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);

                        if(respuestas[contador].isInteger()){
                            respuestas[auxcontador]=respuestas[auxcontador].toPower(respuestas[contador]);
                        }
                        else{
                            respuestas[auxcontador]=Math.pow(respuestas[auxcontador].toNumber(),respuestas[contador].toNumber());
                        }
                        
                        respuestas.pop();
                        
                    }
                }

                //Hiperbólicas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        auxoperacion=Math.asinh(parseFloat(respuestas[auxcontador].toNumber()));
                        respuestas[auxcontador]=parseFloat(auxoperacion);
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.acosh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.atanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.atanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.acosh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.asinh(parseFloat(respuestas[auxcontador].toNumber()));
                } 

                //Trigonometricas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.asin(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.acos(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.atan(parseFloat(respuestas[auxcontador].toNumber()));
                }
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.atan(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.acos(parseFloat(respuestas[auxcontador].toNumber()));
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.asin(parseFloat(respuestas[auxcontador].toNumber()));
                }

                //Hiperbólicas 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.sinh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' &&ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.cosh(parseFloat(respuestas[auxcontador].toNumber()));      
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.tanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.tanh(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.cosh(parseFloat(respuestas[auxcontador].toNumber()));
                }
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.sinh(parseFloat(respuestas[auxcontador].toNumber()));
                }
                //Trigonométricas
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.sin(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                       respuestas[auxcontador]=Math.cos(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.tan(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.tan(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.cos(parseFloat(respuestas[auxcontador].toNumber()));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=1/Math.sin(parseFloat(respuestas[auxcontador].toNumber()));
                }

                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        respuestas[auxcontador]=Math.log(parseFloat(respuestas[auxcontador].toNumber()));
                }
                //(LOG(BASE)(NUMERO))
                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        if(typeof respuestas[auxcontador] != 'object')
                            respuestas[auxcontador]= new BigNumber(respuestas[auxcontador]);
                        if(typeof respuestas[contador] != 'object')
                            respuestas[contador]= new BigNumber(respuestas[contador]);
                        respuestas[auxcontador]=logaritmo(parseFloat(respuestas[auxcontador].toNumber()),parseFloat(respuestas[contador].toNumber()));
                }
        } 
    }
    if(typeof respuestas[0]!='object')
        respuestas[0]=new BigNumber(respuestas[0]);
return respuestas[0];
}

function resolverDerivada2(ecuacion,x){
    var i,j=0,k,l,aux,contador=0,veces=0,original,auxoperacion,auxcontador,auxnum;
    var h=0.000000000001;
    var respuestas=[];
    var auxiliares=[];

    for(i=0;i<ecuacion.length;i++){
        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))))
            veces++;
    }
    original=veces;

    for(i=0;i<ecuacion.length;i++){
        if((/([0-9])+/.test(ecuacion.charAt(i-1)) || /(\.)+/.test(ecuacion.charAt(i-1)))&&(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)))){
            //oc
        }
        else if(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)) || /([a-z])+/.test(ecuacion.charAt(i))){
            j=i;
            while(/([0-9])+/.test(ecuacion.charAt(j)) || /([a-z])+/.test(ecuacion.charAt(j)) || /(\.)+/.test(ecuacion.charAt(j))){
                    j++;
            }
            l=respuestas.length;
            aux=ecuacion.slice(i,j);
            if(/([a-z])+/.test(aux)){
                //Si no funca, dividirlo entre 100000000
                //Si no funca, lo anterior pasar a notación postfija, la fórmula y rezar.
                auxnum=derivada(x);
                respuestas[l]=auxnum;
            }
            else{
                respuestas[l]=aux;
            }
            contador++;
        }

        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' ) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' ) || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G' ) || (ecuacion.charAt(i)=='E' && /([\^])+/.test(ecuacion.charAt(i+1))) || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N')){

                //En esta parte buscar las variables y crear una variable x que las reemplace. De igual manera pasar los números a floats
                if(ecuacion.charAt(i)=='+'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])+parseFloat(respuestas[contador]);
                    respuestas.pop();
                }
                if(ecuacion.charAt(i)=='-'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])-parseFloat(respuestas[contador]);
                    respuestas.pop();
                }
                if(ecuacion.charAt(i)=='*'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])*parseFloat(respuestas[contador]);
                    respuestas.pop();
                }
                if(ecuacion.charAt(i)=='/'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])/parseFloat(respuestas[contador]);
                    respuestas.pop();
                }
                if(/([\^])+/.test(ecuacion.charAt(i))){
                    //(E^())
                    if(ecuacion.charAt(i+2)=='E'){
                        contador=respuestas.length-1;
                        respuestas[contador]=(Math.exp(parseFloat(respuestas[contador])+h)-Math.exp(parseFloat(respuestas[contador])))/h;
                    }else{
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        respuestas[auxcontador]=Math.pow(parseFloat(respuestas[auxcontador]),parseFloat(respuestas[contador]));
                        respuestas.pop();
                        
                    }
                }

                //Hiperbólicas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxoperacion=(Math.asinh(parseFloat(respuestas[auxcontador])+h)-Math.asinh(parseFloat(respuestas[auxcontador])))/h;
                        respuestas[auxcontador]=parseFloat(auxoperacion);
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.acosh(parseFloat(respuestas[auxcontador])+h)-Math.acosh(parseFloat(respuestas[auxcontador])))/h;
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.atanh(parseFloat(respuestas[auxcontador])+h)-Math.atanh(parseFloat(respuestas[auxcontador])))/h;
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.atanh(parseFloat(respuestas[auxcontador])+h)-Math.atanh(parseFloat(respuestas[auxcontador])));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.acosh(parseFloat(respuestas[auxcontador])+h)-Math.acosh(parseFloat(respuestas[auxcontador])));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.asinh(parseFloat(respuestas[auxcontador])+h)-Math.asinh(parseFloat(respuestas[auxcontador])));
                } 

                //Trigonometricas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.asin(parseFloat(respuestas[auxcontador])+h)-Math.asin(parseFloat(respuestas[auxcontador])))/h;
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.acos(parseFloat(respuestas[auxcontador])+h)-Math.acos(parseFloat(respuestas[auxcontador])))/h;
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.atan(parseFloat(respuestas[auxcontador])+h)-Math.atan(parseFloat(respuestas[auxcontador])))/h;
                }
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.atan(parseFloat(respuestas[auxcontador])+h)-Math.atan(parseFloat(respuestas[auxcontador])));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.acos(parseFloat(respuestas[auxcontador])+h)-Math.acos(parseFloat(respuestas[auxcontador])));
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.asin(parseFloat(respuestas[auxcontador])+h)-Math.asin(parseFloat(respuestas[auxcontador])));
                }

                //Hiperbólicas 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.sinh(parseFloat(respuestas[auxcontador])+h)-Math.sinh(parseFloat(respuestas[auxcontador])))/h;
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' &&ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.cosh(parseFloat(respuestas[auxcontador])+h)-Math.cosh(parseFloat(respuestas[auxcontador])))/h;      
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.tanh(parseFloat(respuestas[auxcontador])+h)-Math.tanh(parseFloat(respuestas[auxcontador])))/h;
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.tanh(parseFloat(respuestas[auxcontador])+h)-Math.tanh(parseFloat(respuestas[auxcontador])));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.cosh(parseFloat(respuestas[auxcontador])+h)-Math.cosh(parseFloat(respuestas[auxcontador])));
                }
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.sinh(parseFloat(respuestas[auxcontador])+h)-Math.sinh(parseFloat(respuestas[auxcontador])));
                }
                //Trigonométricas
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.sin(parseFloat(respuestas[auxcontador])+h)-Math.sin(parseFloat(respuestas[auxcontador])))/h;                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                       respuestas[auxcontador]=(Math.cos(parseFloat(respuestas[auxcontador])+h)-Math.cos(parseFloat(respuestas[auxcontador])))/h;  
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.tan(parseFloat(respuestas[auxcontador])+h)-Math.tan(parseFloat(respuestas[auxcontador])))/h;  
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.tan(parseFloat(respuestas[auxcontador])+h)-Math.tan(parseFloat(respuestas[auxcontador])));  
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.cos(parseFloat(respuestas[auxcontador])+h)-Math.cos(parseFloat(respuestas[auxcontador])));  
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        respuestas[auxcontador]=h/(Math.sin(parseFloat(respuestas[auxcontador])+h)-Math.sin(parseFloat(respuestas[auxcontador])));  
                }

                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=(Math.log(parseFloat(respuestas[auxcontador])+h)-Math.log(parseFloat(respuestas[auxcontador])))/h;
                }
                //(LOG(BASE)(NUMERO))
                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        respuestas[auxcontador]=(logaritmo(parseFloat(respuestas[auxcontador]),parseFloat(respuestas[contador])+h)-logaritmo(parseFloat(respuestas[auxcontador]),parseFloat(respuestas[contador])))/h;
                }
        } 
    }
return respuestas[0];
}
/*function crearDerivada(ecuacion){
    /([a-z]+\^+\(+[0-9]+\.?[0-9]*\/+[0-9]+\.?[0-9]*)+/.
}*/
function comprobar(cosa){
    var comprueba=0;
    if(cosa.lessThan(new BigNumber('-1e9')) || cosa.greaterThan(new BigNumber('1e9')))
        comprueba=1;
    return comprueba;
}
function incremento(de,hasta){
    BigNumber.config({ ERRORS: false });
    var incre;
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+1000000000000000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+1000000000000000000000000000')))incre= new BigNumber('1e+99999999999999999999999998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+1000000000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+1000000000000000000000')))incre= new BigNumber('1e+99999999999999999998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+10000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+10000000000000000')))incre= new BigNumber('1e+999999999999998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+1000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+1000000000000')))incre= new BigNumber('1e+99999999998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+1000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+1000000000')))incre= new BigNumber('1e+99999998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+10000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+10000000')))incre= new BigNumber('1e+999998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+1000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+1000000')))incre= new BigNumber('1e+99998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+100000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+100000')))incre= new BigNumber('1e+9998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+10000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+10000')))incre= new BigNumber('1e+998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+1000')) && hasta.lessThanOrEqualTo(new BigNumber('1e+1000')))incre= new BigNumber('1e+998');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+100')) && hasta.lessThanOrEqualTo(new BigNumber('1e+100')))incre= new BigNumber('1e+98');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+10')) && hasta.lessThanOrEqualTo(new BigNumber('1e+10')))incre= new BigNumber('1e+8');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+9')) && hasta.lessThanOrEqualTo(new BigNumber('1e+9')))incre= new BigNumber('1e+7');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+8')) && hasta.lessThanOrEqualTo(new BigNumber('1e+8')))incre= new BigNumber('1e+6');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+7')) && hasta.lessThanOrEqualTo(new BigNumber('1e+6')))incre= new BigNumber('1e+5');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+6')) && hasta.lessThanOrEqualTo(new BigNumber('1e+6')))incre= new BigNumber('1e+4');
    if(de.greaterThanOrEqualTo(new BigNumber('-5e+5')) && hasta.lessThanOrEqualTo(new BigNumber('5e+5')))incre= new BigNumber('5e+3');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+5')) && hasta.lessThanOrEqualTo(new BigNumber('1e+5')))incre= new BigNumber('1e+3');
    if(de.greaterThanOrEqualTo(new BigNumber('-5e+4')) && hasta.lessThanOrEqualTo(new BigNumber('5e+4')))incre= new BigNumber('5e+2');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e+4')) && hasta.lessThanOrEqualTo(new BigNumber('1e+4')))incre= new BigNumber('1e+2');
    if(de.greaterThanOrEqualTo(new BigNumber(-5000)) && hasta.lessThanOrEqualTo(new BigNumber(5000)))incre= new BigNumber('50');
    if(de.greaterThanOrEqualTo(new BigNumber(-2000)) && hasta.lessThanOrEqualTo(new BigNumber(2000)))incre= new BigNumber('20');
    if(de.greaterThanOrEqualTo(new BigNumber(-1000)) && hasta.lessThanOrEqualTo(new BigNumber(1000)))incre= new BigNumber('1e1');
    if(de.greaterThanOrEqualTo(new BigNumber(-500)) && hasta.lessThanOrEqualTo(new BigNumber(500)))incre= new BigNumber('5');
    if(de.greaterThanOrEqualTo(new BigNumber(-200)) && hasta.lessThanOrEqualTo(new BigNumber(200)))incre= new BigNumber('2');
    if(de.greaterThanOrEqualTo(new BigNumber(-100)) && hasta.lessThanOrEqualTo(new BigNumber(100)))incre= new BigNumber('1');
    if(de.greaterThanOrEqualTo(new BigNumber(-50)) && hasta.lessThanOrEqualTo(new BigNumber(50)))incre= new BigNumber('0.5');
    if(de.greaterThanOrEqualTo(new BigNumber(-20)) && hasta.lessThanOrEqualTo(new BigNumber(20)))incre= new BigNumber('0.02');
    if(de.greaterThanOrEqualTo(new BigNumber(-10)) && hasta.lessThanOrEqualTo(new BigNumber(10)))incre= new BigNumber('0.01');
    if(de.greaterThanOrEqualTo(new BigNumber(-5)) && hasta.lessThanOrEqualTo(new BigNumber(5)))incre= new BigNumber('0.05');
    if(de.greaterThanOrEqualTo(new BigNumber(-4)) && hasta.lessThanOrEqualTo(new BigNumber(4)))incre= new BigNumber('8e-2');
    if(de.greaterThanOrEqualTo(new BigNumber(-3.15)) && hasta.lessThanOrEqualTo(new BigNumber(3.15)))incre= new BigNumber('5e-2');
    if(de.greaterThanOrEqualTo(new BigNumber(-3)) && hasta.lessThanOrEqualTo(new BigNumber(3)))incre= new BigNumber('4e-2');
    if(de.greaterThanOrEqualTo(new BigNumber(-2)) && hasta.lessThanOrEqualTo(new BigNumber(2)))incre=new BigNumber('2e-2');
    if(de.greaterThanOrEqualTo(new BigNumber(-1)) && hasta.lessThanOrEqualTo(new BigNumber(1)))incre=new BigNumber('1e-2');
    if(de.greaterThanOrEqualTo(new BigNumber('-5e-1')) && hasta.lessThanOrEqualTo(new BigNumber('5e-1')))incre=new BigNumber('5e-3');
    if(de.greaterThanOrEqualTo(new BigNumber('-2e-1')) && hasta.lessThanOrEqualTo(new BigNumber('2e-1')))incre=new BigNumber('2e-3');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1')))incre=new BigNumber('1e-3');
    if(de.greaterThanOrEqualTo(new BigNumber('-5e-2')) && hasta.lessThanOrEqualTo(new BigNumber('5e-2')))incre=new BigNumber('5e-4');
    if(de.greaterThanOrEqualTo(new BigNumber('-2e-2')) && hasta.lessThanOrEqualTo(new BigNumber('2e-2')))incre=new BigNumber('2e-4');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-2')) && hasta.lessThanOrEqualTo(new BigNumber('1e-2')))incre=new BigNumber('1e-4');
    if(de.greaterThanOrEqualTo(new BigNumber('-5e-3')) && hasta.lessThanOrEqualTo(new BigNumber('5e-3')))incre=new BigNumber('5e-5');
    if(de.greaterThanOrEqualTo(new BigNumber('-2e-3')) && hasta.lessThanOrEqualTo(new BigNumber('2e-3')))incre=new BigNumber('2e-5');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-3')) && hasta.lessThanOrEqualTo(new BigNumber('1e-3')))incre=new BigNumber('1e-5');
    if(de.greaterThanOrEqualTo(new BigNumber('-5e-4')) && hasta.lessThanOrEqualTo(new BigNumber('5e-4')))incre=new BigNumber('5e-6');
    if(de.greaterThanOrEqualTo(new BigNumber('-2e-4')) && hasta.lessThanOrEqualTo(new BigNumber('2e-4')))incre=new BigNumber('2e-6');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-4')) && hasta.lessThanOrEqualTo(new BigNumber('1e-4')))incre=new BigNumber('1e-6');
    if(de.greaterThanOrEqualTo(new BigNumber('-5e-5')) && hasta.lessThanOrEqualTo(new BigNumber('5e-5')))incre=new BigNumber('5e-7');
    if(de.greaterThanOrEqualTo(new BigNumber('-2e-5')) && hasta.lessThanOrEqualTo(new BigNumber('2e-5')))incre=new BigNumber('2e-7');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-5')) && hasta.lessThanOrEqualTo(new BigNumber('1e-5')))incre=new BigNumber('1e-7');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-6')) && hasta.lessThanOrEqualTo(new BigNumber('1e-6')))incre=new BigNumber('1e-8');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-7')) && hasta.lessThanOrEqualTo(new BigNumber('1e-7')))incre=new BigNumber('1e-9');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-8')) && hasta.lessThanOrEqualTo(new BigNumber('1e-8')))incre=new BigNumber('1e-10');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-9')) && hasta.lessThanOrEqualTo(new BigNumber('1e-9')))incre=new BigNumber('1e-11');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-10')) && hasta.lessThanOrEqualTo(new BigNumber('1e-10')))incre=new BigNumber('1e-12');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-20')) && hasta.lessThanOrEqualTo(new BigNumber('1e-20')))incre=new BigNumber('1e-22');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-30')) && hasta.lessThanOrEqualTo(new BigNumber('1e-30')))incre=new BigNumber('1e-32');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-40')) && hasta.lessThanOrEqualTo(new BigNumber('1e-40')))incre=new BigNumber('1e-42');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-50')) && hasta.lessThanOrEqualTo(new BigNumber('1e-50')))incre=new BigNumber('1e-52');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-100')) && hasta.lessThanOrEqualTo(new BigNumber('1e-100')))incre=new BigNumber('1e-102');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000')))incre=new BigNumber('1e-1002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-10000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-10000')))incre=new BigNumber('1e-10002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-100000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-100000')))incre=new BigNumber('1e-100002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000')))incre=new BigNumber('1e-1000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-10000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-10000000')))incre=new BigNumber('1e-10000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-100000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-100000000')))incre=new BigNumber('1e-100000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000000')))incre=new BigNumber('1e-1000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-10000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-10000000000')))incre=new BigNumber('1e-10000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-100000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-100000000000')))incre=new BigNumber('1e-100000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000000000')))incre=new BigNumber('1e-1000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-10000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-10000000000000')))incre=new BigNumber('1e-10000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-100000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-100000000000000')))incre=new BigNumber('1e-100000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000000000000')))incre=new BigNumber('1e-1000000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-10000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-10000000000000000')))incre=new BigNumber('1e-10000000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000000000000000')))incre=new BigNumber('1e-1000000000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000000000000000000')))incre=new BigNumber('1e-1000000000000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-10000000000000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-10000000000000000000000000')))incre=new BigNumber('1e-10000000000000000000000002');
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000000000000000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000000000000000000000000000')))incre=new BigNumber('1e-1000000000000000000000000000002');    
    if(de.greaterThanOrEqualTo(new BigNumber('-1e-1000000000000000000000000000000000000')) && hasta.lessThanOrEqualTo(new BigNumber('1e-1000000000000000000000000000000000000')))incre=new BigNumber('1e-1000000000000000000000000000000000002');    
    return incre;
}

var haz = function(req, res){
  BigNumber.config({ ERRORS: false });
  var fog = req.body.fog;
  var gof = req.body.gof;
  var de = req.body.rango1;
  var hasta = req.body.rango2;
  console.log("DeB= "+de);
  console.log("HastaB= "+hasta);
  var comprueba = parseInt(req.body.guarda1);
  var comprueba2 = parseInt(req.body.guarda2);
  var i=0,j;
  var valores1=[];
  var valores2=[];
  var valores3=[];
  var valores4=[];
  var valores1D=[];
  var valores2D=[];
  var valores3D=[];
  var valores4D=[];
  var valores1DD=[];
  var valores2DD=[];
  var valores3DD=[];
  var valores4DD=[];

  console.log("F o G ="+fog);
  console.log("G o F ="+gof);
  var ms = new MathSolver();
  var vari=ms.infixToPostfix(fog);
  console.log("Postfija: "+ms.infixToPostfix(de));
  console.log("Resolver: "+resolver(ms.infixToPostfix(de)),1);

  de=resolver(ms.infixToPostfix(de),1);
  hasta=resolver(ms.infixToPostfix(hasta),1);
  console.log("De "+de);
  console.log("Hasta "+hasta);

  console.log("Vari: "+vari);
  var increment=incremento(de,hasta);

  
//Función fog
  for(i=new BigNumber(de),j=0;i.lessThanOrEqualTo(hasta);j++){
    valores2[j]=i.toNumber();
    valores1[j]=parseFloat(resolver(vari,i.toNumber()).toNumber());
    if(typeof i!='object')
        i= new BigNumber(i);
    i=i.plus(increment);
  }
//Derivada fog
for(i=new BigNumber(de),j=0;i.lessThanOrEqualTo(hasta);j++){
    valores2D[j]=i.toNumber();
    valores1D[j]=parseFloat(resolverDerivada1(vari,i.toNumber()).toNumber());
    if(typeof i!='object')
        i= new BigNumber(i);
    i=i.plus(increment);
  }
  console.log("Valeny1[0]="+valores1[0]+"| Valeny1[ultima]="+valores1[valores1.length-1]);
  console.log("Valenx1[0]="+valores2[0]+"| Valeny1[ultima]="+valores2[valores1.length-1]);
  console.log("Derivay1[0]="+valores1D[0]+"| Derivay1[ultima]="+valores1D[valores1D.length-1]);
  console.log("Derivax1[0]="+valores2D[0]+"| Derivax1[ultima]="+valores2D[valores2D.length-1]);

  var varo=ms.infixToPostfix(gof);
  console.log("Vari: "+varo);
  console.log("Incremento: "+increment);

//Función gof
  for(i=new BigNumber(de),j=0;i.lessThanOrEqualTo(hasta);j++){
    valores4[j]=i.toNumber();
    valores3[j]=parseFloat(resolver(varo,i.toNumber()).toNumber());
    if(typeof i!='object')
        i=new BigNumber(i);
    i=i.plus(increment);
  }
//Derivada gof
for(i=new BigNumber(de),j=0;i.lessThanOrEqualTo(hasta);j++){
    valores4D[j]=i.toNumber();
    valores3D[j]=parseFloat(resolverDerivada1(varo,i.toNumber()).toNumber());
    if(typeof i!='object')
        i= new BigNumber(i);
    i=i.plus(increment);
  }

  console.log("Valeny2[0]="+valores3[0]+"| Valeny2[ultima]="+valores3[valores3.length-1]);
  console.log("Valenx2[0]="+valores4[0]+"| Valeny2[ultima]="+valores4[valores3.length-1]);
  console.log("Derivay2[0]="+valores3D[0]+"| Derivay2[ultima]="+valores3D[valores3D.length-1]);
  console.log("Derivax2[0]="+valores4D[0]+"| Derivax2[ultima]="+valores4D[valores4D.length-1]);


  req.session.variableX1=valores2;
  req.session.variableY1=valores1;
  req.session.variableX2=valores4;
  req.session.variableY2=valores3;

  req.session.derivadaX1=valores2D;
  req.session.derivadaY1=valores1D;
  req.session.derivadaX2=valores4D;
  req.session.derivadaY2=valores3D;

  req.session.rango1=de;
  req.session.rango2=hasta;
  req.session.incrementoo=increment;
  req.session.compru=comprueba;
  req.session.compru2=comprueba2;

  req.session.compo1=fog;
  req.session.compo2=gof;

  if(comprobar(de)==1 || comprobar(hasta)==1){
    res.render('error', {
      message: 'Ingresó valores mayores a 1e9 o menores a -1e9, intenténlo de nuevo',
    });
  }   
  else{
    res.redirect('grafica');
    req.session.valida=0;
  }
         
};
app.get('/', store.index);
app.get('/tablas', store.tablas);
app.get('/grafica', store.grafica);
app.get('/composicion', store.composicion);
app.post('/haz', haz);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
