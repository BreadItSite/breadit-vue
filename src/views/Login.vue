<template>
  <div id="login" class="text-center" @submit.prevent="login">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please Sign In</h1>
      <div class="alert alert-danger" role="alert" v-if="invalidCredentials">
        Invalid username and password!
      </div>
      <div
        class="alert alert-success"
        role="alert"
        v-if="this.$route.query.registration"
      >
        Thank you for registering, please sign in.
      </div>
      <label for="username" class="sr-only">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        required
        autofocus
      />
      <label for="password" class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <button id="submit-button" type="submit">
        <img
          src="https://i.imgur.com/rYkZ6cy.png"
          class="nav-buttons"
          id="button-in"
        />
      </button>
      <router-link :to="{ name: 'register' }">Need an account?</router-link>

    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.text-center {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". title   ."
    ". results .";
}

.form-signin {
  grid-area: title;
}

.nav-buttons {
  height: 50px;
}

#submit-button {
  margin-top: 5px;
  border: none;
  background-color: rgba(0, 0, 255, 0);
  color: none;
}

a {
  display: block
}
</style>
