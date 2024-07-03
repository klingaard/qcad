// Auto generated by Testing Dashboard
// File        : scripts/Snap/SnapIntersection/Tests/SnapIntersectionTest05.js
// Timestamp   : 2016-02-09 21:28:00
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function SnapIntersectionTest05() {
    TdbTest.call(this, 'scripts/Snap/SnapIntersection/Tests/SnapIntersectionTest05.js');
}

SnapIntersectionTest05.prototype = new TdbTest();

SnapIntersectionTest05.prototype.test00 = function() {
    qDebug('running SnapIntersectionTest05.test00()...');
    this.setUp();
    this.importFile('scripts/Snap/SnapIntersection/Tests/data/polyline_xline.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::PointToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::PointToolsPanel::Point1PButton');
    this.setZoom(26.37037037037037, new RVector(-8.92697, -16.6194, 0, true));
    var p = new RVector(24.740169, 25.227528);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(26.75, 26.97191);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(26.712079, 27.047753);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('SnapIntersectionTest05_000.dxf');
    this.tearDown();
    qDebug('finished SnapIntersectionTest05.test00()');
};

