//JAVASCRIPT OBJECT CONSTRUCTOR
class Rocket {
    constructor(code) {
        this.code = code;
        this.listProps = [];
        this.velocity = 0;

      //PROPELLANT
         class Propellant {
            constructor(maxPower){
                this.actualPower = 0;
                this.maxPower = maxPower;
                //METHODS OF THE PROPELLANT
                this.acceleratePropeller = function(){
                    this.actualPower = this.actualPower + 10;
                   if(this.actualPower > this.maxPower){
                        this.actualPower = this.maxPower;
                    }
                }
                this.brakePropeller = function(){
                    this.actualPower = this.actualPower - 10;
                    if(this.actualPower < 0){
                        this.actualPower = 0;
                    }
                }
            }
         }

        //METOHDS OF THE ROCKET
        this.addPropeller = function (p) {
            var newProp = new Propellant(p);
            this.listProps.push(newProp);
        };

        this.sumActualPower = function(){
            this.velocity = 0;
            for(var i=0; i<this.listProps.length; i++){
                this.velocity = this.velocity + this.listProps[i].actualPower; 
            }
        } 
        //rocket accceleration
        this.accelerate = function(){
                for(var i=0; i<this.listProps.length; i++){
                    this.listProps[i].acceleratePropeller();
                }
                
            };
        //rocket brake
        this.brake = function(){
                for(var i=0; i<this.listProps.length; i++){
                    this.listProps[i].brakePropeller();
                }
                
        }; 
    }
}

//FUNCTIONS FOR HTML BUTTONS
var rocket1; //Global variable.
var rocket2; //Global variable.

function createRocket1(code){
    rocket1 = new Rocket(code);
    document.getElementById('createdRocket1').innerHTML = "YES!";
    rocket1.addPropeller(10);
    rocket1.addPropeller(30);
    rocket1.addPropeller(80);
}
function createRocket2(code){
    rocket2 = new Rocket(code);
    document.getElementById('createdRocket2').innerHTML = "YES!";
    rocket2.addPropeller(10);
    rocket2.addPropeller(30);
    rocket2.addPropeller(80);
    rocket2.addPropeller(10);
    rocket2.addPropeller(30);
    rocket2.addPropeller(80);
}

function printRocket(rocket){
    rocket.sumActualPower();
    document.getElementById('codeRocket1').innerHTML = rocket.code;
    document.getElementById('propRocket1').innerHTML = rocket.listProps.length;
    document.getElementById('actualPowerRocket1').innerHTML = rocket.listProps[0].actualPower;
        var listforProps = [];
        for(i=0; i< rocket.listProps.length; i++){
            listforProps.push(rocket.listProps[i].maxPower);
        }
    document.getElementById('maxPowerRocket1').innerHTML = listforProps;
    document.getElementById('velocityRocket1').innerHTML = rocket.velocity;

}
function printRocket2(rocket2){
    rocket2.sumActualPower();
    document.getElementById('codeRocket2').innerHTML = rocket2.code;
    document.getElementById('propRocket2').innerHTML = rocket2.listProps.length;
    document.getElementById('actualPowerRocket2').innerHTML = rocket2.listProps[0].actualPower;
        var listforProps = [];
        for(i=0; i< rocket2.listProps.length; i++){
            listforProps.push(rocket2.listProps[i].maxPower);
        }
    document.getElementById('maxPowerRocket2').innerHTML = listforProps;
    document.getElementById('velocityRocket2').innerHTML = rocket2.velocity;

}

function accelerateRocket(rocket){
    rocket.accelerate(); 
    printRocket(rocket);
}

function brakeRocket(rocket){
    rocket.brake();
    printRocket(rocket);
}
function accelerateRocket2(rocket){
    rocket.accelerate(); 
    printRocket2(rocket);
}
function brakeRocket2(rocket){
    rocket.brake();
    printRocket2(rocket);
}



