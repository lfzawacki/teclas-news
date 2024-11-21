<template>
  <div
    class="
      tw-self-center
      tw-flex
      tw-flex-col
      tw-items-center
    "
  >
    <img
      src="/static/empty.svg"
      class="
        tw-h-[30vw]

        lg:tw-h-[14rem]
      "
    >
    <div
      class="
        tw-flex
        tw-flex-col
        tw-items-center
        tw-gap-8
        tw-font-[300]
        tw-text-gray-500
      "
    >
      {{ t('no_results', { capitalize: true }) }}

      <slot />
    </div>
  </div>
</template>
