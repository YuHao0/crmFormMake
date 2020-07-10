<template functional>
    <draggable
        v-model="dataList"
        class="drag-content"
        v-bind="{
            group: 'people',
            ghostClass: 'ghost',
            animation: 200,
            handle: '.drag-item'
        }"
    >
        <div v-for="(item, index) in dataList" :key="index" class="drag-item" @click="props.handleSelectWidget(item)">
            <el-form-item :label="item.name"></el-form-item>
        </div>
    </draggable>
</template>

<script>
export default {
    props: {
        dataList: {
            type: Array,
            required: true
        },
        select: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.drag-item {
    :hover {
        outline: 1px solid $primary-color;
        border: 1px solid $primary-color;
        outline-offset: -1px;
    }
}
</style>
