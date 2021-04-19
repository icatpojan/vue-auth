//Login.vue
<template>
<div class="row justify-content-md-center">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
                <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                    {{ error[0] }}
                </div>
                <form @submit.prevent="userLogin">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input v-model="form.email" type="email" class="form-control" placeholder="Email..">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model='form.password' type="password" class="form-control" placeholder="Password..">
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
            form: {
                email: '',
                password: '',
            },
            errors: null
        }
    },
    methods: {
        userLogin() {
            this.$store.dispatch('login', this.form)
                .then(response => {
                    console.log(response)
                    this.$router.push({
                        name: 'Home'
                    })
                }).catch(error => {
                    this.errors = error.response.data.errors
                })
        }
    }
}
</script>
