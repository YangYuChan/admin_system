<template>
    <div class="dashboard">
        <Card></Card>
        <ECharts></ECharts>
        <BasicsTable></BasicsTable>
    </div>
</template>
<script>
import Card from '_c/dashboard/Card.vue'
import ECharts from '_c/dashboard/ECharts.vue'
import BasicsTable from '_c/dashboard/BasicsTable.vue'
export default {
  components: {
    Card,
    ECharts,
    BasicsTable
  }
}
</script>
<style lang="scss" scoped>

</style>
