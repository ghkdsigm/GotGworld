var gotg_price = 0;

// https://www.bw.com/api/data/v1/trades?marketId=4330&dataSize=2
// https://www.bw.com/api/data/v1/entrusts?marketId=4330&dataSize=1
// https://www.bw.com/api/data/v1/klines?marketId=4330&type=1M&dataSize=1

const url = 'https://www.bw.com/api/data/v1/klines?marketId=4330&type=1M&dataSize=1'

jQuery.postCORS = function(url, data, func) {
    if(func == undefined) func = function(){};
    return $.ajax({
      type: 'POST', 
      url: url, 
      data: data, 
      dataType: 'json', 
      contentType: 'application/x-www-form-urlencoded', 
      xhrFields: { withCredentials: true }, 
      success: function(res) { func(res) }, 
      error: function() { 
              func({}) 
      }
    });
  }

  