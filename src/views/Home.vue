<template>
<div class="ml-5 mt-5">
  Oh hi there
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AxiosResponse } from 'axios';

@Component({})
export default class Home extends Vue {
    private items: any [] = [];

    private created() {
      this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response: AxiosResponse) => {
        this.items = response.data;
      });
    }

    private mounted() {
    }
}


</script>
<style lang="scss">

</style>