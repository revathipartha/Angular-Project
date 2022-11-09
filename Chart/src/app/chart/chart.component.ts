import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['posts', 'comments', 'todos'],
        datasets: [{
          label: '# of userId',
          data: [100, 500, 200],
          backgroundColor: [
            'rgba(255, 0, 0, 0.9)',
            'rgba(0, 255, 0, 0.9)',
            'rgba(0, 0, 255, 0.9)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}


