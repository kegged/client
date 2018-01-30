<template>
  <!--
    fixme: should export a single brew item for mapping to a parent component's list;
    root template should also be a `<li/>`
    ex:
      <template>
        <ul v-for="item in brewery.brews">
          <BrewItem :data="item" />
        </ul>
      </template>
  -->
  <div class="brew-table-root">
    <!-- create brews table with tableData prop - will be array of objects-->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      class="brew-table">
      <!-- table columns with props equal to tableData object keys -->
      <el-table-column align="center" prop="name" label="Beers"></el-table-column>
      <el-table-column align="center" prop="style.tag.name" label="Style"></el-table-column>
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
