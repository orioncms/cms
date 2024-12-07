<script setup>
import InstallForm from "@/Components/Install/InstallForm.vue";
import AuthenticationCard from "@/Components/AuthenticationCard.vue";
import AuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
</script>
<template>
    <div class="bg-slate-100 text-black/50">
        <div class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <AuthenticationCard>
                    <template #logo>
                        <AuthenticationCardLogo />
                    </template>
                    <InstallForm />
                </AuthenticationCard>
            </div>
        </div>
    </div>
</template>
