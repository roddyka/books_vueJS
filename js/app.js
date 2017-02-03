var hello = new Vue({
  el: "#hello",
  data: {
    msg: "Hello Vue!",
    peoples: [
      {name:"Maria"},
      {name:"Pedro"},
      {name:"João"},
      {name:"Ana"},
      {name:"Gabriel"}
    ],
    newElement:"",
    elements: []
  },
  methods:{
    addElement: function(){
      var title = this.newElement.trim();
      if(title){
        this.elements.push({title:title});
        this.newElement = "";
      }
    },
    removeElement: function(e,index){
      e.preventDefault();
      this.elements.splice(index,1);
    },
    myClick: function(){
      alert();
    },
    myKeyUp: function(){
      alert("myKeyUp");
    }
  }
});
