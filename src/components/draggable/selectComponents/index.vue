<template>
    <div>
        <draggable
            class="components-content"
            tag="ul"
            v-show="$store.state.typeComponts === 'buttons'"
            v-bind="{
                group: { name: 'buttons', pull: 'clone', put: false },
                sort: true,
                ghostClass: 'ghost'
            }"
            :list="basicComponents"
            @end="handleMoveEnd($event, 'source')"
            @start="handleMoveStart"
            :move="handleMove"
        >
            <li class="components-item" v-for="(item, index) in buttons" :key="index">
                {{ item.name }}
            </li>
        </draggable>
        <draggable
            class="components-content"
            tag="ul"
            v-show="$store.state.typeComponts === 'forms'"
            v-bind="{
                group: { name: 'forms', pull: 'clone', put: false },
                sort: true,
                ghostClass: 'ghost'
            }"
            :list="basicComponents"
            @end="handleMoveEnd($event, 'source')"
            @start="handleMoveStart"
            :move="handleMove"
        >
            <li class="components-item" v-for="(item, index) in basicComponents" :key="index">
                {{ item.name }}
            </li>
        </draggable>
    </div>
</template>

<script>
import Draggable from "vuedraggable";
import { buttons, basicComponents } from "components/componentsConfig.js";
export default {
    componts: {
        Draggable
    },
    data() {
        return { buttons, basicComponents };
    },
    mounted() {
        console.log(this.$store);
    },
    methods: {
        handleMoveEnd(evt, from) {
            console.warn({
                end: evt,
                from: from
            });
        },
        handleMoveStart({ oldIndex }) {
            console.warn("start", oldIndex);
        },
        handleMove() {
            return true;
        }
    }
};
</script>

<style lang="scss" scoped>
.components-content {
    display: flex;
    flex-wrap: wrap;
    .components-item {
        margin: 1%;
        width: 48%;
        cursor: move;
        user-select: none;
        line-height: 30px;
        text-align: center;
        background: #f4f6fc;
        border: 1px solid #f4f6fc;
        &:hover {
            color: #409eff;
            border: 1px dashed #409eff;
        }
    }
}
</style>
