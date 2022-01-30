$(document).ready(function () {
    $('#plus').click(function () {
        $('#bag-count').text(function (i, oldVal) {
            return parseInt(oldVal, 10) + 1;
        });
        $('#bagQuantitySpan').text(function (i, oldVal) {
            return parseInt(oldVal, 10) + 1;
        });
        $('#bagPriceSpan').text(function (i, oldVal) {
            return (parseFloat(oldVal, 10) + 5.90).toFixed(2);
        });

        let bagQuantity = $("#bag-count").text()
        let bagPrice = $("#bagPriceSpan").text()

        $('#hiddenBagQuantity').attr('value', bagQuantity);
        $('#hiddenBagPrice').attr('value', bagPrice);
    })
})

$(document).ready(function () {
    $('#minus').click(function () {
        if ($('#bag-count').text() != 1) {
            $('#bag-count').text(function (i, oldVal) {
                return parseInt(oldVal, 10) - 1;
            });
            $('#bagQuantitySpan').text(function (i, oldVal) {
                return parseInt(oldVal, 10) - 1;
            });
            $('#bagPriceSpan').text(function (i, oldVal) {
                return (parseFloat(oldVal, 10) - 5.90).toFixed(2);
            });
            let bagQuantity = $("#bag-count").text()
            let bagPrice = $("#bagPriceSpan").text()

            $('#hiddenBagQuantity').attr('value', bagQuantity);
            $('#hiddenBagPrice').attr('value', bagPrice);
        }
    })
})