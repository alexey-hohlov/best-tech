<script setup lang="ts">
interface Props {
  message?: string;
}
withDefaults(defineProps<Props>(), {
  message: 'Здесь пока ничего нет',
});
</script>

<template>
  <section
    class="w-full flex justify-center mt-20 text-slate-400 text-4xl text-center"
  >
    {{ message }} &#128532
  </section>
</template>
