<template>
    <div id="app">
        <el-menu mode="horizontal" :router="true" :default-active="active">
            <el-menu-item v-for="(item, index) in navList" :key="index" :index="item.path">
                {{ item.name }}
            </el-menu-item>
        </el-menu>
        <router-view class="router-view" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: "",
            navList: [
                {
                    name: "home",
                    path: "/"
                },
                {
                    name: "about",
                    path: "/about"
                }
            ]
        };
    },
    methods: {},
    created() {
        this.active = this.$route.path;
    }
};
</script>
<style lang="scss">
#app {
}
</style>
