// Auto generated by Testing Dashboard
// File        : scripts/Modify/Trim/Tests/TrimTest11.js
// Timestamp   : 2016-05-27 13:25:57
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function TrimTest11() {
    TdbTest.call(this, 'scripts/Modify/Trim/Tests/TrimTest11.js');
}

TrimTest11.prototype = new TdbTest();

TrimTest11.prototype.test00 = function() {
    qDebug('running TrimTest11.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/Trim/Tests/data/line_spline.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::TrimButton');
    this.setZoom(12.945454545454545, new RVector(-8.94382, -10.9872, 0, true));
    var p = new RVector(23.852528, 25.509686);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.945454545454545, new RVector(-8.94382, -10.9872, 0, true));
    var p = new RVector(31.191011, 27.904349);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(35.825843, 27.672607);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(33.97191, 27.672607);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(33.508427, 27.518113);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('TrimTest11_000.dxf');
    this.tearDown();
    qDebug('finished TrimTest11.test00()');
};

