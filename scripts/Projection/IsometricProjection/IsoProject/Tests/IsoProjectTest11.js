// Auto generated by Testing Dashboard
// File        : scripts/Projection/IsometricProjection/IsoProject/Tests/IsoProjectTest11.js
// Timestamp   : 2015-04-16 20:25:35
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function IsoProjectTest11() {
    TdbTest.call(this, 'scripts/Projection/IsometricProjection/IsoProject/Tests/IsoProjectTest11.js');
}

IsoProjectTest11.prototype = new TdbTest();

IsoProjectTest11.prototype.test00 = function() {
    qDebug('running IsoProjectTest11.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::LineToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::LineToolsPanel::Line2PButton');
    this.setToolOption('Line/Type', 'TypeSegment');
    this.setToolOption('Line2P/Restrict', 'false');
    this.updateToolOptions();
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(0.19724, 19.793182);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(10.025565, 10.287097);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(13.570206, 17.376381);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(10.911725, 17.05414);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::LineToolsPanel::LineVerticalButton');
    var p = new RVector(0.35836, 30.427106);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ArcToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ArcToolsPanel::ArcCPAButton');
    this.setToolOption('ArcCPA/Direction', 'Clockwise');
    this.updateToolOptions();
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(20.095569, 9.723177);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(12.120125, 9.964857);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(12.200686, 10.045417);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(19.853889, 17.618061);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(23.398531, 15.28182);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(7.367083, 23.579503);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::EllipseToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::EllipseToolsPanel::EllipseArcCPPAButton');
    this.setToolOption('EllipseArcCPPA/Direction', 'CounterClockwise');
    this.updateToolOptions();
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(30.085014, 9.481497);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(29.843333, 19.793182);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(24.123571, 10.206537);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(29.923893, 18.504221);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(30.004453, 4.728455);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(33.307415, 12.623338);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(31.615654, 12.059418);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::PolylineToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::PolylineToolsPanel::DrawPolylineButton');
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(0.2778, 8.675897);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(1.808441, -0.024587);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(4.789162, 8.837017);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(9.783884, 8.837017);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(9.945005, -0.105147);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(15.100847, 4.647895);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(14.375806, 6.017415);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(7.850444, 19.793182);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::PolylineToolsPanelButton');
    var p = new RVector(2.936281, 29.702066);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::SplineToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::SplineToolsPanel::SplineControlPointsButton');
    this.setToolOption('SplineControlPoints/Degree', '3');
    this.setToolOption('SplineControlPoints/Closed', 'true');
    this.updateToolOptions();
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(12.361806, 8.353657);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(17.034288, 8.837017);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(20.015009, 5.050695);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(13.006286, 3.922855);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(19.773329, 1.183813);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(12.039565, 0.055973);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(22.19013, 10.851018);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(20.901169, 14.073419);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(20.901169, 14.153979);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::SelectToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::SelectToolsPanel::SelectAllButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::SelectToolsPanel::BackButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ProjectionToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ProjectionToolsPanel::IsoProjectButton');
    this.setZoom(12.413102687059721, new RVector(2.139, 2.60251, 0, true));
    var p = new RVector(0.35836, 0.055973);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(24.365251, 15.28182);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(-24.3653, -2.95613, 0, true));
    this.setToolOption('IsoProject/ProjectionType', 'Top');
    this.setToolOption('IsoProject/Method', RS.IsometricTrue);
    this.updateToolOptions();
    var p = new RVector(49.983342, 29.621506);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('IsoProject/ProjectionType', 'Left');
    this.setToolOption('IsoProject/Method', RS.IsometricTrue);
    this.updateToolOptions();
    var p = new RVector(47.888781, 9.884297);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.setZoom(12.413102687059721, new RVector(-24.2847, 9.85291, 0, true));
    var p = new RVector(50.386143, -0.427387);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(50.627823, -3.005309);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(45.55254, -1.394108);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(44.98862, -0.669068);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('IsoProjectTest11_000.dxf');
    this.tearDown();
    qDebug('finished IsoProjectTest11.test00()');
};

