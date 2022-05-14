var gotg_price = 0;

// https://www.bw.com/api/data/v1/trades?marketId=4330&dataSize=2

$.ajax({
    url: "https://www.bw.com/api/data/v1/trades?marketId=4330&dataSize=2", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    async:    false,
    jsonp:"callback",
    success:function(data){
        data = JSON.parse(data);
        console.log(data)
        // process data
    },
})

// HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
.done(function(json) {
	gotg_price = json;
    console.log(gotg_price)
//	$("#gotg_price").val(json);
	setPrice(gotg_price);
})
// HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
.fail(function(xhr, status, errorThrown) {
	console.log(errorThrown + " : " + status);
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/*
$({ val : 0 }).animate({ val : 1.5 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num2").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num2").text(num);
    }
});


$({ val : 0 }).animate({ val : 0.1 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommass(this.val.toFixed(1));
        $(".count_num1").text(num);
    },
    complete: function() {
        var num = numberWithCommass(this.val.toFixed(1));
        $(".count_num1").text(num);
    }
});
*/
function numberWithCommass(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//function setPrice2(gotg_price){
	$({ val : 0 }).animate({ val : 16 }, {
		duration: 1000,
		step: function() {
			var num = numberWithCommas(this.val.toFixed(2));
			$(".count_num2").text(num);
		},
		complete: function() {
			var num = numberWithCommas(this.val.toFixed(2));
			$(".count_num2").text(num);
		}
	});
//}
/*
$({ val : 0 }).animate({ val : 0.1 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num1").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num1").text(num);
    }
});
*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$({ val : 0 }).animate({ val : 0.16 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(2));
        $(".count_num3").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(2));
        $(".count_num3").text(num);
    }
});

function setPrice(gotg_price){
	$({ val : 0 }).animate({ val : gotg_price }, {
		duration: 1000,
		step: function() {
			var num = numberWithCommass(this.val.toFixed(2));
			$(".count_num1").text(num);
		},
		complete: function() {
			var num = numberWithCommass(this.val.toFixed(2));
			$(".count_num1").text(num);
		}
	});
//	setPrice2(gotg_price);
}


function numberWithCommass(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$({ val : 0 }).animate({ val : 15 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(2));
        $(".count_num4").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(2));
        $(".count_num4").text(num);
    }
});

$({ val : 0 }).animate({ val : 0 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num5").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num5").text(num);
    }
});