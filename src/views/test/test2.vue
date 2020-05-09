<template>
  <span class="txt">{{ data.a }}</span>
</template>

<script>
export default {
  data() {
    return {
      data: { a: 'test2' }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
