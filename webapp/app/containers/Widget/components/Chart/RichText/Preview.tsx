/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import React from 'react'
import { getFormattedValue } from '../../Config/Format'
const Styles = require('./RichText.less')

interface IRichTextPreviewProps {
  content: string
  data: any[]
  fieldBoundaries: [string, string]
  mapFields: object
  onCheckTableInteract?: () => boolean
  onDoInteract?: (triggerData: any) => void
  getDataDrillDetail?: (position: string) => void
  selectedChart: number
  selectedItems?: number[]
  onSelectChartsItems?: (selectedItems: number[]) => void
}

export class RichTextPreview extends React.PureComponent<IRichTextPreviewProps> {

  public clickQl = () => {
    const {data} = this.props
    this.collectSelectedItems(data)
  }
  public collectSelectedItems = (params) => {
    const { data, onSelectChartsItems, selectedChart, onDoInteract, onCheckTableInteract } = this.props
    let selectedItems = []
    if (this.props.selectedItems && this.props.selectedItems.length) {
      selectedItems = [...this.props.selectedItems]
    }
    const { getDataDrillDetail } = this.props
    let dataIndex = params.dataIndex
    if (selectedChart === 4) {
      dataIndex = params.seriesIndex
    }
    if (selectedItems.length === 0) {
      selectedItems.push(dataIndex)
    } else {
      const isb = selectedItems.some((item) => item === dataIndex)
      if (isb) {
        for (let index = 0, l = selectedItems.length; index < l; index++) {
          if (selectedItems[index] === dataIndex) {
            selectedItems.splice(index, 1)
            break
          }
        }
      } else {
        selectedItems.push(dataIndex)
      }
    }

    const resultData = selectedItems.map((item) => {
      return data[item]
    })
    const brushed = [{0: Object.values(resultData)}]
    const sourceData = Object.values(resultData)
    const isInteractiveChart = onCheckTableInteract && onCheckTableInteract()
    if (isInteractiveChart && onDoInteract) {
      const triggerData = sourceData
      onDoInteract(triggerData)
    }
    setTimeout(() => {
      if (getDataDrillDetail) {
        getDataDrillDetail(JSON.stringify({range: null, brushed, sourceData}))
      }
    }, 500)
    if (onSelectChartsItems) {
      onSelectChartsItems(selectedItems)
    }
  }

  private renderFormattedText = () => {
    const { content, data, fieldBoundaries, mapFields } = this.props
    const [ prefix, suffix ] = fieldBoundaries
    const fieldRegx = new RegExp(`${prefix}(.+?)${suffix}`, 'g')

    const formattedText = content.replace(fieldRegx, (_, p1: string) => {
      if (!data.length || data[0][p1] === null) { return '' }
      let text = data.map((item) => item[p1])
      if (mapFields[p1]) {
        const config = mapFields[p1]
        text = text.map((item) => getFormattedValue(item, config.format))
      }
      return text.join(', ')
    })
    return formattedText
  }

  public render () {
    return (
      <div className={Styles.content}>
        <div
          onClick={this.clickQl}
          className="ql-editor"
          dangerouslySetInnerHTML={{__html: this.renderFormattedText()}}
        />
      </div>
    )
  }
}

export default RichTextPreview

