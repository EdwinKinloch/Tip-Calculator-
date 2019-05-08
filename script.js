document.getElementById('container').onchange = function() {
    // Capturing user input
    var bill = Number(document.getElementById('billTotal').value);
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('splitInput').value;
    // Displaying captured input
    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    // Calulating input
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;
    // Displaying Calulations
    document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);
}