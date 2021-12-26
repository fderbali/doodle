<template>
  <div>
    <css-doodle>
    --cycle: @r(2s, 10s, .1);

    :doodle {
      @grid: 1x20 / 800px;
    }

    @place-cell: center;
    @size: calc(@i() * 10%);

    border-radius: 50%;
    border-style: @pick(dotted dashed, dashed double, double dotted);
    border-width: calc(@i() * .5em);
    border-color: hsla(
      calc(@r(50, 100, 10) * @i()), 80%, 80%,
      calc(20 / @i() * .4)
    );
    transform: rotate(@r(360deg));

    animation: rotation var(--cycle) linear infinite;

    @keyframes rotation {
      0 { transform: rotate(0deg); }
      25% { transform: scale(.7); }
      50% {
        transform: rotate(359deg);
        transform: scale(1.2);
      }
      75% { transform: scale(.4); }
      100% {
        transform: rotate(0deg);
        transform: scale(1);
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
        background: rgb(35, 31, 169); 
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>