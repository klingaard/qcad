// Auto generated by Testing Dashboard
// File        : scripts/Block/RemoveBlock/Tests/RemoveBlockTest00.js
// Timestamp   : 2015-04-21 13:51:49
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function RemoveBlockTest00() {
    TdbTest.call(this, 'scripts/Block/RemoveBlock/Tests/RemoveBlockTest00.js');
}

RemoveBlockTest00.prototype = new TdbTest();

RemoveBlockTest00.prototype.test00 = function() {
    qDebug('running RemoveBlockTest00.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::LineToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::LineToolsPanel::Line2PButton');
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(10, 9.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(20, 20.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(19.9, 9.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(10.1, 10.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(32.1, 17);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(29.8, 17.4);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(1.1, 11.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::SelectToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::SelectToolsPanel::SelectAllButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::SelectToolsPanel::BackButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::CreateBlockButton');
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(10.3, 10.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/BlockName', 'block 1')");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('RemoveBlockTest00_000.dxf');
    var w = objectFromPath('MainWindow::BlockListDock::BlockListWidget::BlockList::qt_scrollarea_viewport');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(66, 53), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::BlockListDock::BlockListWidget::BlockList::qt_scrollarea_viewport');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(66, 53), Qt.LeftButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::BlockListDock::BlockListWidget::RemoveBlock');
    this.verifyDrawing('RemoveBlockTest00_001.dxf');
    this.tearDown();
    qDebug('finished RemoveBlockTest00.test00()');
};

