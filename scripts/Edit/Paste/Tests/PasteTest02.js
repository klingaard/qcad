// Auto generated by Testing Dashboard
// File        : scripts/Edit/Paste/Tests/PasteTest02.js
// Timestamp   : 2016-12-19 17:49:48
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function PasteTest02() {
    TdbTest.call(this, 'scripts/Edit/Paste/Tests/PasteTest02.js');
}

PasteTest02.prototype = new TdbTest();

PasteTest02.prototype.test00 = function() {
    qDebug('running PasteTest02.test00()...');
    this.setUp();
    this.importFile('scripts/Edit/Paste/Tests/data/block_attributes.dxf');
    this.selectAll();
    this.triggerCommand('copywithreference');
    this.setZoom(38.24390243902439, new RVector(2.6352, 0.778699, 0, true));
    var p = new RVector(-0.203444, 0.00574);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::EditToolBar::ToolButtonPaste');
    this.setToolOption('Paste/Rotation', '0');
    this.setToolOption('Paste/Scale', '1');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setZoom(38.24390243902439, new RVector(2.6352, 0.778699, 0, true));
    var p = new RVector(11.772321, 0.084184);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(7.43176, 0.920918);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('PasteTest02_000.dxf');
    this.tearDown();
    qDebug('finished PasteTest02.test00()');
};

