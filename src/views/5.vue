<template>
    <css-doodle>
        :doodle { 
            @grid: 1x26 / 100vw 100vh; 
            background: #000;
        } 
        
        :container { 
            max-width: 70vw;
            margin: 0 auto;
        } 
        

        @even {
            position: relative;
            height: 70%;
            top: 10%;
            background: linear-gradient(to top, rgba(@r(50, 255), @r(255, 255), 255, 1), rgba(255, 255, 255, .1) 80%);
            transform: perspective(@r(7, 35)vmin) rotateX(-@r(15, 45)deg) skewX(@r(-60, 60)deg);
            transform-origin: center bottom;
            box-shadow: 0 0 2vmin .1vmin rgba(255, 255, 255, .7);
            opacity: 0;
            animation: fadeIn 5s infinite calc(@index() * 0.03s);
        }
        
        @keyframes fadeIn {
            1% {
                opacity: 1;
            }
            10% {
                opacity: 1;
                filter: hue-rotate(0);
            }
            50% {
                opacity: 1;
                transform: perspective(@r(10, 35)vmin) rotateX(-@r(15, 45)deg) skewX(0deg);
                filter: hue-rotate(360deg);
            }
            50.1% {
                opacity: 0;
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
