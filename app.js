
new Vue({
    el: '#ex-1',
    data: {
        currentValue:0,
        hiddenValue: Math.floor(Math.random() * 50),
        attempts:0,
        hasWon:false,
        hallOfFame:[]
    },
    computed:{
        hintDifferenceValue:function(){
            if(this.currentValue > this.hiddenValue){
                return "Plus petit"
            }
            else if(this.currentValue === this.hiddenValue){
                this.hasWon = true
                this.hallOfFame.push({
                    valueToFind: this.hiddenValue,
                    attempts:this.attempts
                })
                return "Gagne !"
            }
            else{
                return "Plus grand"
            }
        }
    },
    watch:{
        currentValue:function(el){
            if(el !== 0) this.attempts++
        }
    },
    methods:{
        restart:function(){
            this.currentValue = 0
            this.hiddenValue =  Math.floor(Math.random() * 50)
            this.hasWon = false
            this.attempts = 0
        }
    }
});









new Vue({
    el: '#ex-2',
    data: {
        currentProgress: 0,
        isInProgress: null,
        buttonValue:"Démarrer"
    },
    computed: {
        currentWidth: function () {
            return {
                width: this.currentProgress + "%"
            }
        }
    },
    watch: {
        currentProgress: function (el) {
            if (el === 100) {
                clearInterval(this.isInProgress)
                this.isInProgress = null
                this.buttonValue = "Redémarrer"
            }
        }
    },
    methods: {
        toggleBar: function () {
            if(this.currentProgress === 100){
                this.currentProgress = 0
            }
            if (!this.isInProgress) {
                this.isInProgress = setInterval(() => {
                    this.currentProgress++
                }, 50)
                this.buttonValue = "Stop"
            } else {
                clearInterval(this.isInProgress)
                this.isInProgress = null
                this.buttonValue = "Démarrer"
            }
        }
    }
});








new Vue({
    el: '#ex-3',
    data:{
        color1:"",
        color2:"",
        currentColor:"black",
        inProgress:null
    },
    computed:{
        styleDiv:function () {
            return{
                "background-color":this.currentColor
            }
        }
    },
    methods:{
        toggleEffect: function () {
            if (!this.inProgress) {
                this.inProgress = setInterval(() => {
                    this.currentColor = (this.currentColor === this.color1) ? this.color2 : this.color1
                }, 1000)
            }else{
                clearInterval(this.inProgress)
                this.inProgress = null
            }
        }
    }

});









new Vue({
    el: '#ex-4',
    data:{
        newTache: "",
        listTaches: [],
    },
    computed:{
        styleButton:function () {
            if(this.newTache.length < 3){
                return "disabled"
            }else{
                return ""
            }
        }
    },
    methods:{
        ajoutTache:function (event) {
            event.preventDefault()
            let date = new Date()
            this.listTaches.push({
                nom: this.newTache,
                dayTime: date.getDate() + "/" + date.getMonth() +"/"+ date.getFullYear()
            })
        },
        deleteTache:function (index) {
            this.listTaches.splice(index, 1)
        }
    }
});































