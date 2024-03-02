<template>
  <div class="error">
    <span class="neg">OPERATOR ERROR</span>
    <p>
      An operator error exception has occured at FISSREAC0020093:09<br />
      FISSREAC0020077:14 FISSREAC0020023:17 FISSREAC0020088:22<br />
      neutron multiplication rate at spikevalue 99999999
    </p>
    <p>
      * Send us an e-mail to notify this and try it later.<br />

      * Consult core manual for instructions on proper core<br />
      maintenance and repair.
    </p>
    Press any link to continue <div class="css3-blink">_</div>
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent'
}
</script>

<style scoped>
.error {
  color: #ffffff;
  font-family: courier, sans-serif;
  font-size: 12pt;
  text-align: center;
  margin: 100px;
}

.neg {
  background: #fff;
  color: #0000aa;
  padding: 2px 8px;
  font-weight: bold;
}

p {
  margin: 30px 100px;
  text-align: center;
}

a,a:hover {
  color: inherit;
  font: inherit;
}

@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}
.css3-blink {
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  -webkit-animation-duration: 1s;
  display: inline;
}
</style>