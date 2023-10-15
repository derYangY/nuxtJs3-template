<template>
    <div>
        <slot name="img" />
        <NuxtLink to="/reservation">
            <div class="button" @click="change_menu('reservation')">
                <img src="../../assets/Images/yuyue.png" alt="">
                <div class="title">点击预约</div>
            </div>
        </NuxtLink>

    </div>
</template>

<script setup>
const { menu, change_menu } = useMenu()

</script>

<style scoped>
.button {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    position: fixed;
    top: 400px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

img {
    width: 50px;
    height: 50px;
}

.title {
    color: black;
}
</style>