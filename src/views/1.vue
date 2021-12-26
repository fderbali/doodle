<template>
    <css-doodle grid="11">
        :doodle {
            @size: 100vmax;
            position:fixed;
        }
        
        background: linear-gradient(@pick-d(0deg, 90deg, 180deg, 270deg), #FF442B 25%, #FF942B 25% 50%, #218FA9 50%);
        
        :after {
            content: "";
            @size: @r(50%, 90%);
            border-radius: 50%;
            background: radial-gradient(circle at @r(100%) @r(100%), #FFEBC2 0% 50%, #FFB600 50% 100%);
            display: @pick(none, unset);
            transform: translateX(@r(-30%, -60%));
            animation: floatAnim @r(0.3s, 0.35s) @r(1.5s) infinite alternate ease-in-out;
            z-index:100;
        }
        
        @keyframes floatAnim {
            100% {
                transform: translateX(@r(30%, 60%));
            }
        }
    </css-doodle>
</template>

<script>
import router from "@/router";
export default {
    mounted(){
        setTimeout(()=>{
            let n = Math.floor(Math.random() * 10) + 1;
            router.push({ name: `${n}` });
        },5000);
    }
}
</script>
