<template>
    <css-doodle grid="11" class="doodle">
        :doodle {
            @grid: 10 / 100%;
            background-color:#f9ff0052;
            position:fixed;
        }
        background: @pick(#29B6F6, #FDD835, #5E35B1, #FFCCBC, #E8EAF6, #B2DFDB, #1B5E20, #2979FF);
        opacity: @r(.9);
        clip-path: polygon(
            @rand(50%) 0, 50% @rand(70%), 0 @rand(100%)
        );

        animation: test infinite @r(10s, 15s) linear;

        @keyframes test {
            0% {
                transform: translate3d(0, 0, 0);
            }
            50% {
                transform: translate3d(@r(-500%, 1000%), @r(-500%, 1000%), 0);
            }
            100% {
                transform: translate3d(0, 0, 0);
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