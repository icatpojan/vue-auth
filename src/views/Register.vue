//Register.vue
<template>
<div class="row justify-content-md-center">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                    {{ error[0] }}
                </div>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="name" type="text" class="form-control" placeholder="Name..">
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input v-model="email" type="email" class="form-control" placeholder="Email..">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" class="form-control" placeholder="Password..">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            errors: null
        };
    },
    methods: {
        register: function () {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
            };
            this.$store
                .dispatch("register", data)
                .then(response => {
                    console.log(response)
                    this.$router.push({
                        name: 'Login'
                    })
                })
        }
    }
};
</script>
