var optionsBar = {
    chart: {
      height: '100%',
      type: 'bar',
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px', // Ukuran font label sumbu Y
          fontFamily: 'Urbanist',
          fontWeight: 400
        },
      },
      min: 0, // Nilai minimum sumbu Y
      max: 200, // Nilai maksimum sumbu Y
      tickAmount: 5, // Jumlah interval pada sumbu Y
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        horizontal: false,
        endingShape: 'rounded',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    series: [{
      name: 'Peserta Cewek',
      data: [100, 135, 130, 140, 150, 145] // Data peserta cewek dari tahun 2019-2024
    }, {
      name: 'Peserta Cowok',
      data: [125, 145, 122, 127, 162, 180] // Data peserta cowok dari tahun 2019-2024
    }],
    stroke: {
      show: false,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['2019', '2020', '2021', '2022', '2023', '2024'], // Tahun 2019-2024
      labels: {
        style: {
          colors: '#919191'
        }
      }
    },
    fill: {
      opacity: 1
    },
    colors: ['#DA1212', '#BABBBD'], // Warna untuk data cewek dan cowok
    legend: {
      show: true, // Tampilkan legenda untuk membedakan cewek dan cowok
      position: 'top',
      horizontalAlign: 'right',
    }
  }
  
  var chartBar = new ApexCharts(
    document.querySelector("#withdrawn"),
    optionsBar
  );
  
  chartBar.render();  
  
  
   
  
  
  
    // var options = {
    //   series: [
    //   {
    //     data: [
    //       {
    //         x: 'week 1',
    //         y: [2800, 3500]
    //       },
    //       {
    //         x: 'week 2',
    //         y: [3200, 4100]
    //       },
    //       {
    //         x: 'week 3',
    //         y: [2950, 4800]
    //       },
    //       {
    //         x: 'week 4',
    //         y: [3000, 4600]
    //       },
          
    //     ]
    //   }
    // ],
    //   chart: {
    //   height: '100%',
    //   type: 'rangeBar',
    //   zoom: {
    //     enabled: false
    //   }
    // },
    // plotOptions: {
    //   bar: {
    //     isDumbbell: true,
    //     columnWidth: 3,
    //     dumbbellColors: [['#126657', '#126657']]
    //   }
    // },
    // legend: {
    //   show: false,
    //   showForSingleSeries: true,
    //   position: 'top',
    //   horizontalAlign: 'left',
    //   customLegendItems: ['Product A', 'Product B']
    // },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     type: 'vertical',
    //     gradientToColors: ['#ED702A'],
    //     inverseColors: true,
    //     stops: [0, 100]
    //   }
    // },
    // grid: {
    //   xaxis: {
    //     lines: {
    //       show: true
    //     }
    //   },
    //   yaxis: {
    //     lines: {
    //       show: true
    //     },
        
    //   }
    // },
    // xaxis: {
    //   categories: ['01', '02', '03','04'],
    //   labels: {
    //     style: {
    //       colors: '#919191'
    //     }
    //   }
    // },
    // axis: {
    //   categories: ['01', '02', '03','04'],
    //   labels: {
    //     style: {
    //       colors: '#919191'
    //     }
    //   }
    // },
    // colors: ['#126657'], 
   
    // };
  
    // var chart = new ApexCharts(document.querySelector("#dumbel"), options);
    // chart.render();
  
   
  
    // var optionsBar = {
    //   chart: {
    //     height: '100%',
    //     type: 'bar',
        
    //   },
    //   plotOptions: {
    //     bar: {
    //       columnWidth: '70%',
    //       horizontal: false,
    //        endingShape: 'rounded',
    //        borderRadius: 3,
    //        borderRadiusApplication: 'end',
    //     },
    //   },
    //   series: [{
    //     name: '',
    //     data: [14, 25, 21, 15, 24, 27, 21]
    //   }, {
    //     name: '',
    //     data: [13, 23, 20, 24, 18, 20, 15]
    //   }, 
    //  ],
    //  stroke: {
    //   show: true,
    //   width: 3,
    //   colors: ['transparent']
    // },
    //   xaxis: {
    //     categories: ['Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt',],
    //     labels: {
    //       style: {
    //         colors: '#919191'
    //       }
    //     }
    //   },
    //   fill: {
    //     opacity: 1
    //   },
    //   tooltip: {
    //     enabled: true,
    //     y: {
    //       formatter: function (val) {
    //         return "$ " + val
    //       }
    //     }
    //   },
    //   colors: ['#126657', '#1AC821'], 
    //   legend: {
    //     show: false
    //   }
    
    // }
    
    // var chartBar = new ApexCharts(
    //   document.querySelector("#order"),
    //   optionsBar
    // );
    
    // chartBar.render();
  
  
  
  //   var optionsCircle4 = {
  //     series: [75],
  //     chart: {
  //         height: '100%',
  //          width: '100%',
  

// start: Sidebar
const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebarOverlay = document.querySelector('.sidebar-overlayy')
const sidebarMenu = document.querySelector('.sidebar-menu')
const main = document.querySelector('.main')
sidebarToggle.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.toggle('active')
    sidebarOverlay.classList.toggle('hidden')
    sidebarMenu.classList.toggle('-translate-x-full')
})
sidebarOverlay.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('active')
    sidebarOverlay.classList.add('hidden')
    sidebarMenu.classList.add('-translate-x-full')
})
document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        const parent = item.closest('.group')
        if (parent.classList.contains('selected')) {
            parent.classList.remove('selected')
        } else {
            document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (i) {
                i.closest('.group').classList.remove('selected')
            })
            parent.classList.add('selected')
        }
    })
})
// end: Sidebar

// start: Popper
const popperInstance = {}
document.querySelectorAll('.dropdown').forEach(function (item, index) {
    const popperId = 'popper-' + index
    const toggle = item.querySelector('.dropdown-toggle')
    const menu = item.querySelector('.dropdown-menu')
    menu.dataset.popperId = popperId
    popperInstance[popperId] = Popper.createPopper(toggle, menu, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: 24,
                },
            },
        ],
        placement: 'bottom-end'
    });
})
document.addEventListener('click', function (e) {
    const toggle = e.target.closest('.dropdown-toggle')
    const menu = e.target.closest('.dropdown-menu')
    if (toggle) {
        const menuEl = toggle.closest('.dropdown').querySelector('.dropdown-menu')
        const popperId = menuEl.dataset.popperId
        if (menuEl.classList.contains('hidden')) {
            hideDropdown()
            menuEl.classList.remove('hidden')
            showPopper(popperId)
        } else {
            menuEl.classList.add('hidden')
            hidePopper(popperId)
        }
    } else if (!menu) {
        hideDropdown()
    }
})

function hideDropdown() {
    document.querySelectorAll('.dropdown-menu').forEach(function (item) {
        item.classList.add('hidden')
    })
}
function showPopper(popperId) {
    popperInstance[popperId].setOptions(function (options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }
    });
    popperInstance[popperId].update();
}
function hidePopper(popperId) {
    popperInstance[popperId].setOptions(function (options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }
    });
}
// end: Popper