<template>

    <div>
        <div class="col-md-6">
          <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
            <h2>Users List</h2>
            <table class="table table-hover table-striped">
            <ul>
              <tr> 
                            <th>Nom </th> 
                            <th>Prenom</th> 
                            <th>Email</th> 
                            <th>Tel</th> 
                            <th>Supprimer</th>


               </tr>
      <tr v-for="(user, index) in users" :key="index">
                   
                         <td>    {{user.nom}}</td>
                          <td>  {{user.prenom}}</td>
                          <td>  {{user.email}}</td>
                          <td>   {{user.tel}}</td>
                     <td> <button type="button" class="btn btn-outline-danger" @click="deleteUser(user.id)">remove</button></td>
                       
                      
                </tr>
            </ul>
            </table>
        </div> 
        <h2> Add User</h2>
         <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" class="form-control" id="name" required v-model="user.nom" name="name">
        </div>
    
        <div class="form-group">
          <label for="age">Prenom</label>
          <input type="text" class="form-control" id="age" required v-model="user.prenom" name="age">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="age" required v-model="user.email" name="email">
        </div>
    <div class="form-group">
          <label for="tel">Tel</label>
          <input type="number" class="form-control" id="tel" required v-model="user.tel" name="tel">
        </div>
    
    
        <button v-on:click="saveUser" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>Welcome to {{user.prenom}} ! </h4>
      <button class="btn btn-success" v-on:click="newUser">Add</button>
    </div>
  </div>     

        


    </div>
    
    </template>
 
<script>
import http from "../http-common";
 
export default {
  name: "HelloWorld",
  data() {
    return {
      users: [],
       user: {
        id: 0,
        nom: "",
        prenom: "",
        tel:null ,
        email:"",
        active: false
      },
      submitted: false
    };
    
  },
  methods: {
    retrieveUsers() {
      http
        .get("/all")
        .then(response => {
          this.users = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser(id) {
      console.log(id)
      http
        .delete("/"+id)
        .then(response => {
          this.retrieveUsers()
        })
        .catch(e => {
          console.log(e);
        });
  },
    refreshList() {
      this.retrieveUsers();
    },
     saveUser() {
      var data = {
        nom: this.user.nom,
        prenom: this.user.prenom,
        email: this.user.email,
        tel: this.user.tel

      };
 
      http
        .post("/", data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.retrieveUsers();
        })
        .catch(e => {
          console.log(e);
        });
 
      this.submitted = true;
    },
    newUser() {
      this.submitted = false;
      this.user = {};
    }
   
  },
  mounted() {
    this.retrieveUsers();
  } 
  
};

</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}

.submitform {
  max-width: 300px;
  margin: auto;
}


</style>