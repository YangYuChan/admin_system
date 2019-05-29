<template>
    <div class="dashboard">
        <Card></Card>
        <ECharts></ECharts>
        <Table></Table>
    </div>
</template>
<script>
import Card from '_c/dashboard/Card.vue'
import ECharts from '_c/dashboard/ECharts.vue'
import Table from '_c/dashboard/Table.vue'
export default {
    components:{
        Card,
        ECharts,
        Table
    }
}
</script>
<style lang="scss" scoped>

</style>
