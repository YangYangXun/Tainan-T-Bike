

var allStationData = []; // 存放固定站點全部資料
var stationData = []; // 存放動態站點資料 

const xhr = new XMLHttpRequest()

xhr.open('GET', 'data/t-bike.json', true)
xhr.send()

xhr.onload = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText)
        allStationData = data;
        stationData = data;

        console.log('--------initial --------')

        // 預設載入全部資料
        createStationCard(stationData)

        // 監聽行政區下拉選單
        listenSelect()

        // 監聽搜尋框
        listenSearch()


    } else {
        alert("發生錯誤" + xhr.status);
    }

}

function createStationCard(stationData) {
    var newCard = ''
    for (let i = 0; i < stationData.length; i++) {
        newCard += '<div class="card mt-5">'
        newCard += '<div class="card-body">'
        newCard += '<div class="row">'
        newCard += '<div class="col-md-8">'
        newCard += '<h1 class="display-4 mb-3"><i class="fas fa-bicycle"> ' + stationData[i].StationName + '</i></h1>'
        newCard += '<p class="card-text"><i class="fas fa-globe-asia">  ' + stationData[i].District + '</i></p>'
        newCard += '<h5 class="card-text"><i class="fas fa-map-marker-alt">  ' + stationData[i].Address + '</i></h5>'
        newCard += '</div>' // col-md-6
        newCard += '<div class="col-md-2">'
        newCard += '<div class="text-center">'
        newCard += '<p class="card-text">'
        newCard += '<h3 class="text-primary">' + stationData[i].AvaliableBikeCount + '</h3>'
        newCard += '<h5>' + ' 可借車輛' + '</h5>'
        newCard += '</p>'
        newCard += '</div>'
        newCard += '</div>' // col-md-3
        newCard += '<div class="col-md-2">'
        newCard += '<div class="text-center">'
        newCard += '<p class="card-text">'
        newCard += '<h3 class="text-success">' + stationData[i].AvaliableSpaceCount + '</h3>'
        newCard += '<h5>' + ' 可停車位' + '</h5>'
        newCard += '</p>'
        newCard += '</div>'
        newCard += '</div>' // col-md-3
        newCard += '</div>' // row
        newCard += '</div>' // card-body
        newCard += '</div>' // card mt-5
    }
    document.getElementById('station-panel').innerHTML = newCard;
}


/**
 * 監聽行政區選擇框
 */
function listenSelect() {
    var location = document.getElementById('location');
    location.addEventListener('change', (e) => {
        console.log(e.target.value)
        if (e.target.value == "all") {
            stationData = allStationData
            createStationCard(stationData)

        } else {
            const localStationData = allStationData.filter((station) => {
                return e.target.value == station.District
            })
            stationData = localStationData
            createStationCard(stationData)
        }

    })
}

/**
 * 監聽搜尋框
 */

function listenSearch() {
    var searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {

        console.log(stationData)
        var searchText = e.target.value
        let filterStations = stationData.filter(function (data) {
            return data.StationName.includes(searchText)
        })
        createStationCard(filterStations)
    })

}
