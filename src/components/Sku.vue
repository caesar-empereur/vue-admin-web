<template>
    <div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="param.name" placeholder="商品名称" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header">

                <el-table-column label="名称" :formatter="formatData"></el-table-column>
                <el-table-column prop="price" label="价格"></el-table-column>
                <el-table-column label="图片">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.imageUrl"
                            :preview-src-list="[scope.row.imageUrl]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="shipFee" label="运费"></el-table-column>
                <el-table-column prop="count" label="库存"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-edit"
                                @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button
                                type="text"
                                icon="el-icon-delete"
                                class="red"
                                @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="param.pageNo"
                    :page-sizes="[10,20,50]"
                    :page-size="param.pageSize"
                    :total="total"
                    :page-count="pageCount"
                    @size-change="handlePageSizeChange"
                    @current-change="handlePageNoChange"
                ></el-pagination>
            </div>
        </div>

        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="运费">
                    <el-input v-model="form.shipFee"></el-input>
                </el-form-item>
                <el-form-item label="库存">
                    <el-input v-model="form.count"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {get,post} from '../util/http';

    export default {
    name: 'basetable',
    data() {
        return {
            param: {
                name: '',
                pageNo: 1,
                pageSize: 10
            },
            tableData:[],

            editVisible: false,

            total: 0,
            pageCount:0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created () {
        this.getData();
    },
    methods: {
        getData() {
            get('/order-sku/sku/page', this.param)
                .then((response) => {
                    this.total=response.totalElements;
                    this.pageCount = response.totalPages;
                    this.tableData=response.content;
                })
        },
        handleSearch() {
            console.log("search");
            this.getData();
        },
        formatData(row, column) {
            return row.name+ ' ' + row.spec;
        },
        handlePageNoChange(val) {
            console.log(val);
            this.param.pageNo=val;
            this.getData();
        },
        handlePageSizeChange(val){

        },
        saveEdit(){

        },
        handleEdit(row) {
            this.form = row;
            this.editVisible = true;
        },
        handleDelete(row) {
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
            .then(() => {
                this.$message.success('删除成功');
                this.getData();
            })
            .catch(() => {});
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.pagination {
    margin: 20px 0;
    text-align: right;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
