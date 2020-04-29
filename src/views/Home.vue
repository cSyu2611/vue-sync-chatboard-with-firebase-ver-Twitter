<template>
  <div class="home">
    ホーム画面
    <SignOut/>
  </div>
</template>

<script>
import SignOut from '@/components/SignOut'
export default {
  name: 'Home',
  components: {
    SignOut
  },
  methods: {
  }
}
</script>
