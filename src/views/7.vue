<template>
    <div>
        <css-doodle>
        :doodle {
            @grid: 25x1 / 18vmin;
        }
        :container {
            perspective: 30vmin;
        }

        @place-cell: center;
        @size: 100%;

        border: @r(2px) solid @pd(
            #00b8a9, #f8f3d4, #f6416c, #ffde7d
        );
        @random(.1) { border-style: dashed; }
        @random(.1) { border-style: dotted; }
        @random(.1) {
            border-width: @p(3px, 4px);
            border-style: double;
        }

        border-radius: 50%;
        transform-style: preserve-3d;
        will-change: transform, opacity;
        animation: scale-up 7s linear infinite;
        animation-delay: calc(-7s / @size() * @i());

        @keyframes scale-up {
            0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0);
            opacity: 0;
            }
            10% {
            opacity: 1;
            }
            95% {
            transform:
                translate3d(0, 0, 45vmin)
                rotateX(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateY(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateZ(calc(@p(-1, 1) * @r(30deg, 330deg)))
            }
        }
        </css-doodle>
    </div>
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

<style scoped>
    div { 
        margin: 0;
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background: #000; 
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>