


const xhr = new XMLHttpRequest()

xhr.open('GET', 'data/t-bike.json', true)
xhr.send()

console.log('hola')
xhr.onload = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText)
        createStationCard(data)


        /* 返回資料結果集 */
        // const AsiaData = data.filter((mydata) => {
        //     return mydata.region == 'Asia'
        // })
        // console.log(AsiaData)

        /* 返回第一筆資料 */
        // const AsiaFirstData = data.find((mydata) => {
        //     return mydata.region == 'Asia'
        // })
        // console.log(AsiaFirstData)

        // console.log(data[0].region)


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
