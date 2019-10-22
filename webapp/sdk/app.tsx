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

import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import '!file-loader?name=[name].[ext]!../app/favicon.ico'
import 'file-loader?name=[name].[ext]!../app/.htaccess'

import '../libs/react-resizable/css/styles.css'
import 'react-quill/dist/quill.snow.css'


import '../app/assets/fonts/iconfont.css'
import '../app/assets/override/antd.css'
import '../app/assets/override/react-grid.css'
import '../app/assets/override/datepicker.css'
import '../app/assets/less/style.less'

import * as echarts from 'echarts/lib/echarts'
import 'zrender/lib/svg/svg'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/sankey'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/treemap'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/chart/boxplot'
import 'echarts/lib/chart/graph'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/parallel'
import 'echarts/lib/chart/pictorialBar'
import 'echarts-wordcloud'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/brush'
import '../app/assets/js/china.js'

import { DEFAULT_ECHARTS_THEME } from 'app/globalConstants'
echarts.registerTheme('default', DEFAULT_ECHARTS_THEME)

import {sdk} from './api'




// setTimeout(() => {
//     sdk.reload('app')
// }, 10000)


// setTimeout(() => {
//     sdk.reload('app1')
// }, 10000)



// sdk.on('click', 'app1', ({data, sourceData}) => {
//     console.log('app1')
//     console.log(data)
//     console.log(sourceData)
// })

// const div = document.createElement('div')
// div.id = 'app1'
// div.style.display = 'absoult';
// div.style.position = 'absolute';
// div.style.top = '0px'
// div.style.bottom = '0px'
// div.style.left = '0px'
// div.style.right = '0px'
// div.style.width = '100%'
// div.style.height = '200px'
// // div.style.background = '#caa9fa'
// div.style.background = 'orange'


// document.body.appendChild(div)

// sdk.login({
//     email: 'hanruan@creditease.cn'
// }).then((data) => {
   
//       sdk.init({
//         tagName: 'app1',
//         projectId: 43,
//         widgetId: 161,
//         variables: [{
//             key: 'productId',
//             value: 'zma2'
//         }],
//         callback: (datasource, div) => {
//           div.style.height = `${datasource.length * 30}px`
//           console.log(datasource, div)
//         }
//       })
// })


// sdk.on('click', 'app1', ({data,  sourceData}) => {
//     console.log('app')
//     console.log(data)
//     console.log(sourceData)
// })



if (window) {
    window.sdk = sdk
}

// setTimeout(() => {
//     sdk.logout()
// }, 5000)


export default sdk


