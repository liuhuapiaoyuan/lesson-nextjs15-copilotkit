import { CopilotChat } from '@copilotkit/react-ui'
import { CopilotConfig } from './CopilotConfig'

export default function Home() {
  return (
    <>
      <CopilotConfig />
      <CopilotChat
        className='h-screen'
        labels={{
          title: 'AI助理',
          placeholder: '输入您的问题',
          initial: '你好，我是你的AI助理',
        }}
      />
    </>
  )
}
