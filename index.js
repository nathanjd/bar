function Bar() {

}

Bar.prototype.toHTML = function () {
    return '<div class="bar">Bar v1.0.0 (green)</div>';
};

module.exports = Bar;
