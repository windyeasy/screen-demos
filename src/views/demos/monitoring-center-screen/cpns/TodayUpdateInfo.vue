<script setup lang="ts">
import type { ITaskUpdateInfo } from '../config/types'
import type { ScrollTableColumnProps } from '@/components/scroll-table/types'

defineProps<{
  data: ITaskUpdateInfo
}>()

const columns: ScrollTableColumnProps[] = [
  {
    prop: 'type',
    label: '类型',
    align: 'center',
    slotName: 'type',
    width: '60px',
  },
  {
    prop: 'date',
    label: '时间',
    align: 'center',
  },

  {
    prop: 'storehouse',
    label: '仓库',
    align: 'center',
    color: '#da821f',
    width: '100px',
  },
  {
    prop: 'shippingCompany',
    label: '发货单位',
    align: 'center',
    color: '#e4e6ef',

  },
  {
    prop: 'orderNumber',
    label: '订单号',
    align: 'center',
  },
  {
    prop: 'licensePlateNumber',
    label: '车牌号',
    align: 'center',
  },
  {
    prop: 'materialTypeName',
    label: '物资',
    align: 'center',
    color: '#e4e6ef',
    width: '60px',
  },
  {
    prop: 'weight',
    label: '重量',
    align: 'center',
    color: '#e4e6ef',
  },
]
</script>

<template>
  <ScreenPanel3 title="实时作业动态">
    <div class="inner grid  grid-cols-9  h-full box-border overflow-hidden">
      <div class="col-span-3 mt-6 flex">
        <TaskCard
          icon="i-carbon-bottom-panel-open"
          title="出库量-今日出库总量"
          :total="data.todayInboundInfo.total"
          unit="单" :task-number1="data.todayInboundInfo.inProgress"
          :task-number2="data.todayInboundInfo.outOfStock"
          color="#0175fa"
        />
        <TaskCard
          icon="i-carbon-bottom-panel-close"
          title="入库量-今日入库总量"
          :total="data.todayOutboundInfo.total"
          unit="单" :task-number1="data.todayOutboundInfo.inProgress"
          :task-number2="data.todayOutboundInfo.outOfStock"
          color="#02c7fc"
          sub-title2="待入库"
        />
      </div>
      <div class="col-span-6 h-full box-border">
        <ScrollTable
          :data="data.inboundAndOutboundInfos"
          :columns="columns"
          stripe
          height="232px"
          class="text-[#8389a4]"
          head-background-color="#0a1438"
        >
          <template #type="{ row }">
            <div class="flex justify-center items-center">
              <template v-if="row.type === 1">
                <div
                  class="text-white text-sm inline-block flex justify-center items-center w-[20px] h-20px rounded-[40px] bg-[#175ed4]"
                >
                  出
                </div>
              </template>
              <template v-else>
                <div
                  class="text-white text-sm inline-block flex justify-center items-center w-[20px] h-20px rounded-[40px] bg-[#0cc0fa]"
                >
                  入
                </div>
              </template>
            </div>
          </template>
        </ScrollTable>
      </div>
    </div>
  </ScreenPanel3>
</template>
