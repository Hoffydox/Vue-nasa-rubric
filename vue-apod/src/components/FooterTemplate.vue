<template>
  <footer id="footer">
    <h4>Nasa API:</h4>
    <address id="address" v-html="footerData.address">National Aeronautics and Space Administration</address>
    <div id="email" v-html="footerData.email">The email address</div>
  </footer>
</template>
<script>
export default {
  name: "FooterTemplate",
  props: ["footerData"]
};
</script>
