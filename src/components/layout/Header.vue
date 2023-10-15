<template>
  <div class="top">
    <div class="header">
      <div class="left_logo">
        <BaseLogo />
        <BaseMenu />
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background-color: #fff;
    /* border-bottom: 1px solid; */
    position: fixed;
}

.header {
    width: 1220px;
}

.left_logo {
    display: flex;
    align-items: center;
}
</style>
