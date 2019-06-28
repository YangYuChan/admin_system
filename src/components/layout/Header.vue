<template>
    <div class="header-container">
        <header class="home-header">
            <div class="header-left">
                <a href="javascript:;" class="fold-icon" @click="Collapse">
                    <i :class="[ isCollapse ? 'el-icon-s-unfold' :'el-icon-s-fold']"></i>
                </a>
                <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
                </el-breadcrumb>
            </div>
            <div class="header-right">

                <a href="javascript:;" class="search">
                    <el-autocomplete
                    :class="[isSearch ? 'has-width':'']" v-model="keyword"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入内容"
                    @select="handleSelectKeyword"
                    ></el-autocomplete>
                    <i class="icon iconfont icon-search"  @click="changeSearch"></i>
                </a>
                <a href="javascript:;" class="notice">
                    <el-badge :value="3" class="item">
                       <i class="el-icon-message-solid"></i>
                    </el-badge>
                </a>
                <a href="javascript:;" class="help">
                    <i class="el-icon-question"></i>
                </a>
                <a href="javascript:;" class="language">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <i class="icon iconfont icon-language"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>ENGLISH</el-dropdown-item>
                        <el-dropdown-item>简体中文</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>

                </a>
                <div class="userinfo">
                    <a href="javascript:;" class="photo">
                         <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                               <img src="../../assets/img/photo.jpg" alt="">
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item divided>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </a>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return{
            isSearch:false,
            keyword:''
        }
    },
    computed:{
        ...mapState('app',['isCollapse'])
    },
    methods: {
        ...mapMutations('app',['SET_COLLAPSE']),
        Collapse(){
            this.SET_COLLAPSE()
        },
        changeSearch(){
            this.isSearch = !this.isSearch;
            this.keyword = ''
        },
        querySearchAsync(){

        },
        handleSelectKeyword(){

        }
    },
}
</script>
<style lang="scss" scoped>
$default-color: #333;
.home-header {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.header-left{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
    .fold-icon{
        margin-right: 20px;
        color: $default-color;
        i{
            font-size: 20px;
            &:hover{
                color: #666;
                cursor: pointer;
            }
        }
        .el-icon-search{
            font-weight: bold;
        }
    }
}
.header-right{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
    color: $default-color;
    .search,.notice,.help,.language{
        margin-right: 20px;
        color:$default-color;
    }
    .icon-language{
        color: $default-color;
    }
    i{
        font-size: 20px;
    }
    .photo{
        img{
            width: 36px;
            height: 36px;
            border-radius: 4px;
        }
    }
    .search{
        position: relative;
        width: 227px;
        height: 36px;
        text-align: right;
        i{
            position: absolute;
            right: 0;
            top: 7px;
        }
    }
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
.el-icon-arrow-down {
    font-size: 12px;
}
</style>
