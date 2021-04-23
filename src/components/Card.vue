<template>
  <el-row type="flex">
    <el-col :span="24">
      <el-card shadow="hover">
        <slot></slot>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
    name : 'Card',
}
</script>


<style>
  .el-row {
    margin-bottom: 20px;
  }
</style>