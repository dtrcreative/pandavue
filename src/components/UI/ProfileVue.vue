<template>
  <div>
    <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
    />

  </div>
  <div class="user-name-label">
    <strong>
      <p>
        <slot>
          {{ this.user.username }}
        </slot>
      </p>
    </strong>
  </div>

</template>

<script>
export default {
  name: "ProfileVue"
}
</script>

<style scoped>

</style>