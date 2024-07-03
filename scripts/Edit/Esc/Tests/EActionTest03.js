// Auto generated by Testing Dashboard
// File        : scripts/Edit/Esc/Tests/EActionTest03.js
// Timestamp   : 2018-08-31 11:29:02
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function EActionTest03() {
    TdbTest.call(this, 'scripts/Edit/Esc/Tests/EActionTest03.js');
}

EActionTest03.prototype = new TdbTest();

EActionTest03.prototype.test00 = function() {
    qDebug('running EActionTest03.test00()...');
    this.setUp();
    this.importFile('scripts/Edit/Esc/Tests/data/entities.dxf');
    this.selectAll();
    this.setZoom(6.664170722575814, new RVector(-6.1836, 8.46253, 0, true));
    var p = new RVector(12, 43);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    //this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(20,50);
    //this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    //var p = new RVector(14.136573, 54.110899);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('EActionTest03_000.dxf');
    this.tearDown();
    qDebug('finished EActionTest03.test00()');
};

