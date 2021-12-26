<template>
  <div>
    <css-doodle>
    :doodle{
        @grid: 6x1 / 100%; 
    }
    
    @place-cell: center;
    @size: calc(120vw - 20 * (@row() - 1) * 1vw);
    
    border: 1px solid #333;
    background-color: #ccc;
    border-radius: 50%;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, .3);
    
    background-image: repeating-conic-gradient(#000 0 15deg, #FFF 0 30deg);
    animation: spin 20s linear infinite reverse;

    @odd {
        background-image: repeating-conic-gradient(#FFF 0 15deg, #000 0 30deg);
        animation: spin 20s linear infinite forwards;
    }
    
    @keyframes spin {
        to { transform:rotate(360deg) }
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