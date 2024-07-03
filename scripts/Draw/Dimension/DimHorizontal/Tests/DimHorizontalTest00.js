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
// File        : scripts/Draw/Dimension/DimHorizontal/Tests/DimHorizontalTest00.js
// Timestamp   : 2011-04-27 09:34:36
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function DimHorizontalTest00() {
    TdbTest.call(this, 'scripts/Draw/Dimension/DimHorizontal/Tests/DimHorizontalTest00.js');
}

DimHorizontalTest00.prototype = new TdbTest();

DimHorizontalTest00.prototype.test00 = function() {
    qDebug('running DimHorizontalTest00.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Dimension/Tests/drawing00.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::DimensionToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::DimensionToolsPanel::DimHorizontalButton');
    this.setToolOption('Dimension/Prefix', '(No prefix)');
    this.setToolOption('Dimension/Text', '');
    this.setToolOption('Dimension/UpperTolerance', '');
    this.setToolOption('Dimension/LowerTolerance', '');
    this.updateToolOptions();
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(6.07897, 37.020197);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(35.042606, 33.158379);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(34.559879, 40.013106);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('Dimension/Prefix', '\u25FB (Square)');
    this.setToolOption('Dimension/Text', '12345');
    this.setToolOption('Dimension/UpperTolerance', '0.1');
    this.setToolOption('Dimension/LowerTolerance', '0.2');
    this.updateToolOptions();
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(10.616606, 19.159288);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(30.794606, 19.159288);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(31.277333, 7.380742);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('Dimension/Prefix', '(No prefix)');
    this.setToolOption('Dimension/Text', '');
    this.setToolOption('Dimension/UpperTolerance', '');
    this.setToolOption('Dimension/LowerTolerance', '');
    this.updateToolOptions();
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(24.13297, 14.428561);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(30.118788, 19.931652);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(34.849515, 24.85547);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(37.842424, 22.441833);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(36.490788, 26.110561);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10.357815442561206, new RVector(6.27885, -2.65002, 0) );
    var p = new RVector(2.313697, 27.848379);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('DimHorizontalTest00_000.dxf');
    this.tearDown();
    qDebug('finished DimHorizontalTest00.test00()');
};

