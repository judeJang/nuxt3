<template>
    <header class="navigation self_module">
        <HomeHeaderBanner @banner-close="bannerClose" />
    </header>
</template>

<script setup lang="ts">
// <HomeHeaderBanner @banner-close="bannerClose" />
const bannerClose = (data: boolean) => {
    console.log('bannerClose', data);
};
</script>
