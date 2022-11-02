console.log('mini game js')

var app =new Vue({
    el:'#app',
    data: {
        humanHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        turns:[]
    },
    computed: {
      
    },
    methods:{
        startGame: function () {
            this.gameIsRunning = true;
            this.humanHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            // monster attack
            if(this.checkPlayerOptions()) {
                return;
            }
            var damage = this.inputDamage(2, 6)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                textLog:'Player hits monster for ' + damage
            })
            this.monsterAttack();
        },
        specialAttack: function() {
            console.log('specialAttack');
                // monster attack
                if(this.checkPlayerOptions()) {
                    return;
                }
                let damage = this.inputDamage(10, 20);
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer:true,
                    textLog:'Player hits monster for ' + damage
                })
                this.monsterAttack();
        },
        monsterAttack : function() {
            let damage = this.inputDamage(1, 5);
            this.humanHealth -= damage;
            this.turns.unshift({
                isPlayer:false,
                textLog:'Monster hits player for ' + damage
            })
            this.checkPlayerOptions();
        },
        heal: function() {
            console.log('heal');
            if(this.humanHealth > 70) {
                return false;
            }
            var healPoint = 5
            this.humanHealth += healPoint;
            this.turns.unshift({
                isPlayer:true,
                textLog:'Player heal for ' + healPoint
            })
            this.monsterAttack();
        },
        giveUp: function() {
            console.log('giveUp');
            this.gameIsRunning = false;
            this.turns = []
            this.humanHealth = 100;
            this.monsterHealth = 100;
            alert('You lose!');
        },
        inputDamage: function(minDamage,maxDamage) {
       
            return Math.max(Math.floor(Math.random()*maxDamage)+ 1,minDamage);
        },
        checkPlayerOptions: function() {
            if(this.monsterHealth <= 0 ) {
                if(confirm('You won! New Game')) {
                    this.startGame();
                } else {
                    this.monsterHealth = 0;
                    this.gameIsRunning = false;
                }
                return true;
             
            } else if(this.humanHealth <= 0) {
                if(confirm('You lost! New Game')) {
                    this.startGame();
                } else {
                    this.humanHealth = 0;
                    this.gameIsRunning = false;
                }
                return true;
            }
            return;
        }
    }

})

console.log(app)