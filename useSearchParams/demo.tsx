import React from 'react'
import { Radio } from 'antd'
import { useSearchParams } from '@neural/ui'

type IModelType = 'TEXT_GENERATION' | 'IMAGE_GENERATION'

export default function Demo() {
  const searchParams = useSearchParams<'modelType' | 'status'>()

  const modelTypeInSearch = searchParams.get('modelType')
  const statusInSearch = searchParams.get('status')

  console.log('statusInSearch:', statusInSearch)

  const [modelType, setModelType] = React.useState(modelTypeInSearch)

  return (
    <main>
      <p>请切换后刷新页面，可以看到 modelType 和 URL 保持一致</p>

      <Radio.Group
        value={modelType}
        onChange={(e) => {
          const value = e.target.value as IModelType

          setModelType(value)
          searchParams.set('modelType', value)
        }}
      >
        <Radio.Button value='TEXT_GENERATION'>✍️ TEXT_GENERATION</Radio.Button>
        <Radio.Button value='IMAGE_GENERATION'>🖼️ IMAGE_GENERATION</Radio.Button>
      </Radio.Group>

      <p>modelType: {modelTypeInSearch}</p>
    </main>
  )
}
