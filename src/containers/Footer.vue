<template>
    <footer>
        <BeSeller/>
        <Banner/>
        <Footer/>
    </footer>
</template>

<script>
import BeSeller from "@/components/BeSeller.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";



export default {
    components:{BeSeller, Banner, Footer}
}
</script>