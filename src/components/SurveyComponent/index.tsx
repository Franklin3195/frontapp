/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'survey-core/defaultV2.min.css'

import * as SurveyTheme from 'survey-core/themes'

import { FC, useState } from 'react'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

interface SurveyComponentProps {
  json: any
  onComplete: (result: any) => any
  edit?: boolean
  data?: any
}

const SurveyComponent: FC<SurveyComponentProps> = ({
  json,
  onComplete,
  edit = true,
  data
}) => {
  const [mode] = useState<string>(edit ? 'edit' : 'display')
  const survey = new Model(json)
  survey.applyTheme(SurveyTheme.SharpLightPanelless)
  survey.onComplete.add((sender, options) => {
    onComplete(sender.data)
    console.log(JSON.stringify(sender.data, null, 3))
  })
  survey.data = {
    'nps-score': 9,
    'promoter-features': ['performance', 'ui']
  }
  return <Survey model={survey} data={data} mode={mode} />
}

export default SurveyComponent
