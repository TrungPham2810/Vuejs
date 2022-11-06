<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 ">
                <div class="alert alert-danger" role="alert">
                    <strong>404 Not Found Page. </strong>
                </div>
                <!--<button class="btn btn-primary" @click="$router.push('/')">Back To Home</button>-->
                <button class="btn btn-primary" @click="$router.push({name:'home_page'})">Back To Home</button>
            </div>
        </div>
    </div>
</template>

