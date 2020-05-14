<template>
    <div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="param.status" placeholder="状态" class="handle-select mr10">
                    <el-option label="已支付" value="PAID"></el-option>
                    <el-option label="已完成" value="FINISHED"></el-option>
                    <el-option label="已发货" value="SHIPED"></el-option>
                    <el-option label="已创建" value="CREATED"></el-option>
                    <el-option label="已取消" value="CANCEL"></el-option>
                </el-select>
                <el-input v-model="param.orderNo" placeholder="订单号" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                stripe
                ref="multipleTable"
                >

                <el-table-column prop="orderNo" label="订单号"></el-table-column>
                <el-table-column prop="amount" label="订单金额"></el-table-column>
                <el-table-column prop="buyerName" label="买家"></el-table-column>
                <el-table-column prop="sellerName" label="卖家"></el-table-column>
                <el-table-column prop="skuName" label="商品"></el-table-column>

                <el-table-column label="状态" :formatter="formatData">
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
                orderNo: '',
                status: '',
                pageNo: 1,
                pageSize: 10
            },
            tableData:[],

            editVisible: false,

            total: 0,
            pageCount:0,
            form: {}
        };
    },
    created () {
        this.getData();
    },
    methods: {
        getData() {
            get('/order-sku/order/page', this.param)
                .then((response) => {
                    this.total=response.totalElements;
                    this.pageCount = response.totalPages;
                    this.tableData=response.content;
                })
        },
        handleSearch() {
            this.getData();
        },
        formatData(row, column) {
            if (row.status==='PAID'){
                return '已支付';
            }
            else if (row.status==='FINISHED'){
                return '已完成';
            }
            else if (row.status==='SHIPED'){
                return '已发货';
            }
            else if (row.status==='CREATED'){
                return '已创建';
            }
            else if (row.status==='CANCEL'){
                return '已取消';
            }
            return '';
        },
        handlePageNoChange(val) {
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
el-table-column {
    align: center;
}
</style>
