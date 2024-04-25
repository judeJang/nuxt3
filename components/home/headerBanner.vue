<template>
    <section class="header_event">
        <a href="#">
            <img
                v-if="heaerBannerData"
                :src="heaerBannerData.imgUrl"
                alt="상단띠베너"
                class="banner"
            />
        </a>
        <button type="button" class="close_btn" @click="bannerClose()"></button>
    </section>
</template>

<script setup lang="ts">
interface HeaderBanner {
    imgUrl?: string;
    description?: string;
    landingUrl?: string;
    bgColor?: string;
}

const heaerBannerData = ref<HeaderBanner>();

const imgPath = ref(
    'https://s3.ap-northeast-2.amazonaws.com/mustit-upload/header_event_image/mobile/mo-top-banner-event-220801.png',
);

const emit = defineEmits(['bannerClose', 'bannerOpen']);

const bannerClose = () => {
    emit('bannerClose', false);
    emit('bannerOpen', true);
};

const { data, error } = await useFetch(
    'https://953458fc-caf7-42a1-a4fa-ceb7d4522934.mock.pstmn.io/homeHeaderBanner',
);

// 데이터 사용
if (data) {
    console.log('받은 데이터:', data);
    heaerBannerData.value = data as HeaderBanner;
    // console.log(heaerBannerData);
}

// 요청이 실패했을 때 오류 처리
if (error.value) {
    console.error('오류 발생:', error);
}
</script>
