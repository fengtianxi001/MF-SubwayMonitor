<template>
  <div class="situation-chart">
    <div class="chart" ref="container"></div>
    <div class="statistics">
      <span>设备总数</span>
      <span>900</span>
    </div>
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
        type: 'pie',
        avoidLabelOverlap: false,
        padAngle: 5,
        radius: ['65%', '80%'],
        hoverAnimation: false,
        animationDuration: 3000,
        animationEasing: 'cubicInOut',
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 50,
            name: 'Direct',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                { offset: 0, color: '#ffd244' },
                { offset: 1, color: '#ff362e' },
              ]),
            },
          },
          {
            value: 20,
            name: 'Search',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                { offset: 0, color: '#de38fb' },
                { offset: 1, color: '#6732f3' },
              ]),
            },
          },
          {
            value: 20,
            name: 'Direct',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                { offset: 0, color: '#32fedb' },
                { offset: 1, color: '#0091ed' },
              ]),
            },
          },

          {
            value: 10,
            name: 'Direct',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                { offset: 0, color: '#8689b4' },
                { offset: 1, color: '#ffffff' },
              ]),
            },
          },
        ],
      },
    ],
  }
  setOption(options)
})
</script>
<style lang="scss" scoped>
.situation-chart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  .chart {
    width: 100%;
    height: 100%;
  }
  .statistics {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    span:first-child {
      font-size: 16px;
    }
    span:last-child {
      font-size: 30px;
    }
  }
}
</style>
