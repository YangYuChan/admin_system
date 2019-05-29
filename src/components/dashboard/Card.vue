<template>
    <div class="card-box">
        <div class="model-title"><b>卡片</b><span> ( 将信息聚合在卡片容器中展示 )</span> </div>
        <el-row :gutter="12">
            <el-col :span="6">
                <el-card shadow="hover">
                    <div class="card-item card-item1">
                        <div class="item-icon"><i class="el-icon-coin"></i></div>
                        <div class="item-message">
                            <p class="font">本月收入</p>
                            <p class="num">$4000.00</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <div class="card-item card-item2">
                        <div class="item-icon"><i class="el-icon-s-data"></i></div>
                        <div class="item-message">
                            <p class="font">本月入住率</p>
                            <p class="num">89.6%</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="never">
                    <div class="card-item card-item3">
                        <div class="item-icon"><i class="el-icon-s-custom"></i></div>
                        <div class="item-message">
                            <p class="font">本月入住人数</p>
                            <p class="num">860</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="never">
                    <div class="card-item card-item4">
                        <div class="item-icon"><i class="el-icon-tickets"></i></div>
                        <div class="item-message">
                            <p class="font">本月订单数</p>
                            <p class="num">253</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'Card'
}
</script>
<style lang="scss" scoped>

</style>
