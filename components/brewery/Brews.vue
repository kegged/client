<template>
  <div class="brew-table-root">
    <!-- create brews table with tableData prop - will be array of objects-->
    <el-table
      :data="tableData"
      stripe
      style="width: 1000%"
      class="brew-table">
      <!-- table columns with props equal to tableData object keys -->
      <el-table-column align="center" prop="brew" label="Beers"></el-table-column>
      <el-table-column align="center" prop="style" label="Style"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: ['tableData']
  }
</script>

<style>
.brew-table-root {
  width: 80%;
}

.el-table th {
  background-color: #545c64;
}

.el-table tr {
  background-color: #E8E8E8;
}

.el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: #DCDCDC;
}

thead.has-gutter {
  color: #ebb563;
  font-weight: bolder;
  font-size: 1.3em;
}
</style>