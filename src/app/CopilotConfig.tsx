'use client'
import { WeatherContainer } from '@/components/WeatherContainer'
import { useCopilotAction } from '@copilotkit/react-core'
import { useCopilotChatSuggestions } from '@copilotkit/react-ui'

export function CopilotConfig() {
  useCopilotChatSuggestions({
    instructions: '提供一些关于Next.js的代码问题.使用中文',
    minSuggestions: 3,
  })

  useCopilotAction({
    name: 'weather',
    description: '查询城市天气',
    parameters: [
      {
        required: true,
        name: 'cityName',
        type: 'string',
        description: '城市名称',
      },
    ],
    handler: async ({ cityName }) => {
      const res = await fetch('/api/weather?city=' + cityName)
        .then(r => r.json())
        .catch(e => {
          return { code: '-1', msg: { reason: '请求失败' } }
        })
      if (res.code !== '200') {
        return `查询失败：${res.msg.reason}`
      }
      return res.daily
    },
    render: ({ status, args, result }) => {
      if (status === 'complete') {
        return <WeatherContainer list={result} />
      } else {
        return 'Processing...'
      }
    },
  })
  return <></>
}
