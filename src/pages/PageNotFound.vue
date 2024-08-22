<script setup lang='ts'>
import {Button} from '@/components'
import {useRouter} from 'vue-router'

const router = useRouter()

const handleBack = () => {
  router.back()
}
</script>

<template>
  <section class="w-full flex flex-col items-center gap-10 mt-20">
    <div class='flex flex-col items-center text-5xl font-bold text-slate-200'>
      404
      <span class='font-bold'>Page Not Found</span>
    </div>
    <div class='flex flex-col items-center gap-6'>
      <span class='text-slate-400 text-4xl'>
      Похоже такой страницы не существует &#128532
      </span>
      <Button class=' bg-sky-400 text-white' title='Вернуться назад' :onClick='handleBack'/>
    </div>
  </section>
</template>
