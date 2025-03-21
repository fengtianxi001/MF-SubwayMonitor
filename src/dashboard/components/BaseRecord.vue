<template>
  <table class="base-record" ref="container">
    <tr class="base-record-row" v-for="(row, rowIndex) in configs">
      <td
        class="base-record-column"
        v-for="column in row"
        v-bind="{ ...column.props }"
      >
        {{ column.value }}
      </td>
    </tr>
  </table>
</template>
<script setup lang="tsx">
import { onMounted, ref, watch, nextTick, onUnmounted } from 'vue'

interface PropsType {
  data: any[]
  columns: any[]
}
const props = defineProps<PropsType>()

const configs = ref<any[]>([])
const container = ref()
const height = ref('-10px')
let timer: any

onMounted(() => {
  watch(
    () => [props.data, props.columns],
    () => {
      configs.value = props.data.map((row) => {
        return props.columns.map((column, columnIndex) => {
          const isFirst = columnIndex === 0
          const isLast = columnIndex === props.columns.length - 1
          const align = isFirst ? 'left' : isLast ? 'right' : 'center'
          return {
            value: row[column.key] ?? '--',
            props: { align },
          }
        })
      })
      if (timer) window.clearInterval(timer)
      timer = setInterval(() => {
        container.value.classList.add('base-record-scroll')
        setTimeout(() => {
          if (!timer) return void 0
          container.value.classList.remove('base-record-scroll')
          configs.value.push(configs.value.shift())
        }, 2000)
      }, 3000)
      nextTick(() => {
        const el = container.value.querySelector('.base-record-row')
        if (el) height.value = `-${el.clientHeight + 2}px`
      })
    },
    {
      immediate: true,
    }
  )
})
onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})
</script>
<style lang="scss" scoped>
$height: v-bind(height);
.base-record {
  position: relative;
  width: 100%;
  height: 100%;
  &.base-record-scroll {
    position: relative;
    animation: row-out 1s linear forwards;
    .base-record-row:first-child {
      opacity: 0;
      transition: opacity 1s;
    }
  }
  .base-record-row {
    height: 30px;
  }
}
@keyframes row-out {
  from {
    top: 0;
  }
  to {
    top: $height;
  }
}
</style>
