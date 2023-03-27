<template>
  <select class="form" v-model="sort">
    <option
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:value="item"
        v-text="item.title"
    ></option>
  </select>
</template>

<script>
export default {
  name: "AccOwnerList",

  data() {
    return {
      items: [{
        id: 1,
        title: 'Item 1',
        sort: 1,
      }, {
        id: 2,
        title: 'Item 2',
        sort: 2,
      }, ],
      sort: null,
    }
  },
}
</script>

<style scoped>
  select{
    border-radius: 3px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
</style>