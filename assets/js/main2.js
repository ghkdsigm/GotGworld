// https://www.bw.com/api/data/v1/trades?marketId=4330&dataSize=2
// https://www.bw.com/api/data/v1/entrusts?marketId=4330&dataSize=1

$.ajax({
    type: 'GET',
    url: 'http://www.bw.com/api/data/v1/entrusts?marketId=4330&dataSize=1',
    headers: {
      'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET',
    },
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log("FAIL....=================");
    }
  });