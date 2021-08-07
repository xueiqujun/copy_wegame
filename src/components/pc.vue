<template>
    <div>
        <myheader :flag="flag"/>
        <pc />
        <myfooter />
    </div>
</template>

<script>
import myheader from "@/components/headerTop"
import pc from "@/components/PcInterface"
import myfooter from "@/components/footer"
export default {
    data () {
        return {
            flag:[false,true,false,false,false]
        }
    },
    components: {
        myheader,
        pc,
        myfooter
    }
}
</script>