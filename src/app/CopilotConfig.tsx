'use client'
import { useCopilotChatSuggestions } from '@copilotkit/react-ui'

export function CopilotConfig() {
  useCopilotChatSuggestions({
    instructions: '提供一些关于Next.js的代码问题.使用中文',
    minSuggestions: 3,
  })

  return <></>
}
