// Auto generated by Testing Dashboard
// File        : scripts/Modify/Trim/Tests/TrimTest08.js
// Timestamp   : 2015-11-04 21:07:44
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function TrimTest08() {
    TdbTest.call(this, 'scripts/Modify/Trim/Tests/TrimTest08.js');
}

TrimTest08.prototype = new TdbTest();

TrimTest08.prototype.test00 = function() {
    qDebug('running TrimTest08.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/Trim/Tests/data/line_ray_xline.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::TrimButton');
    this.setZoom(19.59633027522936, new RVector(-1.59925, -3.72238, 0, true));
    var p = new RVector(14.816011, 14.74485);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(19.59633027522936, new RVector(-1.59925, -3.72238, 0, true));
    var p = new RVector(14.356742, 9.948034);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(19.59633027522936, new RVector(-1.59925, -3.72238, 0, true));
    var p = new RVector(20.072097, 14.234551);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(23.491105, 15.714419);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(23.133895, 15.61236);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(23.184925, 15.61236);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('TrimTest08_000.dxf');
    this.tearDown();
    qDebug('finished TrimTest08.test00()');
};

