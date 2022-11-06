<template>
    <div>
        <h1>User Index</h1>
        <ul class="list-group">

            <router-link to="user/1" tag="li" class="list-group-item"><a class="nav-link">User 1</a></router-link>
            <router-link to="user/2" tag="li" class="list-group-item"><a class="nav-link">User 2</a></router-link>
            <router-link to="user/3" tag="li" class="list-group-item"><a class="nav-link">User 3</a></router-link>
            <router-link to="user/4" tag="li" class="list-group-item"><a class="nav-link">User 4</a></router-link>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>