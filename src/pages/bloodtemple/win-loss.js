import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { GetWinRecords } from '../../actions/blood-temple-actions';

const WinLoss = () => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const [dateRange, setDateRange] = useState([new Date(new Date().getTime() - 604800000), new Date()]);
  const [custom, setCustom] = useState([
    new Date(new Date().getTime() - 604800000).toLocaleDateString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
    new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
  ]);
  const [year, setYear] = useState(`${new Date().getFullYear()}`);
  const [month, setMonth] = useState(`${new Date().getMonth()}`);
  const [years, setYears] = useState([]);
  const [filterType, setFilterType] = useState('CUSTOM');
  const [chartOptions, setChartOPtions] = useState({});

  const dispatch = useDispatch();
  const winData = useSelector(state => state.winLoss.win);

  useEffect(() => {
    const optionsUpdated = {
      chart: {
        backgroundColor: '#FCFFC5',
        polar: true,
        type: 'line',
      },
      title: {
        text: '',
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 0,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      },
      xAxis: {
        categories: [],
        plotBands: [
          {
            from: 4.5,
            to: 6.5,
            color: 'rgba(0, 0, 0,0)',
          },
        ],
      },
      yAxis: {
        title: {
          text: '',
        },
      },
      tooltip: {
        crosshairs: true,
        shared: true,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          name: 'WINS',
          marker: {
            symbol: 'square',
          },
          data: [],
        },
        {},
      ],
    };
    optionsUpdated.series[0].data = winData;
    setChartOPtions(optionsUpdated);
  }, [winData]);

  // {
  //   y: 26.5,
  //   marker: {
  //     symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
  //   },
  // },

  useEffect(() => {
    const years = [];
    for (let i = 2020; i <= new Date().getFullYear(); i++) {
      years.push(i);
    }
    setYears(years);
  }, []);

  useEffect(() => {
    let min;
    let max;

    switch (filterType) {
      case 'YEARS':
        min = new Date(year, 0, 1).toLocaleString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        max = new Date(year, 11, 31).toLocaleString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        break;
      case 'MONTHS':
        const mon = months.findIndex(m => m === month);
        min = new Date(year, month, 1).toLocaleDateString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        max = new Date(year, month + 1, 0).toLocaleDateString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        break;
      case 'CUSTOM':
        min = custom[0];
        max = custom[1];
        break;
    }

    dispatch(GetWinRecords(filterType, min, max));
  }, [filterType, year, month, custom]);

  return (
    <div className="tab-pane fade" id="pills-win" role="tabpanel" aria-labelledby="pills-win-tab">
      <div className="row mb-5 d-flex align-items-center">
        <div className="col-md-8 pl-2">
          <div className="drops_main">
            <div className="tournament_drops">
              <div className="for_selectbox">
                <select onChange={e => setFilterType(e.target.value)} value={filterType}>
                  <option value="YEARS">Years</option>
                  <option value="MONTHS">Months</option>
                  <option value="CUSTOM">Custom</option>
                </select>
              </div>
            </div>

            {(filterType === 'YEARS' || filterType === 'MONTHS') && (
              <div className="tournament_drops">
                <div className="for_selectbox">
                  <select onChange={e => setYear(e.target.value)} value={year}>
                    <option disabled value="">
                      Years
                    </option>
                    {years.map(year => {
                      return <option value={year}>{year}</option>;
                    })}
                  </select>
                </div>
              </div>
            )}

            {filterType === 'MONTHS' && (
              <div className="tournament_drops">
                <div className="for_selectbox">
                  <select value={month} onChange={e => setMonth(e.target.value)}>
                    <option disabled value="">
                      Months
                    </option>
                    {months.map((month, i) => {
                      return <option value={i}>{month}</option>;
                    })}
                  </select>
                </div>
              </div>
            )}

            {filterType === 'CUSTOM' && (
              <div className="tournament_drops">
                <DateRangePicker
                  onChange={value => {
                    const [min, max] = value;
                    setDateRange(value);
                    setCustom([
                      new Date(min).toLocaleDateString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
                      new Date(max).toLocaleDateString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
                    ]);
                  }}
                  value={dateRange}
                  autoFocuss
                  yearPlaceholder="yyyy"
                  monthPlaceholder="mm"
                  dayPlaceholder="dd"
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div className="status_roll">
            <div className="roll_box">
              <span>
                <i className="fa fa-circle" aria-hidden="true"></i> WINS
              </span>
            </div>
            <div className="roll_box">
              <span className="for_red">
                <i className="fa fa-circle" aria-hidden="true"></i> LOSSES
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="chartss">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};
export default WinLoss;
