<template>
  <q-page class="flex flex-center">
    <div class="col-lg-3 col-sm-6 col-sm-10 col-xs-12">
      <div>Open the browser Dev Tools, then find "Dotenv Test:"</div>
      <div>
        <pre>
{{ JSON.stringify(output, null, 2)}}
        </pre>
      </div>
      <div>SHELL is coming from an environmental variable inside the .env file</div>
      <div>SHELL=${SHELL}</div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      output: {
        TEST: process.env.TEST,
        SHELL: process.env.SHELL
      }
    }
  }
}
</script>
