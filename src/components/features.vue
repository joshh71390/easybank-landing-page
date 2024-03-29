<script setup lang="ts">
import Feature from '@components/feature.vue'
import OnlineIcon from '@assets/images/icon-online.svg'
import BudgetingIcon from '@assets/images/icon-budgeting.svg'
import OnboardingIcon from '@assets/images/icon-onboarding.svg'
import ApiIcon from '@assets/images/icon-api.svg'

const features = [
    {
        name: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        iconSrc: OnlineIcon,
        iconAlt: "Online banking icon"
    },
    {
        name: "Simple Budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
        iconSrc: BudgetingIcon,
        iconAlt: "Budgeting icon"
    },
    {
        name: "Fast Onboarding",
        description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        iconSrc: OnboardingIcon,
        iconAlt: "Onboarding icon"
    },
    {
        name: "Open API",
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        iconSrc: ApiIcon,
        iconAlt: "API icon"
    },
]
</script>

<template>
    <div class="features">
        <div class="features__container">
            <h2 class="features__title">Why choose Easybank?</h2>
            <p class="features__description">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <ul class="features__list">
                <Feature
                    v-for="(feature, index) in features"
                    :name="feature.name"
                    :description="feature.description"
                    :iconSrc="feature.iconSrc"
                    :iconAlt="feature.iconAlt"
                    :key="index"
                />
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/styles/variables';
@use '../assets/styles/mixins';

.features {
    width: 100%;
    height: auto;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-color: variables.$color-light-grayish-blue;
    text-align: center;

    @media screen and (min-width: variables.$screen-md) {
        text-align: start;
    }

    &__container {
        @include mixins.container;
    }

    &__title {
        @include mixins.text-heading;
        margin-bottom: 2rem;
    }

    &__description {
        @include mixins.text-body;
        margin-bottom: 6rem;

        @media screen and (min-width: variables.$screen-md) {
            width: 50rem;
        }
    }

    &__list {
        @include mixins.grid;
    }
}
</style>