<template>
    <div>
         <myheader :flag="flag" />
        <phone />
       <myfooter />
        
    </div>
</template>
<script>
import myheader from "@/components/headerTop"
import phone from "@/components/phonedownload"
import myfooter from "@/components/footer"
export default {
    data () {
        return {
            flag:[false,false,true,false,false]
        }
    },
    components: {
        myheader,
        phone,
        myfooter
    }
}
</script>