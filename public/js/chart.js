AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "category",
					"rotate": true,
					"autoMarginOffset": 40,
					"marginRight": 60,
					"marginTop": 60,
					"startDuration": 1,
					"fontSize": 13,
					"handDrawScatter": 4,
					"handDrawThickness": 2,
					"precision": 0,
					"theme": "light",
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[category]]:[[value]]",
							"fillAlphas": 1,
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"labelText": "",
							"tabIndex": 0,
							"title": "Skills",
							"type": "column",
							"valueField": "column-1"
						},
						{
							"id": "AmGraph-3",
							"title": "graph 3",
							"valueField": "PHP"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": ""
						}
					],
					"allLabels": [],
					"balloon": {
						"animationDuration": 1,
						"fadeOutDuration": 0
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "HTML",
							"column-1": "9.5"
						},
						{
							"category": "Vue",
							"column-1": "7.5"
						},
						{
							"category": "PHP",
							"column-1": "8.5"
						},
						{
							"category": "Node.js",
							"column-1": "7.25"
						},
						{
							"category": "MySQL",
							"column-1": "8.25"
						},
						{
							"category": "React",
							"column-1": "6.25"
						},
						{
							"category": "CSS",
							"column-1": "8.75"
						},
						{
							"category": "C++",
							"column-1": "6.75"
						},
						{
							"category": "WordPress",
							"column-1": "8.75"
						},
						{
							"category": "JavaScript",
							"column-1": "9"
						},
						{
							"category": "Bugs",
							"column-1": "0.1"
						}
					]
				}
			);