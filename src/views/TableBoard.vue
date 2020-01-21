<template>
  <div class="table-box">
    <div class="crumb-box flex-between-center">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">列表</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-button icon="el-icon-delete" type="danger" :disabled="hasChecked" @click="deleteAll">批量删除</el-button>
        <el-button icon="el-icon-plus" type="primary" @click="showAddForm">添加</el-button>
      </div>
    </div>
    <div class="filter-box">
      <el-tabs type="border-card">
        <el-tab-pane label="筛选条件">
          <el-form
            ref="form"
            :model="form"
            label-width="80px"
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" filterable placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="选择日期">
              <el-date-picker
                v-model="form.date1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="mini" @click="filterForm">搜索</el-button>
              <el-button size="mini">清空</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="table-content">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" plain icon="el-icon-edit" size="mini" @click="showEditForm(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>

    <!-- 添加 -->
    <el-dialog
      title="添加"
      :visible.sync="dialogVisibleAdd"
      width="60%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      >
      <div class="dialog-form" style="width:460px">
           <el-form ref="form" :model="addForm" label-width="80px" >
          <el-form-item label="活动名称">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="addForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="addForm.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="addForm.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="addForm.activity">
              <el-checkbox label="美食/餐厅线上活动" name="activity"></el-checkbox>
              <el-checkbox label="地推活动" name="activity"></el-checkbox>
              <el-checkbox label="线下主题活动" name="activity"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="activity"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="addForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <!-- <el-input type="textarea" v-model="addForm.desc"></el-input> -->
             <TinymceEditor v-model="addForm.desc " ref="editor" @onClick="onClick" style="width:800px"></TinymceEditor>
          </el-form-item>
        </el-form>
      </div>
     
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="submitAddForm">确 定</el-button>
      </span>
    </el-dialog>
<!-- 编辑 -->
 <el-dialog
      title="编辑"
      :visible.sync="dialogVisibleEdit"
      width="60%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="submitEditForm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- end -->
  </div>
</template>
<script>
import TinymceEditor  from '_c/editor'
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        type: [],
        resource: ""
      },
       addForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          activity: [],
          resource: '',
          desc: ''
        },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      currentPage4: 4,
      hasChecked: true,
      dialogVisibleAdd:false,
      dialogVisibleEdit:false,
      editForm:{

      },
     
    };
  },
   components: {
       TinymceEditor
    },
  methods: {
    onClick(e, editor) {
        console.log('Element clicked')
        console.log(e)
        console.log(editor)
    },
        //清空内容
    clear() {
      this.$refs.editor.clear()
    },
    filterForm(){

    },
    showAddForm() {
      this.dialogVisibleAdd = true;
    },
    showEditForm(row){
      this.dialogVisibleEdit = true;
    },
    submitAddForm(){

    },
    submitEditForm(){

    },
    deleteAll(){

    },
    deleteRow(row){
       this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
      if(this.multipleSelection.length > 0){
        this.hasChecked = false;
      }else{
        this.hasChecked = true;
      }
      
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    handleCloseAdd(){

    },
    handleCloseEdit(){

    },
  }
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.crumb-box {
  font-size: 18px;
  margin: 0 0 30px;
}
</style>
