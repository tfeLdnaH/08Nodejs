/**
 * Created by Anderson on 03/11/2017.
 */
function calc(){
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.soma = function(a, b){
        c = a + b;
    }
    this.resultado = function () {
        return c;
    }
}

var n1 = new calc();
n1.soma(10, 20);
console.log(n1.resultado());


    n1.prototype.a = 0;
    n1.prototype.b = 0;
    n1.prototype.c = 0;
    n1.prototype.res = function(a, b){
        c = a * b;
        return c;
    }
}

var n2 = new n1();
console.log(n2.res(20, 3));
//console.log(res.resultado());

