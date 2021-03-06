function drawChart() {
	var dataTable = new google.visualization.DataTable();
	dataTable.addColumn({
		type: 'date',
		id: 'Date'
	});
	dataTable.addColumn({
		type: 'number',
		id: 'price'
	});
	dataTable.addRows([
		[new Date(2020, 0, 1), 40],
		[new Date(2020, 0, 2), 40],
		[new Date(2020, 0, 3), 55],
		[new Date(2020, 0, 4), 55],
		[new Date(2020, 0, 5), 40],
		[new Date(2020, 0, 6), 35],
		[new Date(2020, 0, 7), 35],
		[new Date(2020, 0, 8), 35],
		[new Date(2020, 0, 9), 40],
		[new Date(2020, 0, 10), 55],
		[new Date(2020, 0, 11), 55],
		[new Date(2020, 0, 12), 35],
		[new Date(2020, 0, 13), 35],
		[new Date(2020, 0, 14), 35],
		[new Date(2020, 0, 15), 35],
		[new Date(2020, 0, 16), 35],
		[new Date(2020, 0, 17), 55],
		[new Date(2020, 0, 18), 55],
		[new Date(2020, 0, 19), 35],
		[new Date(2020, 0, 20), 35],
		[new Date(2020, 0, 21), 35],
		[new Date(2020, 0, 22), 35],
		[new Date(2020, 0, 23), 35],
		[new Date(2020, 0, 24), 55],
		[new Date(2020, 0, 25), 55],
		[new Date(2020, 0, 26), 35],
		[new Date(2020, 0, 27), 35],
		[new Date(2020, 0, 28), 35],
		[new Date(2020, 0, 29), 35],
		[new Date(2020, 0, 30), 35],
		[new Date(2020, 0, 31), 55],
		[new Date(2020, 1, 1), 55],
		[new Date(2020, 1, 2), 35],
		[new Date(2020, 1, 3), 35],
		[new Date(2020, 1, 4), 35],
		[new Date(2020, 1, 5), 35],
		[new Date(2020, 1, 6), 35],
		[new Date(2020, 1, 7), 55],
		[new Date(2020, 1, 8), 55],
		[new Date(2020, 1, 9), 40],
		[new Date(2020, 1, 10), 40],
		[new Date(2020, 1, 11), 40],
		[new Date(2020, 1, 12), 40],
		[new Date(2020, 1, 13), 40],
		[new Date(2020, 1, 14), 40],
		[new Date(2020, 1, 15), 55],
		[new Date(2020, 1, 16), 55],
		[new Date(2020, 1, 17), 40],
		[new Date(2020, 1, 18), 40],
		[new Date(2020, 1, 19), 40],
		[new Date(2020, 1, 20), 40],
		[new Date(2020, 1, 21), 55],
		[new Date(2020, 1, 22), 55],
		[new Date(2020, 1, 23), 40],
		[new Date(2020, 1, 24), 35],
		[new Date(2020, 1, 25), 35],
		[new Date(2020, 1, 26), 35],
		[new Date(2020, 1, 27), 35],
		[new Date(2020, 1, 28), 35],
		[new Date(2020, 1, 29), 35],
		[new Date(2020, 2, 1), 35],
		[new Date(2020, 2, 2), 35],
		[new Date(2020, 2, 3), 35],
		[new Date(2020, 2, 4), 35],
		[new Date(2020, 2, 5), 35],
		[new Date(2020, 2, 6), 55],
		[new Date(2020, 2, 7), 55],
		[new Date(2020, 2, 8), 35],
		[new Date(2020, 2, 9), 35],
		[new Date(2020, 2, 10), 35],
		[new Date(2020, 2, 11), 35],
		[new Date(2020, 2, 12), 35],
		[new Date(2020, 2, 13), 55],
		[new Date(2020, 2, 14), 55],
		[new Date(2020, 2, 15), 35],
		[new Date(2020, 2, 16), 35],
		[new Date(2020, 2, 17), 35],
		[new Date(2020, 2, 18), 35],
		[new Date(2020, 2, 19), 35],
		[new Date(2020, 2, 20), 55],
		[new Date(2020, 2, 21), 55],
		[new Date(2020, 2, 22), 35],
		[new Date(2020, 2, 23), 35],
		[new Date(2020, 2, 24), 35],
		[new Date(2020, 2, 25), 35],
		[new Date(2020, 2, 26), 35],
		[new Date(2020, 2, 27), 55],
		[new Date(2020, 2, 28), 55],
		[new Date(2020, 2, 29), 35],
		[new Date(2020, 2, 30), 35],
		[new Date(2020, 2, 31), 35],
		[new Date(2020, 3, 1), 40],
		[new Date(2020, 3, 2), 40],
		[new Date(2020, 3, 3), 60],
		[new Date(2020, 3, 4), 60],
		[new Date(2020, 3, 5), 45],
		[new Date(2020, 3, 6), 45],
		[new Date(2020, 3, 7), 45],
		[new Date(2020, 3, 8), 45],
		[new Date(2020, 3, 9), 45],
		[new Date(2020, 3, 10), 60],
		[new Date(2020, 3, 11), 60],
		[new Date(2020, 3, 12), 45],
		[new Date(2020, 3, 13), 45],
		[new Date(2020, 3, 14), 45],
		[new Date(2020, 3, 15), 45],
		[new Date(2020, 3, 16), 45],
		[new Date(2020, 3, 17), 60],
		[new Date(2020, 3, 18), 60],
		[new Date(2020, 3, 19), 45],
		[new Date(2020, 3, 20), 45],
		[new Date(2020, 3, 21), 45],
		[new Date(2020, 3, 22), 45],
		[new Date(2020, 3, 23), 45],
		[new Date(2020, 3, 24), 60],
		[new Date(2020, 3, 25), 60],
		[new Date(2020, 3, 26), 40],
		[new Date(2020, 3, 27), 40],
		[new Date(2020, 3, 28), 40],
		[new Date(2020, 3, 29), 40],
		[new Date(2020, 3, 30), 60],
		[new Date(2020, 4, 1), 60],
		[new Date(2020, 4, 2), 60],
		[new Date(2020, 4, 3), 40],
		[new Date(2020, 4, 4), 40],
		[new Date(2020, 4, 5), 40],
		[new Date(2020, 4, 6), 40],
		[new Date(2020, 4, 7), 60],
		[new Date(2020, 4, 8), 60],
		[new Date(2020, 4, 9), 60],
		[new Date(2020, 4, 10), 40],
		[new Date(2020, 4, 11), 40],
		[new Date(2020, 4, 12), 40],
		[new Date(2020, 4, 13), 40],
		[new Date(2020, 4, 14), 40],
		[new Date(2020, 4, 15), 60],
		[new Date(2020, 4, 16), 60],
		[new Date(2020, 4, 17), 40],
		[new Date(2020, 4, 18), 40],
		[new Date(2020, 4, 19), 60],
		[new Date(2020, 4, 20), 60],
		[new Date(2020, 4, 21), 60],
		[new Date(2020, 4, 22), 60],
		[new Date(2020, 4, 23), 60],
		[new Date(2020, 4, 24), 60],
		[new Date(2020, 4, 25), 40],
		[new Date(2020, 4, 26), 40],
		[new Date(2020, 4, 27), 40],
		[new Date(2020, 4, 28), 40],
		[new Date(2020, 4, 29), 60],
		[new Date(2020, 4, 30), 60],
		[new Date(2020, 4, 31), 40],
		[new Date(2020, 5, 1), 45],
		[new Date(2020, 5, 2), 45],
		[new Date(2020, 5, 3), 45],
		[new Date(2020, 5, 4), 45],
		[new Date(2020, 5, 5), 65],
		[new Date(2020, 5, 6), 65],
		[new Date(2020, 5, 7), 45],
		[new Date(2020, 5, 8), 45],
		[new Date(2020, 5, 9), 45],
		[new Date(2020, 5, 10), 45],
		[new Date(2020, 5, 11), 45],
		[new Date(2020, 5, 12), 65],
		[new Date(2020, 5, 13), 65],
		[new Date(2020, 5, 14), 45],
		[new Date(2020, 5, 15), 45],
		[new Date(2020, 5, 16), 45],
		[new Date(2020, 5, 17), 45],
		[new Date(2020, 5, 18), 45],
		[new Date(2020, 5, 19), 65],
		[new Date(2020, 5, 20), 65],
		[new Date(2020, 5, 21), 45],
		[new Date(2020, 5, 22), 45],
		[new Date(2020, 5, 23), 45],
		[new Date(2020, 5, 24), 45],
		[new Date(2020, 5, 25), 45],
		[new Date(2020, 5, 26), 65],
		[new Date(2020, 5, 27), 65],
		[new Date(2020, 5, 28), 45],
		[new Date(2020, 5, 29), 45],
		[new Date(2020, 5, 30), 45],
		[new Date(2020, 6, 1), 50],
		[new Date(2020, 6, 2), 50],
		[new Date(2020, 6, 3), 70],
		[new Date(2020, 6, 4), 70],
		[new Date(2020, 6, 5), 50],
		[new Date(2020, 6, 6), 50],
		[new Date(2020, 6, 7), 50],
		[new Date(2020, 6, 8), 50],
		[new Date(2020, 6, 9), 50],
		[new Date(2020, 6, 10), 70],
		[new Date(2020, 6, 11), 70],
		[new Date(2020, 6, 12), 50],
		[new Date(2020, 6, 13), 50],
		[new Date(2020, 6, 14), 50],
		[new Date(2020, 6, 15), 50],
		[new Date(2020, 6, 16), 50],
		[new Date(2020, 6, 17), 70],
		[new Date(2020, 6, 18), 70],
		[new Date(2020, 6, 19), 50],
		[new Date(2020, 6, 20), 50],
		[new Date(2020, 6, 21), 50],
		[new Date(2020, 6, 22), 50],
		[new Date(2020, 6, 23), 50],
		[new Date(2020, 6, 24), 70],
		[new Date(2020, 6, 25), 70],
		[new Date(2020, 6, 26), 50],
		[new Date(2020, 6, 27), 50],
		[new Date(2020, 6, 28), 50],
		[new Date(2020, 6, 29), 50],
		[new Date(2020, 6, 30), 50],
		[new Date(2020, 6, 31), 70],
		[new Date(2020, 7, 1), 70],
		[new Date(2020, 7, 2), 50],
		[new Date(2020, 7, 3), 50],
		[new Date(2020, 7, 4), 50],
		[new Date(2020, 7, 5), 50],
		[new Date(2020, 7, 6), 50],
		[new Date(2020, 7, 7), 70],
		[new Date(2020, 7, 8), 70],
		[new Date(2020, 7, 9), 50],
		[new Date(2020, 7, 10), 50],
		[new Date(2020, 7, 11), 50],
		[new Date(2020, 7, 12), 50],
		[new Date(2020, 7, 13), 50],
		[new Date(2020, 7, 14), 70],
		[new Date(2020, 7, 15), 70],
		[new Date(2020, 7, 16), 50],
		[new Date(2020, 7, 17), 50],
		[new Date(2020, 7, 18), 50],
		[new Date(2020, 7, 19), 50],
		[new Date(2020, 7, 20), 50],
		[new Date(2020, 7, 21), 70],
		[new Date(2020, 7, 22), 70],
		[new Date(2020, 7, 23), 50],
		[new Date(2020, 7, 24), 50],
		[new Date(2020, 7, 25), 50],
		[new Date(2020, 7, 26), 50],
		[new Date(2020, 7, 27), 50],
		[new Date(2020, 7, 28), 70],
		[new Date(2020, 7, 29), 70],
		[new Date(2020, 7, 30), 50],
		[new Date(2020, 7, 31), 50],
		[new Date(2020, 8, 1), 45],
		[new Date(2020, 8, 2), 45],
		[new Date(2020, 8, 3), 45],
		[new Date(2020, 8, 4), 65],
		[new Date(2020, 8, 5), 65],
		[new Date(2020, 8, 6), 45],
		[new Date(2020, 8, 7), 45],
		[new Date(2020, 8, 8), 45],
		[new Date(2020, 8, 9), 45],
		[new Date(2020, 8, 10), 45],
		[new Date(2020, 8, 11), 65],
		[new Date(2020, 8, 12), 65],
		[new Date(2020, 8, 13), 45],
		[new Date(2020, 8, 14), 45],
		[new Date(2020, 8, 15), 45],
		[new Date(2020, 8, 16), 45],
		[new Date(2020, 8, 17), 45],
		[new Date(2020, 8, 18), 65],
		[new Date(2020, 8, 19), 65],
		[new Date(2020, 8, 20), 45],
		[new Date(2020, 8, 21), 45],
		[new Date(2020, 8, 22), 45],
		[new Date(2020, 8, 23), 45],
		[new Date(2020, 8, 24), 45],
		[new Date(2020, 8, 25), 65],
		[new Date(2020, 8, 26), 65],
		[new Date(2020, 8, 27), 45],
		[new Date(2020, 8, 28), 45],
		[new Date(2020, 8, 29), 45],
		[new Date(2020, 8, 30), 45],
		[new Date(2020, 9, 1), 35],
		[new Date(2020, 9, 2), 55],
		[new Date(2020, 9, 3), 55],
		[new Date(2020, 9, 4), 35],
		[new Date(2020, 9, 5), 35],
		[new Date(2020, 9, 6), 35],
		[new Date(2020, 9, 7), 35],
		[new Date(2020, 9, 8), 35],
		[new Date(2020, 9, 9), 55],
		[new Date(2020, 9, 10), 55],
		[new Date(2020, 9, 11), 35],
		[new Date(2020, 9, 12), 35],
		[new Date(2020, 9, 13), 35],
		[new Date(2020, 9, 14), 35],
		[new Date(2020, 9, 15), 35],
		[new Date(2020, 9, 16), 55],
		[new Date(2020, 9, 17), 55],
		[new Date(2020, 9, 18), 45],
		[new Date(2020, 9, 19), 45],
		[new Date(2020, 9, 20), 45],
		[new Date(2020, 9, 21), 45],
		[new Date(2020, 9, 22), 45],
		[new Date(2020, 9, 23), 55],
		[new Date(2020, 9, 24), 55],
		[new Date(2020, 9, 25), 45],
		[new Date(2020, 9, 26), 45],
		[new Date(2020, 9, 27), 45],
		[new Date(2020, 9, 28), 45],
		[new Date(2020, 9, 29), 45],
		[new Date(2020, 9, 30), 55],
		[new Date(2020, 9, 31), 55],
		[new Date(2020, 10, 1), 35],
		[new Date(2020, 10, 2), 35],
		[new Date(2020, 10, 3), 35],
		[new Date(2020, 10, 4), 35],
		[new Date(2020, 10, 5), 35],
		[new Date(2020, 10, 6), 50],
		[new Date(2020, 10, 7), 50],
		[new Date(2020, 10, 8), 35],
		[new Date(2020, 10, 9), 35],
		[new Date(2020, 10, 10), 35],
		[new Date(2020, 10, 11), 35],
		[new Date(2020, 10, 12), 35],
		[new Date(2020, 10, 13), 50],
		[new Date(2020, 10, 14), 50],
		[new Date(2020, 10, 15), 35],
		[new Date(2020, 10, 16), 35],
		[new Date(2020, 10, 17), 35],
		[new Date(2020, 10, 18), 35],
		[new Date(2020, 10, 19), 35],
		[new Date(2020, 10, 20), 50],
		[new Date(2020, 10, 21), 50],
		[new Date(2020, 10, 22), 35],
		[new Date(2020, 10, 23), 35],
		[new Date(2020, 10, 24), 35],
		[new Date(2020, 10, 25), 35],
		[new Date(2020, 10, 26), 35],
		[new Date(2020, 10, 27), 50],
		[new Date(2020, 10, 28), 50],
		[new Date(2020, 10, 29), 35],
		[new Date(2020, 10, 30), 35],
		[new Date(2020, 11, 29), 60],
		[new Date(2020, 11, 30), 60],
		[new Date(2020, 11, 31), 60],


	]);

	var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

	var options = {
		title: "Consulter nos prix (€/nuit)",
		calendar: {
			dayOfWeekLabel: {
				fontName: 'arial',
				fontSize: 14,
				color: '#1a8763',
				bold: true,

			},
			cellColor: {
				stroke: '#76a7fa',
				strokeOpacity: 0.5,
				strokeWidth: 1,
			},

			dayOfWeekRightSpace: 10,
			daysOfWeek: 'DLMMJVS',
		},
	};

	chart.draw(dataTable, options);


}