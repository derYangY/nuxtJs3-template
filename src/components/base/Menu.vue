<template>
    <div class="base_menu">
        <NuxtLink to="/">
            <div class="item" @click="change_menu('index')">
                <div class="icon">
                    <img src="../../assets/Images/menu/index.png" alt="" v-if="menu != 'index'">
                    <img src="../../assets/Images/menu/index_active.png" alt="" v-if="menu == 'index'">
                </div>
                <div class="name" :class="menu == 'index' ? 'name_active' : ''">首页</div>
            </div>
        </NuxtLink>
        <NuxtLink to="/teenagers">
            <div class="item" @click="change_menu('teenagers')">
                <div class="icon">
                    <img src="../../assets/Images/menu/teenagers.png" alt="" v-if="menu != 'teenagers'">
                    <img src="../../assets/Images/menu/teenagers_active.png" alt="" v-if="menu == 'teenagers'">
                </div>
                <div class="name" :class="menu == 'teenagers' ? 'name_active' : ''">青少课程</div>
            </div>
        </NuxtLink>
        <NuxtLink to="/mature">
            <div class="item" @click="change_menu('mature')">
                <div class="icon">
                    <img src="../../assets/Images/menu/mature.png" alt="" v-if="menu != 'mature'">
                    <img src="../../assets/Images/menu/mature_active.png" alt="" v-if="menu == 'mature'">
                </div>
                <div class="name" :class="menu == 'mature' ? 'name_active' : ''">成人课程</div>
            </div>
        </NuxtLink>
        <NuxtLink to="/introduce">
            <div class="item" @click="change_menu('introduce')">
                <div class="icon">
                    <img src="../../assets/Images/menu/introduce.png" alt="" v-if="menu != 'introduce'">
                    <img src="../../assets/Images/menu/introduce_active.png" alt="" v-if="menu == 'introduce'">
                </div>
                <div class="name" :class="menu == 'introduce' ? 'name_active' : ''">师资介绍</div>
            </div>
        </NuxtLink>
        <NuxtLink to="/reservation">
            <div class="item" @click="change_menu('reservation')">
                <div class="icon">
                    <img src="../../assets/Images/menu/reservation.png" alt="" v-if="menu != 'reservation'">
                    <img src="../../assets/Images/menu/reservation_active.png" alt="" v-if="menu == 'reservation'">
                </div>
                <div class="name" :class="menu == 'reservation' ? 'name_active' : ''">预约试听</div>
            </div>
        </NuxtLink>
        <NuxtLink to="/cooperation">
            <div class="item" @click="change_menu('cooperation')">
                <div class="icon">
                    <img src="../../assets/Images/menu/cooperation.png" alt="" v-if="menu != 'cooperation'">
                    <img src="../../assets/Images/menu/cooperation_active.png" alt="" v-if="menu == 'cooperation'">
                </div>
                <div class="name" :class="menu == 'cooperation' ? 'name_active' : ''">商务合作</div>
            </div>
        </NuxtLink>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const route = useRoute()
const { menu, change_menu } = useMenu()
console.log(route.name);
change_menu(route.name)

</script>

<style scoped>
.base_menu {
    margin-left: 40px;
    display: flex;
}

a {
    color: black;
    text-decoration: none;
}

.item {
    margin-right: 15px;
    display: flex;
    align-items: center;
}

.icon {
    width: 32px;
    height: 32px;
}

img {
    width: 32px;
    height: 32px;
}

.name {
    margin-left: 0px;
    color: #1B1464;
}

.name_active {
    color: #F15A24;
}
</style>