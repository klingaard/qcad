// Auto generated by Testing Dashboard
// File        : scripts/Draw/Dimension/DimAngular/Tests/DimAngularTest01.js
// Timestamp   : 2018-05-04 11:39:30
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function DimAngularTest01() {
    TdbTest.call(this, 'scripts/Draw/Dimension/DimAngular/Tests/DimAngularTest01.js');
}

DimAngularTest01.prototype = new TdbTest();

DimAngularTest01.prototype.test00 = function() {
    qDebug('running DimAngularTest01.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Dimension/Tests/drawing03.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::DimensionToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::DimensionToolsPanel::DimAngularButton');
    this.setToolOption('Dimension/Prefix', '(No prefix)');
    this.setToolOption('Dimension/Text', '');
    this.setToolOption('Dimension/UpperTolerance', '');
    this.setToolOption('Dimension/LowerTolerance', '');
    this.setToolOption('Dimension/Scale', '1:1');
    this.setToolOption('DimAngular/UseMaxAngle', 'true');
    this.updateToolOptions();
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(33.407865, 52.898827);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(39.862172, 49.671673);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(33.407865, 50.011374);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(20.329401, 69.713995);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(90.647378, 64.108939);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(90.477528, 69.544145);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(99.819288, 39.650512);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(89.628277, 29.459501);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(34.257116, 27.421299);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(39.862172, 19.947891);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(34.087266, 16.041336);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(39.692322, 20.117741);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(32.558614, 16.041336);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(31.029963, 25.383097);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(30.520412, 9.756879);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(83.683521, 16.890587);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(96.931835, 21.476542);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(99.309738, 9.247329);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(84.872472, 18.079539);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(94.553933, 21.136842);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.887541345093716, new RVector(-15.4037, 0.434132, 0, true));
    var p = new RVector(80.116667, 19.947891);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(65.16985, 25.383097);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(63.641199, 25.043396);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('DimAngularTest01_000.dxf');
    this.tearDown();
    qDebug('finished DimAngularTest01.test00()');
};

