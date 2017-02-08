
  new Vue({
      el: "#app",
      data: {
        books: []
      },
      methods:{

      },
      mounted:function(){
        //console.log("apenas um teste de funcionalidade");
          var self = this;
          self.$http.get('dataServer.json').then(function(response){
          self.books = response.data;
        });
      }
  });
