<template>
  <div class="load-chart">
    <div class="chart" ref="container"></div>
    <div class="percent">90%</div>
  </div>
</template>
<script setup lang="ts">
import { useEcharts } from '@/dashboard/hooks/useEcharts'
import { onMounted } from 'vue'

const { container, echarts, setOption } = useEcharts()
onMounted(() => {
  const options = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['80%', '100%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        animationDuration: 3000,
        animationEasing: 'cubicInOut',
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 90,
            name: 'Search Engine',
            itemStyle: {
              borderRadius: 10,
              // color: '#6949fb',
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                { offset: 0, color: '#de38fb' },
                { offset: 1, color: '#6732f3' },
              ]),
            },
          },
          { value: 10, name: 'Direct', itemStyle: { color: '#141428' } },
        ],
      },
    ],
  }
  setOption(options)
})
</script>
<style lang="scss" scoped>
.load-chart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  .chart {
    width: 80px;
    height: 80px;
  }
  .percent {
    position: absolute;
    font-size: 24px;
  }
}
</style>
