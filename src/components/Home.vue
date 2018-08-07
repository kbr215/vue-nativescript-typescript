<template>
    <Page class="page">
        <StackLayout>
            <Label :text="`The count is ${count}`"></Label>
        </StackLayout>
    </Page>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"

    @Component
    export default class HomePage extends Vue {
        public count: number = 1
    }
</script>