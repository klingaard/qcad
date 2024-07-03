// Auto generated by Testing Dashboard
// File        : scripts/Edit/Esc/Tests/EActionTest05.js
// Timestamp   : 2019-04-05 13:30:48
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function EActionTest05() {
    TdbTest.call(this, 'scripts/Edit/Esc/Tests/EActionTest05.js');
}

EActionTest05.prototype = new TdbTest();

EActionTest05.prototype.test00 = function() {
    qDebug('running EActionTest05.test00()...');
    this.setUp();
    this.importFile('scripts/Edit/Esc/Tests/data/image.dxf');
    // select image:
    var p = new RVector(0.745787, 119.212079);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // resize:
    var p = new RVector(256, 256);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(200, 200);
    this.sendMouseEventModelPos(QEvent.MouseMove, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('EActionTest05_000.dxf');
    this.tearDown();
    qDebug('finished EActionTest05.test00()');
};

