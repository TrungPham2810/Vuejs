<template>
    <div>
        <PageHeader></PageHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import PageHeader from './components/layout/Header'
    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            PageHeader
        }
    }
</script>

