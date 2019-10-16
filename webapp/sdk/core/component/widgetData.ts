export const data = [{"name":"Ada","sum(age)":3718},{"name":"Alan","sum(age)":4198},{"name":"Alonzo","sum(age)":2918},{"name":"Aria","sum(age)":3065},{"name":"Cook","sum(age)":3287},{"name":"Jack","sum(age)":3382},{"name":"Jerry","sum(age)":3578},{"name":"Jimmy","sum(age)":3055},{"name":"Kate","sum(age)":3979},{"name":"Linda","sum(age)":4452},{"name":"Mike","sum(age)":3835},{"name":"Tom","sum(age)":3815},{"name":"Wil","sum(age)":4167},{"name":"Windy","sum(age)":2869},{"name":"wo","sum(age)":1}]



export const  renderType = 'rerender'


export const widgetProps = {
	"cols": [{
		"name": "name",
		"visualType": "string",
		"type": "category",
		"config": true,
		"field": {
			"alias": "",
			"desc": "",
			"useExpression": false
		},
		"format": {
			"formatType": "default"
		},
		"from": "cols"
	}],
	"rows": [],
	"metrics": [{
		"name": "age@davinci@64284A55",
		"visualType": "number",
		"type": "value",
		"agg": "sum",
		"config": true,
		"chart": {
			"id": 3,
			"name": "bar",
			"title": "柱状图",
			"icon": "icon-chart-bar",
			"coordinate": "cartesian",
			"rules": [{
				"dimension": [0, 9999],
				"metric": [1, 9999]
			}],
			"dimetionAxis": "col",
			"data": {
				"cols": {
					"title": "列",
					"type": "category"
				},
				"rows": {
					"title": "行",
					"type": "category"
				},
				"metrics": {
					"title": "指标",
					"type": "value"
				},
				"filters": {
					"title": "筛选",
					"type": "all"
				},
				"color": {
					"title": "颜色",
					"type": "category"
				},
				"label": {
					"title": "标签",
					"type": "all"
				},
				"tip": {
					"title": "提示信息",
					"type": "value"
				}
			},
			"style": {
				"xAxis": {
					"showLine": true,
					"lineStyle": "solid",
					"lineSize": "1",
					"lineColor": "#D9D9D9",
					"showLabel": true,
					"labelFontFamily": "PingFang SC",
					"labelFontSize": "12",
					"labelColor": "#666"
				},
				"yAxis": {
					"showLine": true,
					"lineStyle": "solid",
					"lineSize": "1",
					"lineColor": "#D9D9D9",
					"showLabel": true,
					"labelFontFamily": "PingFang SC",
					"labelFontSize": "12",
					"labelColor": "#666",
					"showTitleAndUnit": true,
					"titleFontFamily": "PingFang SC",
					"titleFontSize": "12",
					"titleColor": "#666"
				},
				"splitLine": {
					"showHorizontalLine": true,
					"horizontalLineStyle": "dashed",
					"horizontalLineSize": "1",
					"horizontalLineColor": "#D9D9D9",
					"showVerticalLine": false,
					"verticalLineStyle": "dashed",
					"verticalLineSize": "1",
					"verticalLineColor": "#D9D9D9"
				},
				"pivot": {
					"fontFamily": "PingFang SC",
					"fontSize": "12",
					"color": "#666",
					"lineStyle": "solid",
					"lineColor": "#D9D9D9",
					"headerBackgroundColor": "#f7f7f7"
				}
			}
		},
		"field": {
			"alias": "",
			"desc": "",
			"useExpression": false
		},
		"format": {
			"formatType": "default"
		},
		"from": "metrics"
	}],
	"filters": [],
	"color": {
		"title": "颜色",
		"type": "category",
		"value": {
			"all": "#509af2",
			"age@davinci@64284A55": "#509af2"
		},
		"items": []
	},
	"label": {
		"title": "标签",
		"type": "all",
		"items": []
	},
	"tip": {
		"title": "提示信息",
		"type": "value",
		"items": []
	},
	"chartStyles": {
		"xAxis": {
			"showLine": true,
			"lineStyle": "solid",
			"lineSize": "1",
			"lineColor": "#D9D9D9",
			"showLabel": true,
			"labelFontFamily": "PingFang SC",
			"labelFontSize": "12",
			"labelColor": "#666"
		},
		"yAxis": {
			"showLine": true,
			"lineStyle": "solid",
			"lineSize": "1",
			"lineColor": "#D9D9D9",
			"showLabel": true,
			"labelFontFamily": "PingFang SC",
			"labelFontSize": "12",
			"labelColor": "#666",
			"showTitleAndUnit": true,
			"titleFontFamily": "PingFang SC",
			"titleFontSize": "12",
			"titleColor": "#666"
		},
		"splitLine": {
			"showHorizontalLine": true,
			"horizontalLineStyle": "dashed",
			"horizontalLineSize": "1",
			"horizontalLineColor": "#D9D9D9",
			"showVerticalLine": false,
			"verticalLineStyle": "dashed",
			"verticalLineSize": "1",
			"verticalLineColor": "#D9D9D9"
		},
		"pivot": {
			"fontFamily": "PingFang SC",
			"fontSize": "12",
			"color": "#666",
			"lineStyle": "solid",
			"lineColor": "#D9D9D9",
			"headerBackgroundColor": "#f7f7f7"
		}
	},
	"selectedChart": 1,
	"data": [],
	"pagination": {
		"pageNo": 0,
		"pageSize": 0,
		"withPaging": false,
		"totalCount": 0
	},
	"dimetionAxis": "col",
	"renderType": "rerender",
	"orders": [],
	"mode": "pivot",
	"model": {
		"id": {
			"sqlType": "INT",
			"visualType": "number",
			"modelType": "value"
		},
		"name": {
			"sqlType": "VARCHAR",
			"visualType": "string",
			"modelType": "category"
		},
		"age": {
			"sqlType": "INT",
			"visualType": "number",
			"modelType": "value"
		},
		"sex": {
			"sqlType": "VARCHAR",
			"visualType": "string",
			"modelType": "category"
		},
		"birthday": {
			"sqlType": "DATE",
			"visualType": "date",
			"modelType": "category"
		},
		"nation": {
			"sqlType": "VARCHAR",
			"visualType": "string",
			"modelType": "category"
		},
		"city": {
			"sqlType": "VARCHAR",
			"visualType": "string",
			"modelType": "category"
		},
		"education": {
			"sqlType": "VARCHAR",
			"visualType": "string",
			"modelType": "category"
		},
		"salary": {
			"sqlType": "DECIMAL",
			"visualType": "number",
			"modelType": "value"
		},
		"married": {
			"sqlType": "INT",
			"visualType": "number",
			"modelType": "value"
		}
	},
	"controls": [{
		"cache": false,
		"operator": "in",
		"expired": 300,
		"width": 0,
		"name": "name",
		"interactionType": "column",
		"customOptions": false,
		"fields": {
			"name": "name",
			"type": "VARCHAR"
		},
		"type": "select",
		"key": "B5DC1C72",
		"multiple": true
	}],
	"computed": [],
	"cache": false,
	"expired": 300,
	"autoLoadData": true
}



export const data2 = [{"name":"Alan","sum(age)":497}]

export const data3 = [{"name":"Alan","sum(age)":91},{"name":"Alonzo","sum(age)":84},{"name":"Cook","sum(age)":12},{"name":"Jerry","sum(age)":124},{"name":"Kate","sum(age)":173},{"name":"Linda","sum(age)":97},{"name":"Mike","sum(age)":118},{"name":"Tom","sum(age)":113},{"name":"Wil","sum(age)":12},{"name":"Windy","sum(age)":156}]

export const data4 = [{"name":"Ada","sum(age)":96},{"name":"Alonzo","sum(age)":125},{"name":"Cook","sum(age)":93},{"name":"Jack","sum(age)":59},{"name":"Jimmy","sum(age)":79},{"name":"Kate","sum(age)":97},{"name":"Mike","sum(age)":17},{"name":"Tom","sum(age)":74},{"name":"Wil","sum(age)":185}]

