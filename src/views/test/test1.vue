<template>
  <div>
    <span class="txt">{{ data.a }}</span>
    <el-container>
      <el-header>文件链接</el-header>
      <el-main>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" :underline="false">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </el-main>
    </el-container>

    <el-container>
      <el-header>单选/多选</el-header>
      <el-main>
        <el-radio-group v-model="radio" @change="showChecked">
          <el-radio label="1">value1</el-radio>
          <el-radio label="2">value2</el-radio>
          <el-radio disabled lable="3">value3</el-radio>
        </el-radio-group>
      </el-main>
      <el-footer>
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" style="display:inline-block" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
      </el-footer>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <button class="btn">START</button>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data() {
    return {
      data: { a: 'test1' },
      radio: '1',
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    showChecked(val) {
      this.$message(val)
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style lang="scss" scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .btn {
    position: relative;
    height: 60px;
    width: 200px;
    background-image: linear-gradient(to right, #FF4040 , #F9F500,#64F900,#64F900,#0004F9,#F500F9, #FF4040);
    background-size: 400%;
    background-repeat: repeat;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
    text-align: center;
    border-radius: 50px;
    background-position: 0%;
    animation: myfirst 2s;
    -webkit-animation: myfirst 2s infinite; /* Safari 与 Chrome */
    margin: 10 auto;
  }
  .btn::after {
    box-sizing: content-box;
    padding: 5px;
    position: absolute;
    top: -5px;
    left: -5px;
    height: 60px;
    width: 200px;
    background-image: linear-gradient(to right, #FF4040 , #F9F500,#64F900,#64F900,#0004F9,#F500F9, #FF4040);
    background-size: 400%;
    background-repeat: repeat;
    border-radius: 50px;
    background-position: 0%;
    animation: myfirst 2s;
    filter: blur(10px);
    -webkit-animation: myfirst 2s infinite; /* Safari 与 Chrome */
    content: '';
    z-index: -1;
  }

  @keyframes myfirst{
      from {background-position: 0%;}
      to {background-position: 130%;}
  }

  @-webkit-keyframes myfirst{
      from {background-position: 0%;}
      to {background-position: 130%;}
  }
</style>

