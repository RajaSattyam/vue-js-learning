//First make a vue instance
//it controls whole part or just a certain part of application
new Vue({
    el:"#vue-app", 
    data:{
        name:"Ashu",
        job:"Software Engineer",
        website:"www.ashumishra.com",
        age:25,
        websiteTag:'<a href="www.ashu.com">Web</a>'
    },
    methods:{
        greet: function(time){
            return "Good " + time +' '+ this.name;
        },
        subtract: function(dec){
            this.age -= dec;
        }
    }
});

new Vue({
    el:"#canvas",
    data:{
        x:0,
        y:0
    },
    methods:{
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})


new Vue({
    el:"#two-way-data-binding",
    data:{
        name:'',
        age:''
    }
})