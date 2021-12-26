<template>
    <div>
    <css-doodle>
    :doodle {
        @grid: 50x1 / 100%;
        @use: var(--filter);
    }
    :container {
        animation: r 20s linear infinite;
    }
    @place-cell: center;
    @size: 100% 2vmin;
    background: @pd(#60569e, #e6437d, #ebbf4d);
    transform-origin: 1vmin center;
    transform:
        translateX(50%)
        rotate(calc(@i() * 360deg / @size()));
    
    @keyframes r {
        to { transform: rotate(1turn) }
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

    div {
        --filter: (
            filter: @svg-filter(<svg>
            <filter>
                <feTurbulence type="fractalNoise" 
                baseFrequency=".02" numOctaves="1" />
                <feDisplacementMap in="SourceGraphic" scale="240" />
            </filter>
            </svg>); 
        );
    }
</style>