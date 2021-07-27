<template>
  <div class="hello">

    <input type="text" v-model="searchString" @input="filterList">
    <ul class="">
      <li v-for="entry in result" :key="entry">{{ entry }}</li>
    </ul>

  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
export default {
  name: 'List',
  data() {
    return {
      searchString: '',
      entries: [],
      result: [],
    }
  },
  created() {
    axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          this.entries = _.map(response.data, _.property('title'));
          this.result = this.entries;
        });
  },
  methods: {
    filterList() {
      this.result = this.entries.filter((str) => { return str.includes(this.searchString); });
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
