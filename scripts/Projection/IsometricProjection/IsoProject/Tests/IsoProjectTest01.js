/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Projection/IsometricProjection/IsoProject/Tests/IsoProjectTest01.js
// Timestamp   : 2011-08-05 11:35:30
// Description : isometric projection of a spline using segment length 1

include('scripts/Developer/TestingDashboard/TdbTest.js');

function IsoProjectTest01() {
    TdbTest.call(this, 'scripts/Projection/IsometricProjection/IsoProject/Tests/IsoProjectTest01.js');
}

IsoProjectTest01.prototype = new TdbTest();

IsoProjectTest01.prototype.test00 = function() {
    qDebug('running IsoProjectTest01.test00()...');
    this.setUp();
    this.importFile('scripts/Projection/IsometricProjection/IsoProject/Tests/data/cube_spline.dxf');
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(43, 453), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(43, 453), Qt.LeftButton, 0, 0);
    this.setZoom(5.762495258019454, new RVector(7.22036, 22.0504, 0) );
    var p = new RVector(15.339311, 13.003826);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ProjectionToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ProjectionToolsPanel::IsoProjectButton');
    this.setZoom(5.762495258019454, new RVector(7.22036, 22.0504, 0) );
    var p = new RVector(0.415221, 19.424656);
    RDebug.startTimer();
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    RDebug.stopTimer("choose ref point");
    this.setToolOption('IsoProject/ProjectionType', 'Top');
    this.setToolOption('IsoProject/Method', RS.Isometric);
    this.updateToolOptions();
    this.updateToolOptions();
    this.setZoom(5.762495258019454, new RVector(7.22036, 22.0504, 0) );
    var p = new RVector(49.525891, 31.745707);
    RDebug.startTimer();
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    RDebug.stopTimer("choose dest point");
    this.setToolOption('IsoProject/ProjectionType', 'Right');
    this.setToolOption('IsoProject/Method', RS.Isometric);
    this.updateToolOptions();
    this.updateToolOptions();
    this.setZoom(5.762495258019454, new RVector(7.22036, 22.0504, 0) );
    var p = new RVector(49.872962, 16.301009);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('IsoProject/ProjectionType', 'Left');
    this.setToolOption('IsoProject/Method', RS.Isometric);
    this.updateToolOptions();
    this.updateToolOptions();
    this.setZoom(5.762495258019454, new RVector(7.22036, 22.0504, 0) );
    var p = new RVector(35.816552, 23.415982);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(29.395722, 7.450676);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(30.263402, 2.938742);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('IsoProjectTest01_000.dxf');
    this.tearDown();
    qDebug('finished IsoProjectTest01.test00()');
};

